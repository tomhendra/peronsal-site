import { css } from '@emotion/core';
import { color, size } from '../../assets/styles';

export const headerStyles = () => css`
  border: 1px solid ${color.neutral.light5};
  display: flex;
  justify-content: space-between;
  padding: ${size.large1};
  padding-bottom: 0;
`;
