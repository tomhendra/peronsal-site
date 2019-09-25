import { css } from '@emotion/core';
import { colors, fontsizes, sizes } from '../../assets/styles';

export const pageCounterStyles = () => css`
  align-items: flex-end;
  align-self: flex-end;
  display: flex;
  font-family: 'Lato', sans-serif;
  flex-direction: column;
  font-size: ${fontsizes.medium1};
  max-width: ${sizes.medium2};

  div > * {
    line-height: 1;
    text-align: right;

    &:first-of-type {
      color: ${colors.primary.light3};
      font-size: ${fontsizes.large1};
      line-height: 1.1;
      margin-right: -1px;
    }
  }

  img {
    margin-top: ${sizes.small2};
    width: ${sizes.medium1};
  }
`;
