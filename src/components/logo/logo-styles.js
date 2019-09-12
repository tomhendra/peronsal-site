import { css } from '@emotion/core';
import { size } from '../../assets/styles';

export const logoStyles = () => css`
  align-items: center;
  display: flex;
  flex-direction: column;

  img {
    height: ${size.medium2};
  }
`;
