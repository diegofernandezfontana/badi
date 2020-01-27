import styled from 'styled-components';

import { palette, breakPoints } from '../../Styles/index';

const card = {
  border: `1px solid ${palette.grey.main};`,
  padding: '16px',
  margin: '16px',
  bgColor: `${palette.white.main}`,
  width: {
    small: '320px',
    medium: '360px',
  },
};

const title = {
  color: palette.blue.main,
  fontSize: '21px',
};

const ingredients = {
  color: palette.black.main,
};

export const Wrapper = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: ${card.width.small};
  padding: ${card.padding};
  margin: ${card.margin};
  border: ${card.border};
  border-radius: 4px;
  background-color: ${card.bgColor};
  overflow: hidden;
  transition: box-shadow 0.3s ease-in-out;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);

  @media ${breakPoints.laptop} {
    width: ${card.width.medium};
  }

  &:hover {
    transition: 0.5s;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  margin-bottom: 16px;
  width: 100%;
`;

export const CardImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100px;
`;

export const LinkTo = styled.a`
  text-decoration: none;
  width: 100%;
  height: 100%;
  color: ${palette.black.main};
`;

export const Title = styled.h1`
  color: ${title.color};
  font-size: ${title.fontSize};
`;

export const IngredientsParagraph = styled.p`
  padding: 8px;
  color: ${ingredients.color};
`;
