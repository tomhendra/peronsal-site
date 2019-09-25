import { css } from '@emotion/core';
import { sizes } from '../../assets/styles';

export const navbarStyles = () => css`
  display: flex;
  flex-direction: column;
  min-width: ${sizes.large1};
  text-transform: uppercase;

  > * :not(:first-of-type) {
    margin-top: ${sizes.small3};
  }
`;
