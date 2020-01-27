import styled from 'styled-components';

const getComputedStyle = ({ cursorPointer }) => `
  cursor: ${cursorPointer ? 'pointer' : 'default'};
`;

export const SvgWrapper = styled.svg`
  ${props => getComputedStyle(props)}
`;
