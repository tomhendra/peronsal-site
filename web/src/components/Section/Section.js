import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import {
  childrenPropType,
  variantPropType,
  sizePropType,
} from '../../utils/shared-prop-types';
import {
  getSpacingValues,
  withMediaQueries,
} from '../../assets/styles/style-helpers';

import { variants } from '../../assets/styles/style-enums';

const { PRIMARY, SECONDARY, TERTIARY } = variants;

// ....................styles....................

function styles({
  paddingTop,
  paddingBottom,
  variant,
  centerContentVertically,
  fullViewportHeight,
  devMode,
  theme,
}) {
  const baseStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: centerContentVertically && 'center',
    minHeight: fullViewportHeight && '100vh',
    // padding top and bottom standard values unless specified.
    // When using child elements within sections, spacing only needs to be added
    // to the bottom of each child element, except for the last child in each section,
    // which should have no bottom spacing applied to it.
    paddingTop: !paddingTop
      ? [
          theme.spacings.india,
          theme.spacings.india,
          theme.spacings.juliett,
          theme.spacings.juliett,
          theme.spacings.kilo,
        ]
      : getSpacingValues(paddingTop, theme),
    paddingBottom: !paddingBottom
      ? [
          theme.spacings.india,
          theme.spacings.india,
          theme.spacings.juliett,
          theme.spacings.juliett,
          theme.spacings.kilo,
        ]
      : getSpacingValues(paddingBottom, theme),
    paddingLeft: [
      theme.grid.alpha.gutter,
      theme.grid.bravo.gutter,
      theme.grid.charlie.gutter,
      theme.grid.delta.gutter,
      theme.grid.echo.gutter,
    ],
    paddingRight: [
      theme.grid.alpha.gutter,
      theme.grid.bravo.gutter,
      theme.grid.charlie.gutter,
      theme.grid.delta.gutter,
      theme.grid.echo.gutter,
    ],
    // position relative to allow for absolutely positioned background components
    position: 'relative',
    width: '100vw',
    // in case of not using Firefox devTools we have our own "devMode" :-)
    border: devMode && '1px dashed hsl(300, 100%, 50%)',
    '& > *': {
      border: devMode && '1px dashed hsl(200, 100%, 50%)',
    },
  };
  // color variants must be matched child elements.
  // I.e.Text, Heading, Subheading must be of same variant.
  const colorVariants = {
    [PRIMARY]: {
      backgroundColor: theme.colors.white,
    },
    [SECONDARY]: {
      backgroundColor: theme.colors.bodyBg,
    },
    [TERTIARY]: {
      backgroundColor: theme.colors.n100,
    },
  };

  const colorConfig = colorVariants[variant];

  return withMediaQueries(theme)({
    ...baseStyles,
    ...colorConfig,
  });
}

// ....................component....................

const Section = styled.section(styles);

// ....................propTypes....................

Section.propTypes = {
  paddingTop: sizePropType,
  paddingBottom: sizePropType,
  variant: variantPropType,
  centerContentVertically: PropTypes.bool,
  fullViewportHeight: PropTypes.bool,
  devMode: PropTypes.bool,
  children: childrenPropType,
};

Section.defaultProps = {
  paddingTop: null,
  paddingBottom: null,
  variant: SECONDARY,
  centerContentVertically: null,
  fullViewportHeight: null,
  devMode: false,
  children: null,
};

export default Section;
