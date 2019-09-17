import { css } from '@emotion/core';
import { size } from '../../assets/styles';

export const postGridStyles = () => css`
  display: grid;
  grid-column-gap: ${size.large3};
  grid-row-gap: ${size.medium3};
  grid-template-columns: 1fr 1fr;
`;
