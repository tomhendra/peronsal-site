import { css } from '@emotion/core';
import { color, size } from '../../assets/styles';

export const cardStyles = () => css`
  align-items: center;
  background: ${color.neutral.dark2};
  border: 1px solid ${color.neutral.dark4};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  max-width: calc(${size.huge3} - ${size.medium1});
  padding: ${size.large1} ${size.medium2} ${size.medium3} ${size.medium2};
  img {
    margin-bottom: ${size.medium1};
    width: ${size.large1};
  }

  h3 {
    color: ${color.primary.light2};
    margin-bottom: ${size.medium2};
    text-transform: uppercase;
  }
`;
