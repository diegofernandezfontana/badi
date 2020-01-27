import React from 'react';
import { render } from '@testing-library/react';
import Card from '..';

import { palette } from '../../../Styles';

const mockedHref = 'https://comohacertorta.com/wp-content/uploads/como-hacer-chocotorta.jpg';

const mockedProps = {
  href: mockedHref,
  ingredients: 'chocolate, milk',
  thumbnail: 'https://comohacertorta.com/wp-content/uploads/como-hacer-chocotorta.jpg',
  title: 'Fideos con tuco',
};

const cardDataTestId = 'card-recipie';
const cardImgDataTestId = 'card-image';
const cardHrefTestID = 'card-anchor';

describe('Card component', () => {
  it('should display the card', () => {
    const { getByTestId } = render(<Card {...mockedProps} />);
    const card = getByTestId(cardDataTestId);

    expect(card).toBeTruthy();
  });

  it('should display the image', () => {
    const { getByTestId } = render(<Card {...mockedProps} />);
    const cardImg = getByTestId(cardImgDataTestId);

    expect(cardImg).toBeTruthy();
  });

  it('should display the image with correct style', () => {
    const { getByTestId } = render(<Card {...mockedProps} />);
    const cardImg = getByTestId(cardImgDataTestId);

    expect(cardImg).toHaveStyle(`
      width: 100%;
      object-fit: contain;
    `);
  });

  it('should display the title correctly', () => {
    const { getByText } = render(<Card {...mockedProps} />);
    const cardTitle = getByText('Fideos con tuco');

    expect(cardTitle).toBeTruthy();
    expect(cardTitle).toHaveStyle(`
      color: ${palette.blue.main};
      font-size: 21px;
    `);
  });

  it('should be able to click on the card', () => {
    const { getByTestId } = render(<Card {...mockedProps} />);
    const cardLinkWrapper = getByTestId(cardHrefTestID);

    expect(cardLinkWrapper).toHaveAttribute('href', mockedHref);
  });
});
