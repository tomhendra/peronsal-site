import { css } from '@emotion/core';
import { size } from '../../assets/styles';

export const navbarStyles = () => css`
  display: flex;
  flex-direction: column;
  min-width: ${size.large1};
  text-transform: uppercase;

  > * :not(:first-of-type) {
    margin-top: ${size.small3};
  }
`;
