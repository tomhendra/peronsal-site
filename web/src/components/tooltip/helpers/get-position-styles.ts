import { capitalize } from '../../../utils/helpers';

import { Alignments, Positions, Theme } from '../../../utils/types';

/*
12 possible positions are available.
Highly professional diagram for visualization...
TODO: --------> work on ASCII diagrams :S

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

export function getPositionStyles(
  align: Alignments,
  position: Positions,
  arrowBorderColor: string,
  theme: Theme,
) {
  const isPositionHorizontal = position === 'top' || position === 'bottom';

  const alignmentMap = {
    start: isPositionHorizontal ? 'left' : 'top',
    center: isPositionHorizontal ? 'left' : 'top',
    end: isPositionHorizontal ? 'right' : 'bottom',
  };

  const positionMap = {
    top: 'bottom',
    bottom: 'top',
    right: 'left',
    left: 'right',
  };

  const arrowTranslateMap = {
    start: '100%',
    center: '-50%',
    end: '-100%',
  };

  const absoluteAlignment = alignmentMap[align];
  const absolutePosition = positionMap[position];
  const translateValue = arrowTranslateMap[align];
  const translateDirection = isPositionHorizontal ? 'translateX' : 'translateY';
  // capitalize first letter of position to use in CamelCase attribute
  const borderConfig = `border${capitalize(position)}Color`;

  return {
    // alignment of Tooltip start / center / end of edge on which it is positioned
    // if align === CENTER, position element 50% from edge.
    // if align === START or END, position element 0 from edge
    [absoluteAlignment]: align === 'center' ? '50%' : 0,
    // Positioning of Tooltip top / right / bottom / left of container
    [absolutePosition]: `calc(100% + ${theme.spacings.bravo})`,
    // if align === CENTER, element moved by half its own width to center itself
    transform: align === 'center' ? `${translateDirection}(-50%)` : undefined,
    // arrow positioning based on where Tooltip is portioned & aligned
    '&::after': {
      // position arrow 100% from top / right / bottom / left
      [absoluteAlignment]: align === 'center' ? '50%' : 0,
      [borderConfig]: arrowBorderColor,
      [position]: '100%',
      transform: `${translateDirection}(${translateValue})`,
    },
  };
}
