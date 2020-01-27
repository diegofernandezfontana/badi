import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icons';
import Option from './Option';
import { useCloseDropDown } from '../../utils';

import { Wrapper, OptionsWrapper } from './styles';

const DropDown = props => {
  const { options, onHandleSearch, onHandleRemove } = props;
  const [showOptions, setShowOptions] = useState(false);

  const { ref, isDropDownOpen, setIsDropDownOpen } = useCloseDropDown();

  useEffect(() => {
    if (!isDropDownOpen) {
      setShowOptions(false);
    }
  }, [isDropDownOpen]);

  const handleDisplay = () => {
    if (options.length) {
      setShowOptions(!showOptions);
      setIsDropDownOpen(true);
    }
  };

  const renderOptions = () => {
    if (showOptions && options.length) {
      return options.map(option => {
        return (
          <Option searchedValue={option} onHandleSearch={onHandleSearch} onHandleRemove={onHandleRemove} key={option} />
        );
      });
    }

    return null;
  };

  const renderDropDown = () => {
    if (showOptions && options.length) {
      return (
        <OptionsWrapper showOptions={showOptions} ref={ref} data-testid="dropdown-options-wrapper">
          {renderOptions()}
        </OptionsWrapper>
      );
    }
  };

  return (
    <Wrapper>
      <Icon onClick={handleDisplay} data-testid="dropdown-icon" />
      {renderDropDown()}
    </Wrapper>
  );
};

DropDown.propTypes = {
  options: PropTypes.array,
  onHandleSearch: PropTypes.func,
  onHandleRemove: PropTypes.func,
};

export default DropDown;
