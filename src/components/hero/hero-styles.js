import { css } from '@emotion/core';
import { color, fontsize, size } from '../../assets/styles';

export const heroStyles = () => css`
  max-width: ${size.massive3};
  margin: 0 auto;
  text-transform: uppercase;

  h1 {
    font-size: ${fontsize.graphic3};
    margin-bottom: ${size.small2};
    margin-top: ${size.huge1};
    text-align: center;
  }

  h2 {
    color: ${color.primary.light2};
    padding-right: ${size.medium1};
    text-align: right;
  }
`;
