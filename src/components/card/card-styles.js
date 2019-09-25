import { css } from '@emotion/core';
import { colors, fontsizes, sizes } from '../../assets/styles';

export const cardStyles = () => css`
  align-items: center;
  background: ${colors.neutral.dark2};
  border: 1px solid ${colors.neutral.dark4};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  padding: ${sizes.large1} ${sizes.medium2} ${sizes.medium3} ${sizes.medium2};

  img {
    margin-bottom: ${sizes.medium1};
    width: ${sizes.large1};
  }

  h3 {
    color: ${colors.primary.light2};
    font-size: ${fontsizes.medium2};
    margin-bottom: ${sizes.medium2};
    text-transform: uppercase;
  }
`;
