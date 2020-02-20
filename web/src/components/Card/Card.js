import styled from '@emotion/styled';

import {
  childrenPropType,
  flexDirectionPropType,
  justifyContentPropType,
  alignItemsPropType,
  alignContentPropType,
  sizePropType,
  variantPropType,
  shadowPropType,
  colorPropType,
} from '../../utils/shared-prop-types';

import {
  shadowStandardAlpha,
  shadowStandardBravo,
  shadowStandardCharlie,
  shadowStandardDelta,
  shadowStandardEcho,
  shadowOffsetAlpha,
  shadowOffsetBravo,
  shadowOffsetCharlie,
  shadowOffsetDelta,
  shadowOffsetEcho,
  getSpacingValues,
  withMediaQueries,
} from '../../assets/styles/style-helpers';

import {
  colors,
  shadows,
  sizes,
  variants,
} from '../../assets/styles/style-enums';

const { BRAND, ACCENT_ALPHA, ACCENT_BRAVO, ACCENT_CHARLIE } = colors;
const { PRIMARY, SECONDARY, TERTIARY } = variants;

const {
  STANDARD_ALPHA,
  STANDARD_BRAVO,
  STANDARD_CHARLIE,
  STANDARD_DELTA,
  STANDARD_ECHO,
  OFFSET_ALPHA,
  OFFSET_BRAVO,
  OFFSET_CHARLIE,
  OFFSET_DELTA,
  OFFSET_ECHO,
} = shadows;
const { FOXTROT } = sizes;

// ....................styles....................

function styles({
  variant,
  accent,
  shadow,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  flexDirection,
  justifyContent,
  alignItems,
  alignContent,
  theme,
}) {
  const baseStyles = {
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.charlie,
    borderStyle: 'solid',
    borderWidth: theme.borderWidth.echo,
    display: 'flex',
    flexWrap: 'no-wrap',
    height: '100%',
    zIndex: theme.zIndex.card,
  };

  const paddingStyles = {
    padding: padding && getSpacingValues(padding, theme),
    paddingTop: paddingTop && getSpacingValues(paddingTop, theme),
    paddingRight: paddingRight && getSpacingValues(paddingRight, theme),
    paddingBottom: paddingBottom && getSpacingValues(paddingBottom, theme),
    paddingLeft: paddingBottom && getSpacingValues(paddingLeft, theme),
  };

  const flexboxStyles = {
    flexDirection,
    justifyContent,
    alignItems,
    alignContent,
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

  const accentStyles = {
    [BRAND]: {
      borderColor: theme.colors.brand,
    },
    [ACCENT_ALPHA]: {
      borderColor: theme.colors.accentAlpha,
    },
    [ACCENT_BRAVO]: {
      borderColor: theme.colors.accentBravo,
    },
    [ACCENT_CHARLIE]: {
      borderColor: theme.colors.accentCharlie,
    },
  };

  const accentConfig = accentStyles[accent];

  const shadowStyles = {
    [STANDARD_ALPHA]: shadowStandardAlpha(theme.colors.shadowNeutral),
    [STANDARD_BRAVO]: shadowStandardBravo(theme.colors.shadowNeutral),
    [STANDARD_CHARLIE]: shadowStandardCharlie(theme.colors.shadowNeutral),
    [STANDARD_DELTA]: shadowStandardDelta(theme.colors.shadowNeutral),
    [STANDARD_ECHO]: shadowStandardEcho(theme.colors.shadowNeutral),
    [OFFSET_ALPHA]: shadowOffsetAlpha(theme.colors.shadowNeutral),
    [OFFSET_BRAVO]: shadowOffsetBravo(theme.colors.shadowNeutral),
    [OFFSET_CHARLIE]: shadowOffsetCharlie(theme.colors.shadowNeutral),
    [OFFSET_DELTA]: shadowOffsetDelta(theme.colors.shadowNeutral),
    [OFFSET_ECHO]: shadowOffsetEcho(theme.colors.shadowNeutral),
  };

  const shadowConfig = shadowStyles[shadow];

  return withMediaQueries(theme)({
    ...baseStyles,
    ...paddingStyles,
    ...flexboxStyles,
    ...colorConfig,
    ...accentConfig,
    ...shadowConfig,
  });
}

// ....................component....................

const Card = styled.div(styles);

// ....................propTypes....................

Card.propTypes = {
  variant: variantPropType,
  accent: colorPropType,
  shadow: shadowPropType,
  padding: sizePropType,
  paddingTop: sizePropType,
  paddingRight: sizePropType,
  paddingBottom: sizePropType,
  paddingLeft: sizePropType,
  flexDirection: flexDirectionPropType,
  justifyContent: justifyContentPropType,
  alignItems: alignItemsPropType,
  alignContent: alignContentPropType,
  children: childrenPropType,
};

Card.defaultProps = {
  variant: SECONDARY,
  accent: ACCENT_BRAVO,
  shadow: STANDARD_DELTA,
  padding: FOXTROT,
  paddingTop: null,
  paddingRight: null,
  paddingBottom: null,
  paddingLeft: null,
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  alignContent: null,
  children: null,
};

export default Card;
