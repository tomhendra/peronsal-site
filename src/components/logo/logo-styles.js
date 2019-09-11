import { css } from '@emotion/core';
import { fontsize } from '../../assets/styles';

export const logoStyles = () => css`
  align-items: center;
  display: flex;
  flex-direction: column;

  p {
    font-size: ${fontsize.small};
    margin-top: 3px;
    text-transform: uppercase;
  }

  img {
    height: 48px;
  }
`;
