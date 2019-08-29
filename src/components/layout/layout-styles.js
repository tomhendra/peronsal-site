import { css } from '@emotion/core';
import { size } from '../../assets/styles';

const layoutStyles = () => css`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: ${size.huge1} auto ${size.huge1};
  height: 100vh;
`;

export default layoutStyles;
