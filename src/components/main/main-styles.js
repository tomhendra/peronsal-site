import { css } from '@emotion/core';
import { colors } from '../../assets/styles';

const mainStyles = () => css`
  border: 1px solid ${colors.neutral.light5};
  height: 80vh;
  padding: 0.5rem calc((100vw - 1200px - 0.5rem) / 2);
`;

export default mainStyles;
