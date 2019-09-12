import { css } from '@emotion/core';
import { color, size } from '../../assets/styles';

export const cardStyles = () => css`
  align-items: center;
  background: ${color.neutral.dark2};
  border: 1px solid ${color.neutral.dark4};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  max-width: calc(${size.huge3} - ${size.small3});
  padding: ${size.large1} ${size.medium3};
  img {
    margin-bottom: ${size.medium1};
    width: ${size.large1};
  }

  h3 {
    color: ${color.primary.light2};
    margin-bottom: ${size.medium3};
    text-transform: uppercase;
  }
`;
