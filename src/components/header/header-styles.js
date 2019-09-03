import { css } from '@emotion/core';
import { color, size } from '../../assets/styles';

export const headerStyles = () => css`
  border: 1px solid ${color.neutral.light5};
  display: flex;
  justify-content: space-between;
  padding: ${size.large1};
  padding-bottom: 0;

  nav {
    display: flex;
    flex-direction: column;
    text-transform: uppercase;

    > *:not(:first-of-type) {
      margin-top: ${size.small3};
    }
  }
`;
