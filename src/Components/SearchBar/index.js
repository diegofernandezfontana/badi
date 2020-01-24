import React, { useState } from "react";

import DropDown from "../DropDown";
import GenericIcon from "../Icons/GenericIcon";
import { searchIconPath } from "../Icons/paths";

import { Wrapper, SearchInput } from "./styles";

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
    onHandleSubmit(searchValue);
    setLastSearches([searchValue, ...lastSearches]);
    setSearchValue("");
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <DropDown options={lastSearches} />
      <SearchInput
        value={searchValue}
        placeholder="Search by ingredients (comma separated)"
        type="text"
        onChange={handleChange}
      />
      <GenericIcon path={searchIconPath} />
    </Wrapper>
  );
};

export default SearchBar;
