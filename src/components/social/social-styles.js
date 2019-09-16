import { css } from '@emotion/core';
import { size } from '../../assets/styles';

export const socialStyles = () => css`
  display: flex;
  flex-direction: column;
  min-width: ${size.large1};

  > * {
    width: 1.8rem;
  }

  > *:not(:first-of-type) {
    margin-top: ${size.small3};
  }
`;
