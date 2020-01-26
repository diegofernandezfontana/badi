import styled from "styled-components";

import { palette, breakPoints } from "../../Styles/index";

const label = {
  bgColor: palette.red.main,
  color: palette.black.dark,
  left: {
    small: "50%",
    large: "55%"
  },
  top: {
    small: "20px",
    large: "30px"
  },
  width: "220px",
  fontSize: "12px"
};

export const Wrapper = styled.div`
  background-color: ${label.bgColor};
  transform: rotate(45deg);
  position: absolute;
  top: ${label.top.small};
  left: ${label.left.small};
  width: ${label.width};
  font-size: ${label.fontSize};

  @media ${breakPoints.tablet} {
    top: ${label.top.large};
    left: ${label.left.large};
  }
`;

export const Title = styled.h2`
  color: ${label.color};
`;

export const LabelText = styled.h3``;
