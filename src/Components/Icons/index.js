import React from 'react';
import PropTypes from 'prop-types';

import { palette } from '../../Styles';
import { expandMoreIconPath } from './paths';
import { SvgWrapper } from './styles';
const defaultPath = expandMoreIconPath;

const Icon = props => {
  const { color, scale, path, cursorPointer, ...restProps } = props;

  const width = 24 * scale;
  const height = 24 * scale;
  const customViewBox = `0 0 ${width} ${height}`;

  return (
    <SvgWrapper width={width} height={height} viewBox={customViewBox} cursorPointer={cursorPointer} {...restProps}>
      <path fill={color} d={path} />
    </SvgWrapper>
  );
};

Icon.defaultProps = {
  color: palette.grey.dark,
  path: defaultPath,
  scale: 1,
};

Icon.propTypes = {
  color: PropTypes.string,
  path: PropTypes.string,
  scale: PropTypes.number,
  cursorPointer: PropTypes.bool,
};

export default Icon;
