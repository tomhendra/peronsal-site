import { css } from '@emotion/core';
import { size } from '../../assets/styles';

export const skillGridStyles = () => css`
  display: grid;
  gap: ${size.medium3} ${size.huge1};
  grid-template-columns: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
`;
