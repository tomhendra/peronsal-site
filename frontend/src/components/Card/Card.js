import React from 'react';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

import { childrenPropType } from '../../utils/shared-prop-types';
import {
  shadowSingle,
  shadowDouble,
  shadowTriple,
} from '../../assets/styles/style-helpers';

import { shadows, sizes } from '../../assets/styles/constants';

const { SINGLE, DOUBLE, TRIPLE } = shadows;
const { FOXTROT, GOLF, HOTEL } = sizes;

/**
 * `....................styles....................`
 */

const styles = (
  shadow,
  spacing,
  flexDirection,
  justifyContent,
  alignItems,
  alignContent,
  theme,
) => {
  const baseStyles = {
    label: 'card',
    backgroundColor: theme.colors.bodyBg,
    borderRadius: theme.borderRadius.delta,
    display: 'flex',
    flexWrap: 'wrap',
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

  const spacingStyles = {
    [FOXTROT]: {
      padding: theme.spacings.foxtrot,
    },
    [GOLF]: {
      padding: `${theme.spacings.foxtrot} ${theme.spacings.golf}`,
    },
    [HOTEL]: {
      padding: `${theme.spacings.foxtrot} ${theme.spacings.hotel}`,
    },
  };

  const spacingConfig = spacingStyles[spacing];
  const shadowConfig = shadowStyles[shadow];

  return {
    ...baseStyles,
    ...shadowConfig,
    ...spacingConfig,
  };
};

/**
 * `....................component....................`
 */

const Card = ({
  shadow,
  spacing,
  flexDirection,
  justifyContent,
  alignItems,
  alignContent,
  theme,
  children,
}) => (
  <div
    css={styles(
      shadow,
      spacing,
      flexDirection,
      justifyContent,
      alignItems,
      alignContent,
      theme,
    )}
  >
    {children}
  </div>
);

Card.propTypes = {
  shadow: PropTypes.oneOf([SINGLE, DOUBLE, TRIPLE]),
  spacing: PropTypes.oneOf([FOXTROT, GOLF, HOTEL]),
  flexDirection: PropTypes.oneOf(['column', 'row']),
  justifyContent: PropTypes.oneOf([
    'flex-start', // default
    'flex-end',
    'center',
    'space-around',
    'space-between',
  ]),
  alignItems: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'stretch', // default
    'baseline',
  ]),
  alignContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'stretch', // default
    'space-around',
    'space-between',
  ]),
  children: childrenPropType,
};

Card.defaultProps = {
  shadow: TRIPLE,
  spacing: FOXTROT,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  alignContent: 'stretch',
  children: null,
};

export default withTheme(Card);
