import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

import {
  childrenPropType,
  flexDirectionPropType,
  justifyContentPropType,
  alignItemsPropType,
  alignContentPropType,
  spacingPropType,
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

import { shadows, sizes } from '../../assets/styles/constants';

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

/**
 * `....................styles....................`
 */

const styles = ({
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
}) => {
  const baseStyles = {
    label: 'card',
    backgroundColor: theme.colors.bodyBg,
    borderRadius: theme.borderRadius.delta,
    display: 'flex',
    flexWrap: 'no-wrap',
    zIndex: theme.zIndex.card,
  };

  const paddingStyles = {
    padding: getSpacingValues(padding, theme),
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
    ...shadowConfig,
  });
};

/**
 * `....................component....................`
 */

const Card = styled.div(styles);

/**
 * `....................propTypes....................`
 */

Card.propTypes = {
  shadow: PropTypes.oneOf([
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
  ]),
  padding: spacingPropType,
  paddingTop: spacingPropType,
  paddingRight: spacingPropType,
  paddingBottom: spacingPropType,
  paddingLeft: spacingPropType,
  flexDirection: flexDirectionPropType,
  justifyContent: justifyContentPropType,
  alignItems: alignItemsPropType,
  alignContent: alignContentPropType,
  children: childrenPropType,
};

Card.defaultProps = {
  shadow: STANDARD_CHARLIE,
  padding: FOXTROT,
  paddingTop: null,
  paddingRight: null,
  paddingBottom: null,
  paddingLeft: null,
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  alignContent: 'stretch',
  children: null,
};

export default withTheme(Card);
