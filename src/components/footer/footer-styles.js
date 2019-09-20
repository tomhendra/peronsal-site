import { css } from '@emotion/core';
import { size } from '../../assets/styles';

export const footerStyles = () => css`
  align-items: flex-end;
  bottom: 0;
  display: flex;
  font-size: 1rem;
  justify-content: space-between;
  padding: ${size.large1};
  padding-top: 0;
  position: fixed;
  text-transform: uppercase;
  width: 100vw;
`;
