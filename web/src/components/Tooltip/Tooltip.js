import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

import { capitalize } from '../../utils/helpers';

import { colors, positions } from '../../assets/styles/constants';

const { NEUTRAL, DANGER, WARNING, SUCCESS } = colors;
const { TOP, RIGHT, BOTTOM, LEFT, START, CENTER, END } = positions;

// ....................styles....................

const getBaseStyles = theme => ({
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
});

function getVariantStyles(variant, theme) {
  const variantOptions = {
    [NEUTRAL]: {
      backgroundColor: theme.colors.n200,
      color: theme.colors.n900,
    },
    [DANGER]: {
      backgroundColor: theme.colors.r700,
      color: theme.colors.r000,
    },
    [WARNING]: {
      backgroundColor: theme.colors.warning,
      color: theme.colors.y000,
    },
    [SUCCESS]: {
      backgroundColor: theme.colors.success,
      color: theme.colors.g000,
    },
  };
  return variantOptions[variant];
}

/*
    12 possible positions are available.
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

function getPositionStyles(align, position, variant, theme) {
  const isPositionHorizontal = position === TOP || position === BOTTOM;

  const alignmentMap = {
    [START]: isPositionHorizontal ? 'left' : 'top',
    [CENTER]: isPositionHorizontal ? 'left' : 'top',
    [END]: isPositionHorizontal ? 'right' : 'bottom',
  };

  const positionMap = {
    [TOP]: 'bottom',
    [BOTTOM]: 'top',
    [RIGHT]: 'left',
    [LEFT]: 'right',
  };

  const arrowTranslateMap = {
    [START]: '100%',
    [CENTER]: '-50%',
    [END]: '-100%',
  };

  const absoluteAlignment = alignmentMap[align];
  const absolutePosition = positionMap[position];
  const translateValue = arrowTranslateMap[align];
  const translateDirection = isPositionHorizontal ? 'translateX' : 'translateY';
  // capitalize first letter of position to use in CamelCase attribute
  const borderConfig = `border${capitalize(position)}Color`;
  // get backgroundColor from getVariantStyles for border color of arrow
  const { backgroundColor } = getVariantStyles(variant, theme);

  return {
    // alignment of Tooltip start / center / end of edge on which it is positioned
    // if align === CENTER, position element 50% from edge.
    // if align === START or END, position element 0 from edge
    [absoluteAlignment]: align === CENTER ? '50%' : 0,
    // Positioning of Tooltip top / right / bottom / left of container
    [absolutePosition]: `calc(100% + ${theme.spacings.bravo})`,
    // if align === CENTER, element moved by half its own width to center itself
    transform: align === CENTER && `${translateDirection}(-50%)`,
    // arrow positioning based on where Tooltip is portioned & aligned
    '::after': {
      // position arrow 100% from top / right / bottom / left
      [absoluteAlignment]: align === CENTER ? '50%' : 0,
      [borderConfig]: backgroundColor,
      [position]: '100%',
      transform: `${translateDirection}(${translateValue})`,
    },
  };
}

const elementStyles = ({ align, position, variant, theme }) => ({
  ...getBaseStyles(theme),
  ...getVariantStyles(variant, theme),
  ...getPositionStyles(align, position, variant, theme),
});

// ....................component....................

const TooltipElement = styled.div(elementStyles);

function Tooltip({ variant, position, align, ...otherProps }) {
  return (
    <TooltipElement
      variant={variant}
      position={position}
      align={align}
      {...otherProps}
    />
  );
}

// ....................propTypes....................

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
