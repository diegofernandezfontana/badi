import styled from "styled-components";

import { palette } from "../../Styles";

const searchBarWrapper = {
  border: `1px solid ${palette.grey.dark}`,
  height: "50px",
  borderRadius: "6px",
  padding: "0px 16px"
};

const searchInput = {
  width: "100%",
  border: "none"
};

const searchedValue = {
  color: palette.black.light
};

export const SearchWrapper = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  background-color: white;
  height: ${searchBarWrapper.height};
  border-radius: ${searchBarWrapper.borderRadius};
  padding: ${searchBarWrapper.padding};
  border: ${searchBarWrapper.border};
`;

export const SearchInput = styled.input`
  width: ${searchInput.width};
  border: ${searchInput.border};

  &:focus {
    outline: none;
  }
`;

export const LastSearchedParagraph = styled.p`
  color: ${searchedValue.color};
`;
