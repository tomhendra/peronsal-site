import { css } from '@emotion/core';
import { color } from '../../assets/styles';

export const footerStyles = () => css`
  background-color: ${color.neutral.dark1};
  border: 1px solid ${color.neutral.light5};
  color: ${color.neutral.light5};
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1200px - 0.5rem) / 2);
`;
