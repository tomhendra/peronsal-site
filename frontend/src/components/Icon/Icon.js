import React from 'react';
import styled from '@emotion/styled';
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

const containerStyles = ({ spacing, theme }) => ({
  padding: theme.spacings[spacing],
});

const colorStyles = (color, theme) => {
  const colorOptions = {
    [NEUTRAL]: theme.colors.n600,
    [PRIMARY]: theme.colors.p500,
  };
  return colorOptions[color];
};

const sizeStyles = (size, theme) => theme.iconSizes[size];

/**
 * `....................component....................`
 */

const IconContainer = styled.div(containerStyles);

const Icon = ({ alt, color, size, spacing, type, theme }) => {
  const IconElement = featherIcons[type];
  const IconColor = colorStyles(color, theme);
  const IconSize = sizeStyles(size, theme);
  return (
    <IconContainer spacing={spacing}>
      <IconElement aria-labelledby={alt} color={IconColor} size={IconSize} />
    </IconContainer>
  );
};

/**
 * `....................propTypes....................`
 */

Icon.propTypes = {
  alt: PropTypes.string,
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
  spacing: PropTypes.oneOf([
    ALPHA,
    BRAVO,
    CHARLIE,
    DELTA,
    ECHO,
    FOXTROT,
    GOLF,
    HOTEL,
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
  alt: '',
  color: PRIMARY,
  size: ECHO,
  spacing: null,
  type: CODE,
};

export default withTheme(Icon);
