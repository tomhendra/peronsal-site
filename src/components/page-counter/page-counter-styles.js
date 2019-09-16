import { css } from '@emotion/core';
import { color, fontsize, size } from '../../assets/styles';

export const pageCounterStyles = () => css`
  align-items: flex-end;
  align-self: flex-end;
  display: flex;
  font-family: 'Lato', sans-serif;
  flex-direction: column;
  font-size: ${fontsize.medium1};
  max-width: ${size.medium2};

  div > * {
    line-height: 1;
    text-align: right;

    &:first-of-type {
      color: ${color.primary.light3};
      font-size: ${fontsize.large1};
      line-height: 1.1;
      margin-right: -1px;
    }
  }

  img {
    margin-top: ${size.small2};
    width: ${size.medium1};
  }
`;
