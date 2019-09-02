import { css } from '@emotion/core';
import { colors, fontsize } from '../styles';

export const baseStyles = () => css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    background: ${colors.neutral.dark1};
    color: ${colors.neutral.light5};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: ${fontsize.base};
    line-height: 1.6;

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
      line-height: 1.6;
    }

    button {
      cursor: pointer;
    }

    button:disabled {
      cursor: default;
    }
  }
`;
