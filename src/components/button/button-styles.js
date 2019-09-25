import { css } from '@emotion/core';
import { colors, fontsizes, sizes } from '../../assets/styles';

export const buttonStyles = ({ buttonStyle, buttonSize, defaultProps }) => {
  const primary = `primary`;
  const secondary = `secondary`;
  const tertiary = `tertiary`;

  // Set values for button colours here
  const buttonStyles = {
    [primary]: {
      background: colors.primary.dark5,
      border: colors.primary.dark5,
      hover: colors.primary.dark4,
    },
    [secondary]: {
      background: colors.neutral.dark3,
      border: colors.neutral.light4,
      hover: colors.neutral.dark2,
    },
    [tertiary]: {
      background: `inherit`,
      border: `transparent`,
      hover: colors.neutral.dark4,
    },
  };

  const small = `small`;
  const medium = `medium`;
  const large = `large`;

  // Set values for button sizes here
  const buttonSizes = {
    [small]: {
      fontSize: fontsizes.base,
      minWidth: sizes.large1,
      padding: `${sizes.small3} ${sizes.medium1}`,
    },
    [medium]: {
      fontSize: fontsizes.medium2,
      minWidth: sizes.huge1,
      padding: `${sizes.small3} ${sizes.medium1}`,
    },
    [large]: {
      fontSize: fontsizes.large1,
      minWidth: sizes.huge2,
      padding: `${sizes.medium1} ${sizes.medium2}`,
    },
  };
  // config variables declared & assigned buttonStyle / buttonSize / defaultProps
  // values from Button component calling buttonStyles with styleProps
  const styleConfig =
    buttonStyles[buttonStyle] || buttonStyles[defaultProps.buttonStyle];

  const sizeConfig =
    buttonSizes[buttonSize] || buttonSizes[defaultProps.buttonSize];

  return css({
    ...sizeConfig,
    backgroundColor: styleConfig.background,
    border: `1px solid ${styleConfig.border}`,
    borderRadius: `4px`,
    color: colors.neutral.light5,
    fontWeight: `bold`,
    minWidth: sizes.large3,
    textDecoration: `none`,
    textTransform: `uppercase`,
    cursor: `pointer`,
    '&:hover,:focus': {
      backgroundColor: styleConfig.hover,
    },
  });
};
