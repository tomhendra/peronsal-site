import { css } from '@emotion/core';
import { colors, size, fontsize } from '../styles';

const baseStyles = () => css`
  * {
    box-sizing: border-box;
  }
  /* lobotomised owl selector - every sibling inherits */
  /* * + * {
    margin-top: ${size.small3};
  } */

  html {
    font-size: 62.5%;
  }

  body {
    background: ${colors.neutral.dark1};
    color: ${colors.neutral.light5};
    /* font-family: 'IdealSans-Book', Fallback, 'Helvetica', 'Arial', sans-serif; */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: ${fontsize.base};
    line-height: ${fontsize.base};
    margin: 0;

    /* remove margin for main div that that Gatsby mounts into */
    > div {
      margin-top: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: ${fontsize.small};
    }

    button {
      cursor: pointer;
    }

    button:disabled {
      cursor: default;
    }
  }
`;

export default baseStyles;
