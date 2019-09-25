import { css } from '@emotion/core';
import { sizes } from '../../assets/styles';

export const containerStyles = () => css`
  min-height: 100vh;
  padding: 0 calc((100vw - ${sizes.massive4}) / 2);
  padding-top: ${sizes.huge1};
`;
