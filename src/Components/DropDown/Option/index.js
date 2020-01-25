import React from "react";

import GenericIcon from "../../Icons/GenericIcon";
import { closeIconPath } from "../../Icons/paths";

import { RowWrapper, RecipieWrapper } from "./styles";

const Option = props => {
  const { searchedValue } = props;

  return (
    <RowWrapper>
      <RecipieWrapper> {searchedValue} </RecipieWrapper>
      <GenericIcon path={closeIconPath} />
    </RowWrapper>
  );
};

export default Option;
