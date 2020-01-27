import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";

import DropDown from "../DropDown";
import GenericIcon from "../Icons/GenericIcon";
import { searchIconPath } from "../Icons/paths";

import { SearchWrapper, SearchInput, LastSearchedParagraph, SearchBarContainer} from "./styles";

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
      setSearchValue("");
      let searchesArr = lastSearches;

      if(searchesArr.length > 4){
        searchesArr.pop()
      }

      setLastSearches([searchValue, ...searchesArr]);
    }
  };

  const getFilteredSearches = searchedValue => {
    const recipieIdx = lastSearches.findIndex(elem => elem === searchedValue);

    return lastSearches.filter((_, idx) => idx !== recipieIdx);
  };

  const handleSearchAgain = ({ searchedValue }) => event => {
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
    <SearchBarContainer>
      <SearchWrapper onSubmit={handleSubmit}>
        <DropDown
          options={lastSearches}
          onHandleSearch={handleSearchAgain}
          onHandleRemove={handleRemoveItem}
        />
        <SearchInput
          value={searchValue}
          placeholder="Search recipies by ingredients (comma separated)"
          type="text"
          onChange={handleChange}
          data-testid="searchbar-input"
        />
        <GenericIcon path={searchIconPath}/>
      </SearchWrapper>
      {renderLastSearch()}
    </SearchBarContainer>
  );
};

SearchBar.propTypes = {
  onHandleSubmit: PropTypes.func,
  onHandleRemove: PropTypes.func,
  onHandleSearch: PropTypes.func
};

export default SearchBar;
