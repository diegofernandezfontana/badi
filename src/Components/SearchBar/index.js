import React, { useState } from "react";

import DropDown from "../DropDown";
import GenericIcon from "../Icons/GenericIcon";
import { searchIconPath } from "../Icons/paths";

import {
  SearchWrapper,
  SearchInput,
  Wrapper,
  LastSearchedParagraph
} from "./styles";

const SearchBar = props => {
  const { onHandleSubmit } = props;
  const [searchValue, setSearchValue] = useState("");
  const [lastSearches, setLastSearches] = useState([]);

  const handleChange = event => {
    const searchValues = event.target.value;

    setSearchValue(searchValues);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchValue.length > 3) {
      onHandleSubmit(searchValue);
      setLastSearches([searchValue, ...lastSearches]);
      setSearchValue("");
    }
  };

  const renderLastSearch = () => {
    if (lastSearches.length) {
      return (
        <LastSearchedParagraph>
          Ingredients: {lastSearches[0]}
        </LastSearchedParagraph>
      );
    }
    return null;
  };

  return (
    <Wrapper>
      <SearchWrapper onSubmit={handleSubmit}>
        <DropDown options={lastSearches} />
        <SearchInput
          value={searchValue}
          placeholder="Search recipies by ingredients (comma separated)"
          type="text"
          onChange={handleChange}
        />
        <GenericIcon path={searchIconPath} />
      </SearchWrapper>
      {renderLastSearch()}
    </Wrapper>
  );
};

export default SearchBar;
