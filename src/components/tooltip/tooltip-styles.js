import { css } from '@emotion/core';
import { colors, fontsizes } from '../../assets/styles';

export const tooltipStyles = ({ type, defaultProps }) => {
  const error = `error`;
  const alert = `alert`;
  const success = `success`;

  // Set values for Tooltip colours here
  const tooltipTypes = {
    [error]: {
      background: colors.error.light4,
      border: colors.error.dark1,
      color: colors.error.dark1,
    },
    [alert]: {
      background: colors.alert.light3,
      border: colors.alert.dark2,
      color: colors.alert.dark1,
    },
    [success]: {
      background: colors.success.light4,
      border: colors.success.dark4,
      color: colors.success.dark4,
    },
  };

  // config variable declared & assigned with type / defaultProps value
  // values come from Tooltip component calling tooltipStyles with styleProps
  const styleConfig = tooltipTypes[type] || tooltipTypes[defaultProps.type];

  return css({
    position: 'absolute',
    bottom: 'calc(100% - 10px)',
    right: -20,
    zIndex: 1,

    div: {
      // Tooltip container
      background: styleConfig.background,
      border: `1px solid ${styleConfig.border}`,
      color: styleConfig.color,
      display: 'inline-block',
      fontSize: fontsizes.small,
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
  });
};
