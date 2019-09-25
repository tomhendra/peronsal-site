import { css } from '@emotion/core';
import { colors, sizes } from '../../assets/styles';

export const pageTextStyles = () => css`
  max-width: 50%;

  h1 {
    margin-bottom: ${sizes.medium2};
  }

  h2 {
    color: ${colors.primary.light3};
    margin-bottom: ${sizes.small3};
  }
`;
