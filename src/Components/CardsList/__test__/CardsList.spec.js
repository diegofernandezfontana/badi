import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CardsList from '..';

const onLoadMoreMock = jest.fn();

const mockedProps = {
  cards: [],
  onHandleLoadMore: onLoadMoreMock,
};

const cardsMock = [
  {
    href: 'https://s.libertaddigital.com/2019/08/01/1920/1080/fit/impossible-whopper-burguer-king.jpg',
    ingredients: 'bread, burguer, tomato, cheese',
    thumbnail: 'https://s.libertaddigital.com/2019/08/01/1920/1080/fit/impossible-whopper-burguer-king.jpg',
    title: 'Best burguer',
  },
  {
    href: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Weekend_in_Buenos_Aires.jpg',
    ingredients: 'bread crumbs, chicken',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Weekend_in_Buenos_Aires.jpg',
    title: 'Milanesa',
  },
];

const cardsContainerId = 'cards-container';
const loadMoreParagraph = 'Click me to load more...';

describe('CardList component', () => {
  it('should display the Wrapper', () => {
    const { getByTestId } = render(<CardsList {...mockedProps} />);
    const cardsContainer = getByTestId(cardsContainerId);

    expect(cardsContainer).toBeTruthy();
  });

  it('should not display load more text if it has no cards', () => {
    const { getByTestId, queryByText } = render(<CardsList {...mockedProps} />);
    const cardsContainer = getByTestId(cardsContainerId);
    const loadMoreText = queryByText(loadMoreParagraph);

    expect(cardsContainer).toBeTruthy();
    expect(loadMoreText).not.toBeTruthy();
  });

  it('should display load more text if it has cards', () => {
    const { getByTestId, queryByText } = render(<CardsList {...mockedProps} cards={cardsMock} />);
    const cardsContainer = getByTestId(cardsContainerId);
    const loadMoreText = queryByText(loadMoreParagraph);

    expect(cardsContainer).toBeTruthy();
    expect(loadMoreText).toBeTruthy();
  });

  it('should fire an event when load more text is clicked ', () => {
    const { queryByText } = render(<CardsList {...mockedProps} cards={cardsMock} />);
    const loadMoreText = queryByText(loadMoreParagraph);

    fireEvent.click(loadMoreText);

    expect(onLoadMoreMock).toHaveBeenCalled();
  });
});
