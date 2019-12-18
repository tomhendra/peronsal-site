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
  shadowEvenAlpha,
  shadowEvenBravo,
  shadowEvenCharlie,
  shadowEvenDelta,
  shadowEvenEcho,
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
  EVEN_ALPHA,
  EVEN_BRAVO,
  EVEN_CHARLIE,
  EVEN_DELTA,
  EVEN_ECHO,
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
    [EVEN_ALPHA]: shadowEvenAlpha(theme.colors.shadowNeutral),
    [EVEN_BRAVO]: shadowEvenBravo(theme.colors.shadowNeutral),
    [EVEN_CHARLIE]: shadowEvenCharlie(theme.colors.shadowNeutral),
    [EVEN_DELTA]: shadowEvenDelta(theme.colors.shadowNeutral),
    [EVEN_ECHO]: shadowEvenEcho(theme.colors.shadowNeutral),
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
    EVEN_ALPHA,
    EVEN_BRAVO,
    EVEN_CHARLIE,
    EVEN_DELTA,
    EVEN_ECHO,
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
  shadow: EVEN_CHARLIE,
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
