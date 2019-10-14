import React from 'react';
import { withTheme } from 'emotion-theming';

import { colors } from '../../assets/styles/constants';

const { DANGER, WARNING, SUCCESS } = colors;

/**
 * `....................styles....................`
 */

const styles = (type, theme) => {
  // Set values for Tooltip colours here
  const tooltipTypes = {
    [DANGER]: {
      background: theme.colors.misc.danger,
      border: theme.colors.red.r000,
      color: theme.colors.red.r000,
    },
    [WARNING]: {
      background: theme.colors.misc.warning,
      border: theme.colors.yellow.y100,
      color: theme.colors.yellow.y000,
    },
    [SUCCESS]: {
      background: theme.colors.misc.success,
      border: theme.colors.green.g300,
      color: theme.colors.green.g300,
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

const Tooltip = ({ type, theme, ...rest }) => {
  return (
    <div css={styles(type, theme)}>
      <div {...rest} />
    </div>
  );
};

Tooltip.defaultProps = {
  type: WARNING,
};

export default withTheme(Tooltip);