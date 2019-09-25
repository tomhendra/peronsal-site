import { css } from '@emotion/core';
import { sizes } from '../../assets/styles';

export const footerStyles = () => css`
  align-items: flex-end;
  bottom: 0;
  display: flex;
  font-size: 1rem;
  height: ${sizes.huge1};
  justify-content: space-between;
  padding: ${sizes.large1};
  padding-top: 0;
  position: fixed;
  text-transform: uppercase;
  width: 100vw;
`;
