import { css } from '@emotion/core';
import { size } from '../../assets/styles';

export const postGridStyles = () => css`
  display: grid;
  gap: ${size.medium2};
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: ${size.large3};
`;
