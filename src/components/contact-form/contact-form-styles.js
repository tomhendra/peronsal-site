import { css } from '@emotion/core';
import { colors, fontsizes, sizes } from '../../assets/styles';

export const contactFormStyles = () =>
  css({
    background: colors.neutral.dark2,
    border: `1px solid ${colors.neutral.dark4}`,
    borderRadius: '6px',
    display: 'grid',
    gridGap: sizes.medium1,
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(4, 1fr)',
    margin: '0 auto',
    padding: `${sizes.large1} ${sizes.medium3} ${sizes.medium1} ${sizes.medium3}`,
    width: sizes.massive3,

    // all immediate children selector
    '> *': {
      // allows for absolutely positioned Tooltips
      position: 'relative',

      'input, textarea': {
        backgroundColor: colors.neutral.light5,
        borderRadius: '4px',
        border: `1px solid ${colors.neutral.light2}`,
        // Firefox displays font as courier for textarea!
        fontFamily: 'Lato',
        fontSize: fontsizes.base,
        padding: sizes.small2,
        width: '100%',
      },

      input: {
        height: sizes.medium3,
      },

      textarea: {
        resize: 'none',
      },
    },
  });
