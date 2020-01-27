import styled from 'styled-components';

import { breakPoints, sizes, palette } from '../../Styles';

const cards = {
  maxWidth: {
    mobile: sizes.mobile,
    tablet: sizes.tablet,
    laptop: sizes.laptop,
  },
};

const loadMoreText = {
  color: palette.black.dark,
};

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  max-width: ${cards.maxWidth.mobile};

  @media ${breakPoints.tablet} {
    max-width: ${cards.maxWidth.tablet};
  }

  @media ${breakPoints.laptop} {
    max-width: ${cards.maxWidth.laptop};
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoadMoreText = styled.p`
  color: ${loadMoreText.color};

  &:hover {
    cursor: pointer;
  }
`;
