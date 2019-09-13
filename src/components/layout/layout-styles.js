import { css } from '@emotion/core';
import { breakpoint } from '../../assets/styles';

export const layoutStyles = () => css`
  position: relative;
  max-width: ${breakpoint.largeDesktop};
`;
