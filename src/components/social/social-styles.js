import { css } from '@emotion/core';
import { color, size } from '../../assets/styles';

export const socialStyles = () => css`
  display: flex;
  flex-direction: column;
  min-width: ${size.large1};

  > * {
    width: ${size.medium1};
  }

  > *:not(:first-of-type) {
    margin-top: ${size.small3};
  }
`;
