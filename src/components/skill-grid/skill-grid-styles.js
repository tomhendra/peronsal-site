import { css } from '@emotion/core';
import { size } from '../../assets/styles';

export const skillGridStyles = () => css`
  display: grid;
  grid-column-gap: ${size.huge1};
  grid-row-gap: ${size.medium3};
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;
