import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import * as featherIcons from 'react-feather';

import {
  colorPropType,
  iconPropType,
  sizePropType,
} from '../../utils/shared-prop-types';

import {
  getSpacingValues,
  withMediaQueries,
} from '../../assets/styles/style-helpers';

import { colors, sizes, icons } from '../../assets/styles/constants';

const {
  BRAND,
  ACCENT_ALPHA,
  ACCENT_BRAVO,
  ACCENT_CHARLIE,
  NEUTRAL,
  WHITE,
  BLACK,
} = colors;

const { ECHO } = sizes;
const { CODE } = icons;

// ....................styles....................

function containerStyles({
  spacing,
  spacingTop,
  spacingRight,
  spacingBottom,
  spacingLeft,
  theme,
}) {
  const spacingStyles = {
    padding: spacing && getSpacingValues(spacing, theme),
    paddingTop: spacingTop && getSpacingValues(spacingTop, theme),
    paddingRight: spacingRight && getSpacingValues(spacingRight, theme),
    paddingBottom: spacingBottom && getSpacingValues(spacingBottom, theme),
    paddingLeft: spacingBottom && getSpacingValues(spacingLeft, theme),
  };
  return withMediaQueries(theme)({
    ...spacingStyles,
  });
}

function colorStyles(color, theme) {
  const colorOptions = {
    [BRAND]: theme.colors.brand,
    [ACCENT_ALPHA]: theme.colors.accentAlpha,
    [ACCENT_BRAVO]: theme.colors.accentBravo,
    [ACCENT_CHARLIE]: theme.colors.accentCharlie,
    [NEUTRAL]: theme.colors.accentNeutral,
    [WHITE]: theme.colors.white,
    [BLACK]: theme.colors.black,
  };
  return colorOptions[color];
}

const sizeStyles = (size, theme) => theme.iconSizes[size];

// ....................component....................

const IconContainer = styled.div(containerStyles);

function Icon({
  color,
  size,
  spacing,
  spacingTop,
  spacingRight,
  spacingBottom,
  spacingLeft,
  type,
  theme,
  ...rest
}) {
  const IconElement = featherIcons[type];
  const IconColor = colorStyles(color, theme);
  const IconSize = sizeStyles(size, theme);
  return (
    <IconContainer
      spacing={spacing}
      spacingTop={spacingTop}
      spacingRight={spacingRight}
      spacingBottom={spacingBottom}
      spacingLeft={spacingLeft}
      role="img"
      aria-label={`An icon or logo SVG image depicting ${type}.`}
    >
      <IconElement {...rest} color={IconColor} size={IconSize} />
    </IconContainer>
  );
}

// ....................propTypes....................

Icon.propTypes = {
  color: colorPropType,
  size: sizePropType,
  spacing: sizePropType,
  spacingTop: sizePropType,
  spacingRight: sizePropType,
  spacingBottom: sizePropType,
  spacingLeft: sizePropType,
  type: iconPropType,
};

Icon.defaultProps = {
  color: BRAND,
  size: ECHO,
  spacing: null,
  spacingTop: null,
  spacingRight: null,
  spacingBottom: null,
  spacingLeft: null,
  type: CODE,
};

export default withTheme(Icon);
