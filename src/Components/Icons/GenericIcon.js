import React from 'react';
import PropTypes from 'prop-types';

import { expandMoreIconPath } from './paths';
import { palette } from '../../Styles';

const defaultPath = expandMoreIconPath;

const GenericIcon = props => {
  const { color, scale, path, ...restProps } = props;

  const width = 24 * scale;
  const height = 24 * scale;
  const customViewBox = `0 0 ${width} ${height}`;

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
  scale: 1,
};

GenericIcon.propTypes = {
  color: PropTypes.string,
  path: PropTypes.string,
  scale: PropTypes.number,
  viewBox: PropTypes.number,
};

export default GenericIcon;
