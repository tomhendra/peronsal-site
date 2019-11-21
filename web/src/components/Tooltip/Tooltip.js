import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

import { colors, positions } from '../../assets/styles/constants';

const { NEUTRAL, DANGER, WARNING, SUCCESS } = colors;
const {
  TOP_START,
  TOP,
  TOP_END,
  RIGHT_START,
  RIGHT,
  RIGHT_END,
  BOTTOM_START,
  BOTTOM,
  BOTTOM_END,
  LEFT_START,
  LEFT,
  LEFT_END,
} = positions;

/**
 * `....................styles....................`
 */

const elementStyles = ({ variant, position, theme }) => {
  const baseStyles = {
    borderRadius: theme.borderRadius.bravo,
    fontSize: theme.typography.text.bravo.fontSize,
    padding: theme.spacings.bravo,
    position: 'absolute',
    zIndex: theme.zIndex.tooltip,
    // Tooltip arrow
    '&::after': {
      borderStyle: 'solid',
      borderWidth: theme.borderWidth.charlie,
      content: '""',
      position: 'absolute',
    },
  };

  const variantStyles = {
    [NEUTRAL]: {
      backgroundColor: theme.colors.n000,
      color: theme.colors.n900,
    },
    [DANGER]: {
      backgroundColor: theme.colors.r300,
      color: theme.colors.r900,
    },
    [WARNING]: {
      backgroundColor: theme.colors.y500,
      color: theme.colors.y000,
    },
    [SUCCESS]: {
      backgroundColor: theme.colors.g600,
      color: theme.colors.g000,
    },
  };

  const variantConfig = variantStyles[variant];

  const positionStyles = {
    [TOP_START]: {
      bottom: `calc(100% + ${theme.spacings.bravo})`,
      left: 0,
      '::after': {
        borderColor: `${variantConfig.backgroundColor} transparent transparent transparent`,
        marginLeft: `-${theme.borderWidth.charlie}`,
        top: '100%', // arrow at bottom
        left: theme.spacings.delta, // arrow left side
      },
    },
    [TOP]: {
      bottom: `calc(100% + ${theme.spacings.bravo})`,
      left: '40%',
      '::after': {
        borderColor: `${variantConfig.backgroundColor} transparent transparent transparent`,
        marginLeft: `-${theme.borderWidth.charlie}`,
        top: '100%', // arrow at bottom
        left: '50%', // arrow centred
      },
    },
    [TOP_END]: {
      bottom: `calc(100% + ${theme.spacings.bravo})`,
      right: 0,
      '::after': {
        borderColor: `${variantConfig.backgroundColor} transparent transparent transparent`,
        marginLeft: `-${theme.borderWidth.charlie}`,
        top: '100%', // arrow at bottom
        right: theme.spacings.delta, // arrow right side
      },
    },
    [RIGHT_START]: {
      left: `calc(100% + ${theme.spacings.bravo})`,
      top: 0,
      '::after': {
        borderColor: `transparent ${variantConfig.backgroundColor} transparent transparent`,
        right: '100%', // arrow at left
        top: theme.spacings.delta, // arrow at top
        marginTop: `-${theme.borderWidth.charlie}`,
      },
    },
    [RIGHT]: {
      left: `calc(100% + ${theme.spacings.bravo})`,
      top: '40%',
      '::after': {
        borderColor: `transparent ${variantConfig.backgroundColor} transparent transparent`,
        right: '100%', // arrow at left
        top: '50%', // arrow centred
        marginTop: `-${theme.borderWidth.charlie}`,
      },
    },
    [RIGHT_END]: {
      left: `calc(100% + ${theme.spacings.bravo})`,
      bottom: 0,
      '::after': {
        borderColor: `transparent ${variantConfig.backgroundColor} transparent transparent`,
        right: '100%', // arrow at left
        bottom: theme.spacings.delta, // arrow at bottom
        marginBottom: `-${theme.borderWidth.charlie}`,
      },
    },
    [BOTTOM_START]: {
      top: `calc(100% + ${theme.spacings.bravo})`,
      left: 0,
      '::after': {
        borderColor: `transparent transparent ${variantConfig.backgroundColor} transparent`,
        bottom: '100%', // arrow at top
        left: theme.spacings.delta, // arrow left side
        marginLeft: `-${theme.borderWidth.charlie}`,
      },
    },
    [BOTTOM]: {
      top: `calc(100% + ${theme.spacings.bravo})`,
      left: '40%',
      '::after': {
        borderColor: `transparent transparent ${variantConfig.backgroundColor} transparent`,
        bottom: '100%', // arrow at top
        left: '50%', // arrow centred
        marginLeft: `-${theme.borderWidth.charlie}`,
      },
    },
    [BOTTOM_END]: {
      top: `calc(100% + ${theme.spacings.bravo})`,
      right: 0,
      '::after': {
        borderColor: `transparent transparent ${variantConfig.backgroundColor} transparent`,
        bottom: '100%', // arrow at top
        right: theme.spacings.delta, // arrow right side
        marginLeft: `-${theme.borderWidth.charlie}`,
      },
    },
    [LEFT_START]: {
      right: `calc(100% + ${theme.spacings.bravo})`,
      top: 0,
      '::after': {
        borderColor: `transparent transparent transparent ${variantConfig.backgroundColor}`,
        left: '100%', // arrow at right
        top: theme.spacings.delta, // arrow at top
        marginTop: `-${theme.borderWidth.charlie}`,
      },
    },
    [LEFT]: {
      right: `calc(100% + ${theme.spacings.bravo})`,
      top: '40%',
      '::after': {
        borderColor: `transparent transparent transparent ${variantConfig.backgroundColor}`,
        left: '100%', // arrow at right
        top: '50%', // arrow centred
        marginTop: `-${theme.borderWidth.charlie}`,
      },
    },
    [LEFT_END]: {
      right: `calc(100% + ${theme.spacings.bravo})`,
      bottom: 0,
      '::after': {
        borderColor: `transparent transparent transparent ${variantConfig.backgroundColor}`,
        left: '100%', // arrow at right
        bottom: theme.spacings.delta, // arrow at bottom
        marginBottom: `-${theme.borderWidth.charlie}`,
      },
    },
  };

  const positionConfig = positionStyles[position];

  return {
    ...baseStyles,
    ...variantConfig,
    ...positionConfig,
  };
};

/**
 * `....................component....................`
 */

const TooltipElement = styled.div(elementStyles);

const Tooltip = ({ variant, position, ...otherProps }) => (
  <TooltipElement variant={variant} position={position} {...otherProps} />
);

/**
 * `....................propTypes....................`
 */

Tooltip.propTypes = {
  variant: PropTypes.oneOf([NEUTRAL, DANGER, WARNING, SUCCESS]),
  position: PropTypes.oneOf([
    TOP_START,
    TOP,
    TOP_END,
    RIGHT_START,
    RIGHT,
    RIGHT_END,
    BOTTOM_START,
    BOTTOM,
    BOTTOM_END,
    LEFT_START,
    LEFT,
    LEFT_END,
  ]),
};

Tooltip.defaultProps = {
  variant: SUCCESS,
  position: LEFT,
};

export default withTheme(Tooltip);
