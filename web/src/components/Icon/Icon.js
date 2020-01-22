import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import * as featherIcons from 'react-feather';
import PropTypes from 'prop-types';

import { colors, icons, sizes } from '../../assets/styles/constants';

const { NEUTRAL, PRIMARY, WHITE } = colors;
const {
  BRIEFCASE,
  CHECK,
  CODE,
  PEN_TOOL,
  CODEPEN,
  GITHUB,
  LINKEDIN,
  TWITTER,
  LINK,
  LOADER,
  TOGGLE_LEFT,
  TOGGLE_RIGHT,
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

// ....................styles....................

const containerStyles = ({ spacing, theme }) => ({
  padding: theme.spacings[spacing],
});

function colorStyles(color, theme) {
  const colorOptions = {
    [NEUTRAL]: theme.colors.n400,
    [PRIMARY]: theme.colors.p400,
    [WHITE]: theme.colors.white,
  };
  return colorOptions[color];
}

const sizeStyles = (size, theme) => theme.iconSizes[size];

// ....................component....................

const IconContainer = styled.div(containerStyles);

function Icon({ color, size, spacing, type, theme, ...rest }) {
  const IconElement = featherIcons[type];
  const IconColor = colorStyles(color, theme);
  const IconSize = sizeStyles(size, theme);
  return (
    <IconContainer
      spacing={spacing}
      role="img"
      aria-label={`An icon or logo SVG image depicting ${type}.`}
    >
      <IconElement {...rest} color={IconColor} size={IconSize} />
    </IconContainer>
  );
}

// ....................propTypes....................

Icon.propTypes = {
  color: PropTypes.oneOf([PRIMARY, NEUTRAL, WHITE]),
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
    CHECK,
    CODE,
    PEN_TOOL,
    CODEPEN,
    GITHUB,
    LINKEDIN,
    TWITTER,
    LINK,
    LOADER,
    TOGGLE_LEFT,
    TOGGLE_RIGHT,
  ]),
};

Icon.defaultProps = {
  color: PRIMARY,
  size: ECHO,
  spacing: null,
  type: CODE,
};

export default withTheme(Icon);
