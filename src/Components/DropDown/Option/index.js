import React from "react";
import PropTypes from "prop-types";

import GenericIcon from "../../Icons/GenericIcon";
import { closeIconPath } from "../../Icons/paths";

import { RowWrapper, RecipieWrapper } from "./styles";

const Option = props => {
  const { searchedValue, onHandleSearch, onHandleRemove } = props;

  return (
    <RowWrapper>
      <RecipieWrapper onClick={onHandleSearch({ searchedValue })}>
        {searchedValue}
      </RecipieWrapper>
      <GenericIcon
        path={closeIconPath}
        onClick={onHandleRemove({ searchedValue })}
      />
    </RowWrapper>
  );
};

Option.propTypes = {
  searchedValue: PropTypes.string,
  onHandleSearch: PropTypes.func,
  onHandleRemove: PropTypes.func
};

export default Option;
