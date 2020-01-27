import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

import {
  childrenPropType,
  variantPropType,
  sizePropType,
} from '../../utils/shared-prop-types';
import { withMediaQueries } from '../../assets/styles/style-helpers';

import Heading from '../Heading';
import Subheading from '../Subheading';
import Text from '../Text';

import { variants } from '../../assets/styles/constants';

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
    justifyContent: centerContentVertically && 'center',
    minHeight: fullViewportHeight && '100vh',
    paddingTop: !paddingTop
      ? [theme.spacings.kilo]
      : theme.spacings[paddingTop],
    paddingBottom: !paddingBottom
      ? [theme.spacings.kilo]
      : theme.spacings[paddingBottom],
    position: 'relative',
    width: '100vw',
    border: devMode && '1px dashed hsl(300, 100%, 50%)',
    '& > *': {
      border: devMode && '1px dashed hsl(200, 100%, 50%)',
    },
  };
  // Decision to move color logic here for consistency of text-based elements within
  // particular coloured section. Hoping this makes for a better DX.
  const colorVariants = {
    [PRIMARY]: {
      backgroundColor: theme.colors.white,
      [Text]: {
        color: theme.colors.n200,
      },
      [Subheading]: {
        color: theme.colors.n300,
      },
      [Heading]: {
        color: theme.colors.n400,
      },
    },
    [SECONDARY]: {
      backgroundColor: theme.colors.bodyBg,
      [Text]: {
        color: theme.colors.bodyColor,
      },
      [Subheading]: {
        color: theme.colors.n200,
      },
      [Heading]: {
        color: theme.colors.n300,
      },
    },
    [TERTIARY]: {
      backgroundColor: theme.colors.n100,
      [Text]: {
        color: theme.colors.n900,
      },
      [Subheading]: {
        color: theme.colors.n800,
      },
      [Heading]: {
        color: theme.colors.n700,
      },
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

export default withTheme(Section);
