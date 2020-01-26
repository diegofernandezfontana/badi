import styled from "styled-components";

import { palette, breakPoints, sizes } from "../../Styles/index";

const card = {
  border: `1px solid ${palette.grey.main};`,
  padding: "16px",
  margin: "16px",
  bgColor: `${palette.white.main}`,
  width: {
    small: "320px",
    medium: "360px"
  }
};

const title = {
  color: palette.blue.main
};

const ingredients = {
  color: palette.black.main
};

export const Wrapper = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${card.width.small};
  padding: ${card.padding};
  margin: ${card.margin};
  border: ${card.border};
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
  background-color: ${card.bgColor};
  overflow: hidden;
  text-align: center;

  @media ${breakPoints.tablet} {
    width: ${card.width.medium};
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
`;

export const LinkTo = styled.a`
  text-decoration: none;
  width: 100%;
  height: 100%;
  color: ${palette.black.main};
`;

export const Title = styled.h1`
  color: ${title.color};
  font-size: 21px;
`;

export const IngredientsParagraph = styled.p`
  padding: 8px;
  color: ${ingredients.color};
`;
