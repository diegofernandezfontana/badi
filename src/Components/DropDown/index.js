import React, { useState } from "react";

import GenericIcon from "../Icons/GenericIcon";
import { expandMoreIconPath } from "../Icons/paths";
import Option from "./Option";

import { Wrapper, OptionsWrapper } from "./styles";

const DropDown = props => {
  const { options } = props;
  const [showOptions, setShowOptions] = useState(false);

  const handleDisplay = () => {
    setShowOptions(!showOptions);
  };

  const renderOptions = () => {
    if (showOptions) {
      return options.map(option => {
        return <Option searchedValue={option} />;
      });
    }

    return null;
  };

  return (
    <Wrapper>
      <GenericIcon onClick={handleDisplay} />
      <OptionsWrapper showOptions={showOptions}>
        {renderOptions()}
      </OptionsWrapper>
    </Wrapper>
  );
};

export default DropDown;
