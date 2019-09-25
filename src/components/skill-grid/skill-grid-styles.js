import { css } from '@emotion/core';
import { sizes } from '../../assets/styles';

export const skillGridStyles = () => css`
  display: grid;
  gap: ${sizes.medium3} ${sizes.huge1};
  grid-template-columns: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
`;
