import { css } from '@emotion/core';
import { color, size } from '../../assets/styles';

export const postPreviewStyles = () => css`
  align-items: center;
  border-bottom: 1px solid ${color.neutral.light4};
  display: flex;
  padding: 0 ${size.small2};
  :first-of-type {
    margin-top: ${size.large1};
  }
`;
