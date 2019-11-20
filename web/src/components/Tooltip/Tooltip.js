import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import { colors } from '../../assets/styles/constants';

const { DANGER, WARNING, SUCCESS } = colors;

/**
 * `....................styles....................`
 */

const elementStyles = ({ type, theme }) => {
  // Set values for Tooltip colours here
  const tooltipTypes = {
    [DANGER]: {
      background: theme.colors.danger,
      border: theme.colors.r000,
      color: theme.colors.r000,
    },
    [WARNING]: {
      background: theme.colors.warning,
      border: theme.colors.y100,
      color: theme.colors.y000,
    },
    [SUCCESS]: {
      background: theme.colors.success,
      border: theme.colors.g300,
      color: theme.colors.g300,
    },
  };
  // config variable declared & assigned with type / defaultProps value
  const styleConfig = tooltipTypes[type];

  return {
    position: 'absolute',
    bottom: 'calc(100% - 10px)',
    right: -20,
    zIndex: 1,

    div: {
      // Tooltip container
      background: styleConfig.background,
      border: `${theme.borderWidth.alpha} solid ${styleConfig.border}`,
      color: styleConfig.color,
      display: 'inline-block',
      fontSize: theme.typography.text.alpha.fontSize,
      position: 'relative',
      borderRadius: '6px',
      padding: '6px',

      // Tooltip arrow, outer (border effect)
      '::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        right: '50px',
        top: '100%',
        width: '0',
        height: '0',
        border: '9px solid transparent',
        borderTopColor: styleConfig.border,
        marginLeft: '-10px',
      },

      // Tooltip arrow, inner
      '::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        right: '51px',
        top: '100%',
        width: '0',
        height: '0',
        border: '8px solid transparent',
        borderTopColor: styleConfig.background,
        marginLeft: '-9px',
      },
    },
  };
};

/**
 * `....................component....................`
 */

const TooltipElement = styled.div(elementStyles);

const Tooltip = ({ type, ...otherProps }) => (
  <TooltipElement type={type} {...otherProps} />
);

/**
 * `....................propTypes....................`
 */

Tooltip.defaultProps = {
  type: WARNING,
};

export default withTheme(Tooltip);
