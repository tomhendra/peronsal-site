import { css } from '@emotion/core';
import { color, fontsize, size } from '../../assets/styles';

export const heroStyles = () => css`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  margin: 0 auto;
  max-width: ${size.massive3};
  text-transform: uppercase;

  h1 {
    font-size: ${fontsize.graphic3};
    margin-bottom: ${size.small2};
  }

  h2 {
    align-self: flex-end;
    color: ${color.primary.light2};
  }
`;
