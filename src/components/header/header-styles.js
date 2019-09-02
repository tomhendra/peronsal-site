import { css } from '@emotion/core';
import { size } from '../../assets/styles';

export const headerStyles = () => css`
  display: flex;
  justify-content: space-between;
  padding: ${size.large1};

  nav {
    display: flex;
    flex-direction: column;
    text-transform: uppercase;

    > * {
      margin-top: ${size.small3};
    }
  }
`;
