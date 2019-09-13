import { css } from '@emotion/core';
import { color, size } from '../../assets/styles';

export const pageTextStyles = () => css`
  max-width: 50%;

  h1 {
    margin-bottom: ${size.medium2};
  }

  h2 {
    color: ${color.primary.light3};
    margin-bottom: ${size.small3};
  }
`;
