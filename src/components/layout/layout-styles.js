import { css } from '@emotion/core';
import { size, breakpoint } from '../../assets/styles';

const layoutStyles = () => css`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: ${size.huge1} auto ${size.huge1};
  height: 100vh;
  margin: 0 auto;
  max-width: ${breakpoint.largeDesktop};
`;

export default layoutStyles;
