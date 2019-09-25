import { css } from '@emotion/core';
import { colors, fontsizes, sizes } from '../../assets/styles';

export const heroStyles = () => css`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  margin: 0 auto;
  max-width: ${sizes.massive3};
  text-transform: uppercase;

  h1 {
    font-size: ${fontsizes.graphic3};
    margin-bottom: ${sizes.small2};
  }

  h2 {
    align-self: flex-end;
    color: ${colors.primary.light2};
    padding-right: ${sizes.small4};
  }
`;
