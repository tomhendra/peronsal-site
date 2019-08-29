import { css } from '@emotion/core';
import { colors } from '../../assets/styles';

const headerStyles = () => css`
  background-color: ${colors.neutral.dark1};
  border: 1px solid ${colors.neutral.light5};
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1200px - 0.5rem) / 2);
`;

export default headerStyles;
