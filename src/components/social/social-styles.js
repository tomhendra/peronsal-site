import { css } from '@emotion/core';
import { sizes } from '../../assets/styles';

export const socialStyles = () => css`
  display: flex;
  flex-direction: column;
  min-width: ${sizes.large1};

  > * {
    width: 1.8rem;
    :not(:first-of-type) {
      margin-top: ${sizes.small3};
    }
  }
`;
