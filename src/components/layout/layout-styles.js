import { css } from '@emotion/core';
import { breakpoint } from '../../assets/styles';

export const layoutStyles = () => css`
  position: relative;
  min-height: 100vh;
  max-width: ${breakpoint.largeDesktop};
`;
