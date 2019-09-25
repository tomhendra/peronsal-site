import { css } from '@emotion/core';
import { sizes } from '../../assets/styles';

export const headerStyles = () => css`
  display: flex;
  height: ${sizes.huge1};
  justify-content: space-between;
  padding: ${sizes.large1};
  padding-bottom: 0;
  position: fixed;
  top: 0;
  width: 100vw;
`;
