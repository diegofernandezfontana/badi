import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DropDown from '../';

const onClickMock = jest.fn();
const onRemoveClick = jest.fn();

const dropdownIconTestId = 'dropdown-icon';
const optionsWrapperTestId = 'dropdown-options-wrapper';

const mockedData = {
  options: [],
  onHandleSearch: onClickMock,
  onHandleRemove: onRemoveClick,
};

const mockedOptionsData = ['tomato', 'lettuce, cheese', 'meat'];

describe('DropDown Component', () => {
  it('should render the icon but not the dropdown', () => {
    const { getByTestId, queryByTestId } = render(<DropDown {...mockedData} />);

    const icon = getByTestId(dropdownIconTestId);
    const optionsWrapper = queryByTestId(optionsWrapperTestId);

    expect(optionsWrapper).not.toBeInTheDocument();
    expect(icon).toBeTruthy();
  });

  it('shouldnt display items if icon is clicked but doesnt have options', () => {
    const { getByTestId, queryByTestId } = render(<DropDown {...mockedData} />);

    const icon = getByTestId(dropdownIconTestId);
    const optionsWrapper = queryByTestId(optionsWrapperTestId);
    fireEvent.click(icon);

    expect(optionsWrapper).not.toBeInTheDocument();
  });

  it('should display options if icon is clicked and has options', () => {
    const { getByTestId, queryByTestId } = render(<DropDown {...mockedData} options={mockedOptionsData} />);

    const icon = getByTestId(dropdownIconTestId);
    fireEvent.click(icon);

    const optionsWrapper = queryByTestId(optionsWrapperTestId);
    expect(optionsWrapper).toBeInTheDocument();
  });

  it('should close dropdown if its has been open before and close icons has been clicked again', () => {
    const { getByTestId, queryByTestId } = render(<DropDown {...mockedData} options={mockedOptionsData} />);

    const icon = getByTestId(dropdownIconTestId);
    fireEvent.click(icon);

    const optionsWrapper = queryByTestId(optionsWrapperTestId);
    expect(optionsWrapper).toBeInTheDocument();

    fireEvent.click(icon);
    expect(optionsWrapper).not.toBeInTheDocument();
  });
});
