import styled from "styled-components";

import { palette } from "../../Styles";

const searchBarWrapper = {
  border: `1px solid ${palette.grey.dark}`,
  height: "50px",
  borderRadius: "6px",
  padding: "0px 16px"
};

const searchInput = {
  width: "450px",
  padding: "16px",
  border: "none"
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
  padding: ${searchInput.padding};
  border: ${searchInput.border};

  &:focus {
    outline: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LastSearchedParagraph = styled.p`
  color: green;
`;
