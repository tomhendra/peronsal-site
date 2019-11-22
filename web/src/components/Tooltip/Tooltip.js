import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

import { colors, positions } from '../../assets/styles/constants';

const { NEUTRAL, DANGER, WARNING, SUCCESS } = colors;
const { TOP, RIGHT, BOTTOM, LEFT, START, CENTER, END } = positions;

/**
 * `....................styles....................`
 */

const elementStyles = ({ variant, position, align, theme }) => {
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

  /*

Highly professional diagram for visualization...
TODO: work on ASCII diagrams :S

        START        CENTER        END
        ------------------------------
 START  |             TOP            |  START
        |                            |
CENTER  | LEFT                 RIGHT |  CENTER
        |                            |
END     |            BOTTOM          |  END
        ------------------------------
        START        CENTER        END

*/

  const getElementPositionStyles = () => {
    const positionMap = {
      [TOP]: 'bottom',
      [BOTTOM]: 'top',
      [RIGHT]: 'left',
      [LEFT]: 'right',
    };

    const absolutePosition = positionMap[position];

    return {
      [absolutePosition]: `calc(100% + ${theme.spacings.bravo})`,
    };
  };

  const getElementAlignmentStyles = () => {
    const isPositionHorizontal = position === TOP || position === BOTTOM;

    const alignmentMap = {
      [START]: isPositionHorizontal ? 'left' : 'top',
      [CENTER]: isPositionHorizontal ? 'left' : 'top',
      [END]: isPositionHorizontal ? 'right' : 'bottom',
    };

    const absolutePosition = alignmentMap[align];
    const translateDirection = isPositionHorizontal
      ? 'translateX'
      : 'translateY';

    return {
      // if align === CENTER, position element 50% from edge.
      // if align === START or END, position element 0 from edge
      [absolutePosition]: align === CENTER ? '50%' : 0,
      // if align === CENTER, element moved by half its own width
      // if align === START or END, no transform is required.
      transform: align === CENTER && `${translateDirection}(-50%)`,
    };
  };

  /*

  const getArrowStyles = () => {};

  const horizontalPositionStyles = {
    [TOP]: {
      '::after': {
        borderTopColor: variantConfig.backgroundColor,
        top: '100%',
      },
    },
    [BOTTOM]: {
      '::after': {
        borderBottomColor: variantConfig.backgroundColor,
        bottom: '100%', // arrow at top
      },
    },
  };

  const verticalPositionStyles = {
    [RIGHT]: {
      '::after': {
        borderRightColor: variantConfig.backgroundColor,
        right: '100%', // arrow at left
      },
    },
    [LEFT]: {
      '::after': {
        borderLeftColor: variantConfig.backgroundColor,
        left: '100%', // arrow at right
      },
    },
  };

  const horizontalAlignmentStyles = {
    [START]: {
      '::after': {
        left: 0, // arrow left side
        transform: 'translateX(100%)', // arrow moved away from left (start)
      },
    },
    [CENTER]: {
      '::after': {
        left: '50%', // arrow at centre
        transform: 'translateX(-50%)', // arrow centred
      },
    },
    [END]: {
      '::after': {
        right: 0, // arrow at right
        transform: 'translateX(-100%)', // arrow moved away from right (end)
      },
    },
  };

  const verticalAlignmentStyles = {
    [START]: {
      '::after': {
        top: 0, // arrow at top <-- left: 0, // arrow left side
        transform: 'translateY(100%)', // arrow moved away from top (start) <-- transform: 'translateX(100%)', // arrow moved away from left (start)
      },
    },
    [CENTER]: {
      '::after': {
        top: '50%', // arrow centred <-- left: '50%', // arrow at centre
        transform: 'translateY(-50%)', // arrow centred <-- transform: 'translateX(-50%)', // arrow centred
      },
    },
    [END]: {
      '::after': {
        bottom: 0, // arrow at bottom <-- right: 0, // arrow at right
        transform: 'translateY(-100%)', // arrow moved away from bottom (end) <-- transform: 'translateX(-100%)', // arrow moved away from right (end)
      },
    },
  };

  */

  return {
    ...baseStyles,
    ...variantConfig,
    ...getElementPositionStyles(),
    ...getElementAlignmentStyles(),
  };
};

/**
 * `....................component....................`
 */

const TooltipElement = styled.div(elementStyles);

const Tooltip = ({ variant, position, align, ...otherProps }) => (
  <TooltipElement
    variant={variant}
    position={position}
    align={align}
    {...otherProps}
  />
);

/**
 * `....................propTypes....................`
 */

Tooltip.propTypes = {
  variant: PropTypes.oneOf([NEUTRAL, DANGER, WARNING, SUCCESS]),
  position: PropTypes.oneOf([TOP, RIGHT, BOTTOM, LEFT]),
  align: PropTypes.oneOf([START, CENTER, END]),
};

Tooltip.defaultProps = {
  variant: SUCCESS,
  position: TOP,
  align: START,
};

export default withTheme(Tooltip);
