import styled from "styled-components";

const getComputedStyle = ({ showOptions }) => `
  display: ${showOptions ? "block" : "none"};
`;

const optionsWrapper = {
  width: "300px",
  top: "50px"
};

export const Wrapper = styled.div`
  position: relative;
  background-color: white;
`;

export const OptionsWrapper = styled.div`
  position: absolute;
  top: ${optionsWrapper.top};
  width: ${optionsWrapper.width};

  ${props => getComputedStyle(props)}
`;
