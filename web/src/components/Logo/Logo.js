import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import { colorPropType, sizePropType } from '../../utils/shared-prop-types';

import {
  getSpacingValues,
  withMediaQueries,
} from '../../assets/styles/style-helpers';

import { colors, sizes } from '../../assets/styles/style-enums';

const {
  BRAND,
  ACCENT_ALPHA,
  ACCENT_BRAVO,
  ACCENT_CHARLIE,
  NEUTRAL,
  WHITE,
  BLACK,
} = colors;

const { DELTA } = sizes;

// ....................styles....................

function containerStyles({
  size,
  spacing,
  spacingTop,
  spacingRight,
  spacingBottom,
  spacingLeft,
  theme,
}) {
  return withMediaQueries(theme)({
    height: theme.iconSizes[size],
    margin: spacing && getSpacingValues(spacing, theme),
    marginTop: spacingTop && getSpacingValues(spacingTop, theme),
    marginRight: spacingRight && getSpacingValues(spacingRight, theme),
    marginBottom: spacingBottom && getSpacingValues(spacingBottom, theme),
    marginLeft: spacingBottom && getSpacingValues(spacingLeft, theme),
  });
}

function getLogoColor(color, theme) {
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

const getLogoSize = (size, theme) => theme.iconSizes[size];

// ....................component....................

const LogoContainer = styled.div(containerStyles);

function Logo({
  color,
  size,
  spacing,
  spacingTop,
  spacingRight,
  spacingBottom,
  spacingLeft,
  theme,
}) {
  const LogoColor = getLogoColor(color, theme);
  const LogoSize = getLogoSize(size, theme);

  return (
    <LogoContainer
      size={size}
      spacing={spacing}
      spacingTop={spacingTop}
      spacingRight={spacingRight}
      spacingBottom={spacingBottom}
      spacingLeft={spacingLeft}
      role="img"
      aria-label="SVG image of a robot used as the brand logo for Tom Hendra, Web
        Developer."
    >
      <svg
        viewBox="0 0 60 68"
        xmlns="http://www.w3.org/2000/svg"
        height={LogoSize}
        fill={LogoColor}
        fillRule="evenodd"
        clipRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
      >
        <path
          // eslint-disable-next-line max-len
          d="M13.232 31.588a19.712 19.712 0 01-1.881-.587c-3.088-1.167-6.747-3.225-6.747-7.197V9.411c0-3.972 3.659-6.03 6.747-7.197C15.503.646 23.461 0 29.516 0S43.529.646 47.68 2.214c3.089 1.167 6.747 3.225 6.747 7.197v14.393c0 3.972-3.658 6.03-6.747 7.197-.269.102-1.16.415-1.871.585.342.103.665.199.899.278 7.471 2.396 12.342 6.181 12.342 9.932 0 3.719-4.867 7.509-12.332 9.915 1.66 7.668.817 13.779-2.431 15.654-3.223 1.861-8.942-.463-14.762-5.731-5.82 5.268-11.54 7.592-14.763 5.731-3.248-1.875-4.09-7.986-2.43-15.654C4.866 49.305 0 45.515 0 41.796c0-3.751 4.871-7.536 12.341-9.932.244-.079.436-.138.891-.276zm28.633 13.576c3.782 9.71 3.982 18.104 1.038 19.804-2.166 1.251-6.628-.79-11.433-5.202 3.119-3.17 6.189-7.148 8.842-11.742a62.251 62.251 0 001.553-2.86zm-24.681 0a62.278 62.278 0 001.554 2.86c2.652 4.594 5.723 8.572 8.842 11.742-4.806 4.412-9.267 6.453-11.434 5.202-2.944-1.7-2.744-10.094 1.038-19.804zm18.261-12.138a61.076 61.076 0 014.984 8.77 60.898 60.898 0 01-2.514 4.844c-2.549 4.414-5.484 8.222-8.39 11.228-2.906-3.006-5.842-6.814-8.39-11.228a60.915 60.915 0 01-2.515-4.844 60.915 60.915 0 014.984-8.769c2.04.128 4.064.188 5.912.188 1.852 0 3.883-.06 5.929-.189zm3.168-.233c10.3 1.58 17.669 5.603 17.669 9.003 0 2.5-3.995 5.342-10.212 7.297-1.191-4.283-3.105-8.93-5.758-13.525a63.016 63.016 0 00-1.699-2.775zm-18.176 0a62.07 62.07 0 00-1.699 2.775c-2.653 4.595-4.568 9.242-5.758 13.525-6.218-1.955-10.212-4.797-10.212-7.297 0-3.4 7.369-7.423 17.669-9.003zM51.659 10.61c0-3.309-3.252-5.025-5.997-5.997-3.69-1.307-10.764-1.845-16.146-1.845-5.382 0-12.456.538-16.147 1.845-2.745.972-5.997 2.688-5.997 5.997v11.995c0 3.31 3.252 5.025 5.997 5.997 3.691 1.307 10.765 1.846 16.147 1.846 5.382 0 12.456-.539 16.146-1.846 2.745-.972 5.997-2.687 5.997-5.997V10.61zM21.23 14.209c1.528 0 2.768 1.654 2.768 3.69 0 2.037-1.24 3.691-2.768 3.691-1.528 0-2.768-1.654-2.768-3.691 0-2.036 1.24-3.69 2.768-3.69zm16.608 0c1.527 0 2.768 1.654 2.768 3.69 0 2.037-1.241 3.691-2.768 3.691-1.528 0-2.768-1.654-2.768-3.691 0-2.036 1.24-3.69 2.768-3.69z"
        />
      </svg>
    </LogoContainer>
  );
}

// ....................propTypes....................

Logo.propTypes = {
  color: colorPropType,
  size: sizePropType,
  spacing: sizePropType,
  spacingTop: sizePropType,
  spacingRight: sizePropType,
  spacingBottom: sizePropType,
  spacingLeft: sizePropType,
};

Logo.defaultProps = {
  color: BRAND,
  size: DELTA,
  spacing: null,
  spacingTop: null,
  spacingRight: null,
  spacingBottom: null,
  spacingLeft: null,
};

export default withTheme(Logo);
