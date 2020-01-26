import React, { useState } from "react";
import PropTypes from "prop-types";

import GenericIcon from "../Icons/GenericIcon";
import Option from "./Option";

import { Wrapper, OptionsWrapper } from "./styles";

const DropDown = props => {
  const { options, onHandleSearch, onHandleRemove } = props;
  const [showOptions, setShowOptions] = useState(false);

  const handleDisplay = () => {
    if (options.length) {
      setShowOptions(!showOptions);
    }
  };

  const renderOptions = () => {
    if (showOptions && options.length) {
      return options.map(option => {
        return (
          <Option
            searchedValue={option}
            onHandleSearch={onHandleSearch}
            onHandleRemove={onHandleRemove}
            key={option}
          />
        );
      });
    }

    return null;
  };

  const renderDropDown = () => {
    if (showOptions && options.length) {
      return (
        <OptionsWrapper showOptions={showOptions}>
          {renderOptions()}
        </OptionsWrapper>
      );
    }
  };

  return (
    <Wrapper>
      <GenericIcon onClick={handleDisplay} />
      {renderDropDown()}
    </Wrapper>
  );
};

DropDown.propTypes = {
  options: PropTypes.array,
  onHandleSearch: PropTypes.func,
  onHandleRemove: PropTypes.func
};

export default DropDown;
