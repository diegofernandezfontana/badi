import styled from "styled-components";

import { palette } from "./Styles/index";

export const MainBackground = styled.div`
  background-color: ${palette.grey.main};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1440px;
  padding-top: 100px;
  min-height: 1000px;
`;
