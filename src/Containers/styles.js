import styled from "styled-components";

import { palette, breakPoints, sizes } from "../Styles";

const searchBar = {
  maxWidth: sizes.tablet
};

const cards = {
  maxWidth: {
    tablet: sizes.tablet,
    laptop: sizes.laptop
  }
};

export const MainBackground = styled.div`
  background-color: red;
  background-color: ${palette.grey.main};
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  min-height: 100vh;
`;

export const Container = styled.div`
  padding: 8px;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;

  @media ${breakPoints.tablet} {
    max-width: ${cards.maxWidth.tablet};
  }

  @media ${breakPoints.laptop} {
    max-width: ${cards.maxWidth.laptop};
  }
`;

export const SearchBarContainer = styled.div`
  @media ${breakPoints.tablet} {
    margin: 0 auto;
    max-width: ${searchBar.maxWidth};
  }
`;
