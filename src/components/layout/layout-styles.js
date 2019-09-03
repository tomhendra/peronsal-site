import { css } from '@emotion/core';
import { size, breakpoint } from '../../assets/styles';

export const layoutStyles = () => css`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: ${size.huge1} auto ${size.large2};
  height: 100vh;
  margin: 0 auto;
  max-width: ${breakpoint.largeDesktop};
`;
