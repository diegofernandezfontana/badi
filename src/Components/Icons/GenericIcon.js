import React from "react";

import { expandMoreIconPath } from "./paths";
import { palette } from "../../Styles";

const defaultPath = expandMoreIconPath;

const GenericIcon = props => {
  const { color, scale, path, viewBox, ...restProps } = props;

  const width = viewBox * scale;
  const height = viewBox * scale;
  const customViewBox = `0 0 ${viewBox} ${viewBox}`;

  return (
    <svg width={width} height={height} viewBox={customViewBox} {...restProps}>
      <path fill={color} d={path} />
    </svg>
  );
};

GenericIcon.defaultProps = {
  color: palette.grey.dark,
  path: defaultPath,
  viewBox: 24,
  scale: 1
};

export default GenericIcon;
