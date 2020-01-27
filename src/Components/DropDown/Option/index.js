import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../Icons';
import { closeIconPath } from '../../Icons/paths';

import { RowWrapper, RecipieWrapper } from './styles';

const Option = props => {
  const { searchedValue, onHandleSearch, onHandleRemove } = props;

  return (
    <RowWrapper>
      <RecipieWrapper onClick={onHandleSearch({ searchedValue })}>{searchedValue}</RecipieWrapper>
      <Icon path={closeIconPath} onClick={onHandleRemove({ searchedValue })} data-testid="option-close-icon" />
    </RowWrapper>
  );
};

Option.propTypes = {
  searchedValue: PropTypes.string.isRequired,
  onHandleSearch: PropTypes.func.isRequired,
  onHandleRemove: PropTypes.func.isRequired,
};

export default Option;
