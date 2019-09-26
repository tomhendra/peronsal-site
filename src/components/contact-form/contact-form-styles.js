import { css } from '@emotion/core';
import { colors, fontsizes, sizes } from '../../assets/styles';

export const contactFormStyles = () =>
  css({
    alignItems: `center`,
    background: colors.neutral.dark2,
    border: `1px solid ${colors.neutral.dark4}`,
    borderRadius: `6px`,
    display: `flex`,
    flexDirection: `column`,
    height: sizes.huge4,
    margin: `0 auto`,
    padding: `${sizes.large2} ${sizes.medium3}`,
    width: sizes.massive3,

    '& input': {
      backgroundColor: colors.neutral.light5,
      borderRadius: `4px`,
      border: `1px solid ${colors.neutral.light2}`,
      fontSize: fontsizes.base,
      height: sizes.medium3,
      padding: sizes.small2,
      width: sizes.huge2,
    },
  });
