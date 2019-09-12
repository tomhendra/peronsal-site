import { css } from '@emotion/core';
import { size, breakpoint } from '../../assets/styles';

export const layoutStyles = () => css`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: ${size.huge1} auto ${size.huge1};
  min-height: 100vh;
  max-width: ${breakpoint.largeDesktop};
`;
