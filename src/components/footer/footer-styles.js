import { css } from '@emotion/core';
import { color, fontsize, size } from '../../assets/styles';

export const footerStyles = () => css`
  border: 1px solid ${color.neutral.light5};
  display: flex;
  font-size: ${fontsize.small};
  justify-content: space-between;
  padding: ${size.large1};
  padding-top: 0;
  text-transform: uppercase;
`;
