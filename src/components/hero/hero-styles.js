import { css } from '@emotion/core';
import { color, fontsize, size } from '../../assets/styles';

export const heroStyles = () => css`
  max-width: ${size.massive3};
  margin: 0 auto;
  text-transform: uppercase;

  h1 {
    font-size: ${fontsize.graphic3};
    line-height: 1;
    margin-top: ${size.large3};
    text-align: center;
  }

  h2 {
    color: ${color.primary.light2};
    padding-right: ${size.medium2};
    text-align: right;
  }
`;
