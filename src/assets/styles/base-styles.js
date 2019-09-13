import { css } from '@emotion/core';
import { color, fontsize } from '../styles';

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
    background: ${color.neutral.dark1};
    color: ${color.neutral.light5};
    font-family: 'Noto Sans', sans-serif;
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
      font-family: 'Lato', sans-serif;
      line-height: 1;
    }

    h1 {
      font-size: ${fontsize.huge2};
    }

    h2 {
      font-size: ${fontsize.large1};
      font-weight: normal;
    }

    h3 {
      font-size: ${fontsize.medium1};
    }

    button {
      cursor: pointer;
    }

    button:disabled {
      cursor: default;
    }
  }
`;
