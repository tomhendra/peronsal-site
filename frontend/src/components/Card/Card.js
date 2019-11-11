import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

import { childrenPropType } from '../../utils/shared-prop-types';
import {
  shadowSingle,
  shadowDouble,
  shadowTriple,
  withMediaQueries,
} from '../../assets/styles/style-helpers';

import { shadows, sizes } from '../../assets/styles/constants';

const { SINGLE, DOUBLE, TRIPLE } = shadows;
const { FOXTROT, GOLF, HOTEL } = sizes;

/**
 * `....................styles....................`
 */

const styles = ({
  shadow,
  spacing,
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
  };

  const shadowStyles = {
    [SINGLE]: shadowSingle(theme.colors.shadowNeutral),
    [DOUBLE]: shadowDouble(theme.colors.shadowNeutral),
    [TRIPLE]: shadowTriple(theme.colors.shadowNeutral),
  };

  const spacingStyles = {
    [FOXTROT]: {
      padding: [
        theme.spacings.delta,
        theme.spacings.delta,
        theme.spacings.foxtrot,
        theme.spacings.foxtrot,
      ],
      paddingTop: [
        theme.spacings.echo,
        theme.spacings.echo,
        theme.spacings.golf,
        theme.spacings.golf,
      ],
    },
    [GOLF]: {
      padding: theme.spacings.golf,
      paddingTop: theme.spacings.hotel,
    },
    [HOTEL]: {
      padding: theme.spacings.hotel,
      paddingTop: theme.spacings.hotel,
    },
  };

  const flexboxStyles = {
    flexDirection,
    justifyContent,
    alignItems,
    alignContent,
  };

  const spacingConfig = spacingStyles[spacing];
  const shadowConfig = shadowStyles[shadow];

  return withMediaQueries(theme)({
    ...baseStyles,
    ...shadowConfig,
    ...spacingConfig,
    ...flexboxStyles,
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
  justifyContent: 'flex-start',
  alignItems: 'center',
  alignContent: 'stretch',
  children: null,
};

export default withTheme(Card);
