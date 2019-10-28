import React from 'react';
import { withTheme } from 'emotion-theming';
import * as featherIcons from 'react-feather';
import PropTypes from 'prop-types';

import { colors, icons, sizes } from '../../assets/styles/constants';

const { NEUTRAL, PRIMARY } = colors;
const {
  BRIEFCASE,
  CODE,
  PENTOOL,
  CODEPEN,
  GITHUB,
  LINKEDIN,
  TWITTER,
  LINK,
  LOADER,
  TOGGLELEFT,
  TOGGLERIGHT,
} = icons;
const {
  ALPHA,
  BRAVO,
  CHARLIE,
  DELTA,
  ECHO,
  FOXTROT,
  GOLF,
  HOTEL,
  INDIA,
  JULIETT,
  KILO,
} = sizes;

/**
 * `....................styles....................`
 */

const colorStyles = (color, theme) => {
  const colorOptions = {
    [NEUTRAL]: theme.colors.n000,
    [PRIMARY]: theme.colors.p500,
  };
  return colorOptions[color];
};

const sizeStyles = (size, theme) => theme.iconSizes[size];

/**
 * `....................component....................`
 */

const Icon = ({ color, size, type, theme }) => {
  const IconElement = featherIcons[type];
  const IconColor = colorStyles(color, theme);
  const IconSize = sizeStyles(size, theme);
  return <IconElement color={IconColor} size={IconSize} />;
};

/**
 * `....................propTypes....................`
 */

Icon.propTypes = {
  color: PropTypes.oneOf([PRIMARY, NEUTRAL]),
  size: PropTypes.oneOf([
    ALPHA,
    BRAVO,
    CHARLIE,
    DELTA,
    ECHO,
    FOXTROT,
    GOLF,
    HOTEL,
    INDIA,
    JULIETT,
    KILO,
  ]),
  type: PropTypes.oneOf([
    BRIEFCASE,
    CODE,
    PENTOOL,
    CODEPEN,
    GITHUB,
    LINKEDIN,
    TWITTER,
    LINK,
    LOADER,
    TOGGLELEFT,
    TOGGLERIGHT,
  ]),
};

Icon.defaultProps = {
  color: PRIMARY,
  size: ECHO,
  type: CODE,
};

export default withTheme(Icon);
