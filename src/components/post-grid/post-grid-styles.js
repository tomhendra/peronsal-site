import { css } from '@emotion/core';
import { sizes } from '../../assets/styles';

export const postGridStyles = () => css`
  display: grid;
  gap: ${sizes.medium2};
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: ${sizes.large3};
`;
