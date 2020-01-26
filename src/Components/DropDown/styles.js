import styled from "styled-components";
import { palette } from "../../Styles";

const getComputedStyle = ({ showOptions }) => `
  display: ${showOptions ? "block" : "none"};

`;

const optionsWrapper = {
  width: "300px",
  top: "50px",
  border: `1px solid ${palette.grey.dark}`,
  zIndex: 2,
  borderRadius: "4px"
};

export const Wrapper = styled.div`
  position: relative;
  background-color: white;
`;

export const OptionsWrapper = styled.div`
  position: absolute;
  top: ${optionsWrapper.top};
  width: ${optionsWrapper.width};
  border: ${optionsWrapper.border};
  z-index: ${optionsWrapper.zIndex};
  border-radius: ${optionsWrapper.borderRadius};

  &:before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    top: -5px;
    left: 9px;
    background-color: ${palette.white.main};
    border: ${optionsWrapper.border};
  }

  ${props => getComputedStyle(props)}
`;
