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
    maxWidth: theme.spacings.lima,
    minWidth: theme.spacings.india,
    padding: `${theme.spacings.bravo} ${theme.spacings.charlie}`,
    position: 'absolute',
    zIndex: theme.zIndex.tooltip,
    // Tooltip arrow
    '&::after': {
      border: `${theme.borderWidth.charlie} solid transparent`,
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
      // arrow styles
      '::after': {
        borderTopColor: variantConfig.backgroundColor,
        top: '100%', // arrow at bottom
        left: 0, // arrow left side
        transform: 'translateX(100%)', // arrow moved away from left (start)
      },
    },
    [TOP]: {
      bottom: `calc(100% + ${theme.spacings.bravo})`,
      left: '50%',
      transform: 'translateX(-50%)', // centre self
      // arrow styles
      '::after': {
        borderTopColor: variantConfig.backgroundColor,
        top: '100%', // arrow at bottom
        left: '50%', // arrow at centre
        transform: 'translateX(-50%)', // arrow centred
      },
    },
    [TOP_END]: {
      bottom: `calc(100% + ${theme.spacings.bravo})`,
      right: 0,
      // arrow styles
      '::after': {
        borderTopColor: variantConfig.backgroundColor,
        top: '100%', // arrow at bottom
        right: 0, // arrow at right
        transform: 'translateX(-100%)', // arrow moved away from right (end)
      },
    },
    [RIGHT_START]: {
      left: `calc(100% + ${theme.spacings.bravo})`,
      top: 0,
      // arrow styles
      '::after': {
        borderRightColor: variantConfig.backgroundColor,
        right: '100%', // arrow at left
        top: 0, // arrow at top
        transform: 'translateY(100%)', // arrow moved away from top (start)
      },
    },
    [RIGHT]: {
      left: `calc(100% + ${theme.spacings.bravo})`,
      top: '50%',
      transform: 'translateY(-50%)',
      // arrow styles
      '::after': {
        borderRightColor: variantConfig.backgroundColor,
        right: '100%', // arrow at left
        top: '50%', // arrow centred
        transform: 'translateY(-50%)', // arrow centred
      },
    },
    [RIGHT_END]: {
      left: `calc(100% + ${theme.spacings.bravo})`,
      bottom: 0,
      // arrow styles
      '::after': {
        borderRightColor: variantConfig.backgroundColor,
        right: '100%', // arrow at left
        bottom: 0, // arrow at bottom
        transform: 'translateY(-100%)', // arrow moved away from bottom (end)
      },
    },
    [BOTTOM_START]: {
      top: `calc(100% + ${theme.spacings.bravo})`,
      left: 0,
      // arrow styles
      '::after': {
        borderBottomColor: variantConfig.backgroundColor,
        bottom: '100%', // arrow at top
        left: 0, // arrow left side
        transform: 'translateX(100%)', // arrow moved away from left (start)
      },
    },
    [BOTTOM]: {
      top: `calc(100% + ${theme.spacings.bravo})`,
      left: '50%',
      transform: 'translateX(-50%)',
      '::after': {
        borderBottomColor: variantConfig.backgroundColor,
        bottom: '100%', // arrow at top
        left: '50%', // arrow at centre
        transform: 'translateX(-50%)', // arrow centred
      },
    },
    [BOTTOM_END]: {
      top: `calc(100% + ${theme.spacings.bravo})`,
      right: 0,
      // arrow styles
      '::after': {
        borderBottomColor: variantConfig.backgroundColor,
        bottom: '100%', // arrow at top
        right: 0, // arrow at right
        transform: 'translateX(-100%)', // arrow moved away from right (end)
      },
    },
    [LEFT_START]: {
      right: `calc(100% + ${theme.spacings.bravo})`,
      top: 0,
      // arrow styles
      '::after': {
        borderLeftColor: variantConfig.backgroundColor,
        left: '100%', // arrow at right
        top: 0, // arrow at top
        transform: 'translateY(100%)', // arrow moved away from top (start)
      },
    },
    [LEFT]: {
      right: `calc(100% + ${theme.spacings.bravo})`,
      top: '50%',
      transform: 'translateY(-50%)',
      // arrow styles
      '::after': {
        borderLeftColor: variantConfig.backgroundColor,
        left: '100%', // arrow at right
        top: '50%', // arrow centred
        transform: 'translateY(-50%)', // arrow centred
      },
    },
    [LEFT_END]: {
      right: `calc(100% + ${theme.spacings.bravo})`,
      bottom: 0,
      // arrow styles
      '::after': {
        borderLeftColor: variantConfig.backgroundColor,
        left: '100%', // arrow at right
        bottom: 0, // arrow at bottom
        transform: 'translateY(-100%)', // arrow moved away from bottom (end)
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
