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
  shadowSingle,
  shadowDouble,
  shadowTriple,
  mapPropsToThemeValues,
  withMediaQueries,
} from '../../assets/styles/style-helpers';

import { shadows, sizes } from '../../assets/styles/constants';

const { SINGLE, DOUBLE, TRIPLE } = shadows;
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
    flexWrap: 'wrap',
    zIndex: theme.zIndex.card,
  };

  const getPaddingValues = paddingProp =>
    mapPropsToThemeValues(paddingProp, theme.spacings);

  const paddingStyles = {
    padding: padding && getPaddingValues(padding),
    paddingTop: paddingTop && getPaddingValues(paddingTop),
    paddingRight: paddingRight && getPaddingValues(paddingRight),
    paddingBottom: paddingBottom && getPaddingValues(paddingBottom),
    paddingLeft: paddingBottom && getPaddingValues(paddingLeft),
  };

  const flexboxStyles = {
    flexDirection,
    justifyContent,
    alignItems,
    alignContent,
  };

  const shadowStyles = {
    [SINGLE]: shadowSingle(theme.colors.shadowNeutral),
    [DOUBLE]: shadowDouble(theme.colors.shadowNeutral),
    [TRIPLE]: shadowTriple(theme.colors.shadowNeutral),
  };

  const shadowConfig = shadowStyles[shadow];

  return withMediaQueries(theme)({
    ...baseStyles,
    ...flexboxStyles,
    ...shadowConfig,
    ...paddingStyles,
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
  shadow: PropTypes.oneOf([SINGLE, DOUBLE, TRIPLE]),
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
  shadow: TRIPLE,
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
