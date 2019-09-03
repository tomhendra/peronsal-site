import { css } from '@emotion/core';
import { color } from '../../assets/styles';

export const mainStyles = () => css`
  border: 1px solid ${color.neutral.light5};
  padding: 0 calc((100vw - 1200px) / 2);
`;
