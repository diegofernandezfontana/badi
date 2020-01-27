import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from '../';

const onSubmitMock = jest.fn();

const mockedProps = {
  onHandleSubmit: onSubmitMock,
};

const inputTestid = 'searchbar-input';
const defaultPaceholder = 'Search recipies by ingredients (comma separated)';

const lastOptionSearched = searchedValue => {
  return `Results for: ${searchedValue}`;
};

describe('SearchBar component', () => {
  it('should display the SearchBar and its placeholder ', () => {
    const { getByTestId, getByPlaceholderText } = render(<SearchBar {...mockedProps} />);

    const input = getByTestId(inputTestid);
    const placeholder = getByPlaceholderText(defaultPaceholder);

    expect(input).toBeInTheDocument();
    expect(placeholder).toBeInTheDocument();
  });

  it('should have the same value as the user typed.', () => {
    const { getByTestId } = render(<SearchBar {...mockedProps} />);

    const input = getByTestId(inputTestid);

    fireEvent.change(input, { target: { value: 'Apple, peach' } });

    expect(input.value).toBe('Apple, peach');
  });

  it('should not submit the form when input has less than 3 characters', () => {
    const { getByTestId } = render(<SearchBar {...mockedProps} />);

    const input = getByTestId(inputTestid);

    fireEvent.change(input, { target: { value: 'Ch' } });
    fireEvent.submit(input);

    expect(onSubmitMock).not.toHaveBeenCalled();
  });

  it('should submit the form when input has more than 3 characters and it should clear the input', () => {
    const { getByTestId } = render(<SearchBar {...mockedProps} />);

    const input = getByTestId(inputTestid);

    fireEvent.change(input, { target: { value: 'Cheese, eggs' } });
    fireEvent.submit(input);

    expect(onSubmitMock).toHaveBeenCalled();
    expect(input.value).toBe('');
  });

  it('should not display last items searched when it has no searched values', () => {
    const { queryByText } = render(<SearchBar {...mockedProps} />);

    const searchedValue = queryByText(`Results for:`);
    expect(searchedValue).not.toBeInTheDocument();
  });

  it('should display the last items searched when it has values searched before', () => {
    const { getByTestId, getByText } = render(<SearchBar {...mockedProps} />);

    const input = getByTestId(inputTestid);

    const searchParam = 'Cheese, tomato sauce';

    fireEvent.change(input, { target: { value: searchParam } });
    fireEvent.submit(input);

    const searchedValue = getByText(lastOptionSearched(searchParam));
    expect(searchedValue).toBeInTheDocument();
  });
});
