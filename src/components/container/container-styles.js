import { css } from '@emotion/core';
import { size } from '../../assets/styles';

export const containerStyles = () => css`
  min-height: 100vh;
  padding: 0 calc((100vw - ${size.massive4}) / 2);
  padding-top: ${size.huge1};
`;