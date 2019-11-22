import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

import { capitalize } from '../../utils/helpers';

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
   END  |            BOTTOM          |  END
        ------------------------------
        START        CENTER        END
*/

  const isPositionHorizontal = position === TOP || position === BOTTOM;
  const translateDirection = isPositionHorizontal ? 'translateX' : 'translateY';

  // Positioning of Tooltip top / right / bottom / left of container
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

  // alignment of Tooltip start / center / end of edge on which it is positioned
  const alignmentMap = {
    [START]: isPositionHorizontal ? 'left' : 'top',
    [CENTER]: isPositionHorizontal ? 'left' : 'top',
    [END]: isPositionHorizontal ? 'right' : 'bottom',
  };
  const absoluteAlignment = alignmentMap[align];

  const getElementAlignmentStyles = () => {
    return {
      // if align === CENTER, position element 50% from edge.
      // if align === START or END, position element 0 from edge
      [absoluteAlignment]: align === CENTER ? '50%' : 0,
      // if align === CENTER, element moved by half its own width
      // if align === START or END, no transform is required.
      transform: align === CENTER && `${translateDirection}(-50%)`,
    };
  };

  // arrow positioning based on where Tooltip is portioned & aligned
  const getArrowStyles = () => {
    // capitalize first letter of position to use in CamelCase attribute
    const borderConfig = `border${capitalize(position)}Color`;

    const arrowTranslateMap = {
      [START]: '100%',
      [CENTER]: '-50%',
      [END]: '-100%',
    };
    const translateValue = arrowTranslateMap[align];

    return {
      '::after': {
        // position arrow 100% from top / right / bottom / left
        [absoluteAlignment]: align === CENTER ? '50%' : 0,
        [borderConfig]: variantConfig.backgroundColor,
        [position]: '100%',
        transform: `${translateDirection}(${translateValue})`,
      },
    };
  };

  return {
    ...baseStyles,
    ...variantConfig,
    ...getElementPositionStyles(),
    ...getElementAlignmentStyles(),
    ...getArrowStyles(),
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
