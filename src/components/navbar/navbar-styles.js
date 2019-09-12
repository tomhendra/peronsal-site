import { css } from '@emotion/core';
import { color, size } from '../../assets/styles';

export const navbarStyles = () => css`
  border: 1px solid ${color.neutral.light5};

  display: flex;
  flex-direction: column;
  text-transform: uppercase;

  > *:not(:first-of-type) {
    margin-top: ${size.small3};
  }
`;
