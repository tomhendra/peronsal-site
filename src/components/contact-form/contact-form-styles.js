import { css } from '@emotion/core';
import { colors, fontsizes, sizes } from '../../assets/styles';

export const contactFormStyles = () =>
  css({
    background: colors.neutral.dark2,
    border: `1px solid ${colors.neutral.dark4}`,
    borderRadius: `6px`,
    display: `grid`,
    gridGap: sizes.small3,
    gridTemplateColumns: `1fr 1fr`,
    gridTemplateRows: `repeat(4, 1fr)`,
    margin: `0 auto`,
    padding: sizes.medium3,
    paddingTop: sizes.large1,
    width: sizes.massive3,

    '& input, textarea': {
      backgroundColor: colors.neutral.light5,
      borderRadius: `4px`,
      border: `1px solid ${colors.neutral.light2}`,
      display: `block`,
      fontSize: fontsizes.base,
      padding: sizes.small2,
      width: `100%`,
    },

    '& input': {
      height: sizes.medium3,
    },
  });
