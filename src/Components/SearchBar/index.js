import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";

import DropDown from "../DropDown";
import GenericIcon from "../Icons/GenericIcon";
import { searchIconPath } from "../Icons/paths";

import { SearchWrapper, SearchInput, LastSearchedParagraph } from "./styles";

const SearchBar = props => {
  const { onHandleSubmit, onHandleSearch } = props;
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

  const getFilteredSearches = searchedValue => {
    const recipieIdx = lastSearches.findIndex(elem => elem === searchedValue);

    return lastSearches.filter((_, idx) => idx !== recipieIdx);
  };

  const handleSearch = ({ searchedValue }) => event => {
    const filteredSearches = getFilteredSearches(searchedValue);

    setLastSearches([searchedValue, ...filteredSearches]);
    onHandleSubmit(searchedValue);
  };

  const handleRemoveItem = ({ searchedValue }) => event => {
    const filteredSearches = getFilteredSearches(searchedValue);

    setLastSearches(filteredSearches);
  };

  const renderLastSearch = () => {
    if (lastSearches.length) {
      return (
        <LastSearchedParagraph>
          Results for: {lastSearches[0]}
        </LastSearchedParagraph>
      );
    }

    return null;
  };

  return (
    <Fragment>
      <SearchWrapper onSubmit={handleSubmit}>
        <DropDown
          options={lastSearches}
          onHandleSearch={handleSearch}
          onHandleRemove={handleRemoveItem}
        />
        <SearchInput
          value={searchValue}
          placeholder="Search recipies by ingredients (comma separated)"
          type="text"
          onChange={handleChange}
          data-testid="searchbar-input"
        />
        <GenericIcon path={searchIconPath} />
      </SearchWrapper>
      {renderLastSearch()}
    </Fragment>
  );
};

SearchBar.propTypes = {
  onHandleSubmit: PropTypes.func,
  onHandleRemove: PropTypes.func,
  onHandleSearch: PropTypes.func
};

export default SearchBar;
