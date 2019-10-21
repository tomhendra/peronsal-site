export const globalStyles = theme => ({
  body: {
    background: theme.colors.bodyBg,
    color: theme.colors.bodyColor,
    fontFamily: theme.fontStack.default,
    fontSize: theme.typography.text.bravo.fontSize,
    lineHeight: theme.typography.text.bravo.lineHeight,

    'h1,h2,h3,h4,h5,h6': {
      color: theme.colors.headingColor,
      fontFamily: theme.fontStack.heading,
      fontWeight: theme.fontWeight.bold,
    },

    h1: {
      fontSize: theme.typography.headings.hotel.fontSize,
    },

    h2: {
      fontSize: theme.typography.headings.delta.fontSize,
      fontWeight: theme.fontWeight.regular,
    },

    h3: {
      fontSize: theme.typography.headings.bravo.fontSize,
      fontWeight: theme.fontWeight.regular,
    },
  },
});

// const shadows = {
//   even1: '0 1px 3px hsla(0, 0%, 0%, 0.2)',
//   even2: '0 4px 6px hsla(0, 0%, 0%, 0.2)',
//   even3: '0 5px 15px hsla(0, 0%, 0%, 0.2)',
//   even4: '0 10px 24px hsla(0, 0%, 0%, 0.2)',
//   even5: '0 15px 35px hsla(0, 0%, 0%, 0.2)',
//   offset1: '0 1px 3px hsla(0, 0%, 0%, 0.12), 0 1px 2px hsla(0, 0%, 0%, 0.24)',
//   offset2: '0 3px 6px hsla(0, 0%, 0%, 0.15), 0 2px 4px hsla(0, 0%, 0%, 0.12)',
//   offset3: '0 10px 20px hsla(0, 0%, 0%, 0.15), 0 3px 6px hsla(0, 0%, 0%, 0.1)',
//   offset4:
//     '0 15px 25px hsla(0, 0%, 0%, 0.15), 0 5px 10px hsla(0, 0%, 0%, 0.05)',
//   offset5: '0 20px 40px hsla(0, 0%, 0%, 0.2)',
// };
