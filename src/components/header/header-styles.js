import { css } from '@emotion/core';
import { color, size } from '../../assets/styles';

export const headerStyles = () => css`
  display: flex;
  height: ${size.huge1};
  justify-content: space-between;
  padding: ${size.large1};
  padding-bottom: 0;
  position: fixed;
  top: 0;
  width: 100%;
`;
