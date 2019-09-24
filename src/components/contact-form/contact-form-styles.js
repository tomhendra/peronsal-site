import { css } from '@emotion/core';
import { color, size } from '../../assets/styles';

export const contactFormStyles = () => css`
  align-items: center;
  background: ${color.neutral.dark2};
  border: 1px solid ${color.neutral.dark4};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  height: ${size.huge4};
  margin: 0 auto;
  padding: ${size.large2} ${size.medium3};
  width: ${size.massive3};
`;
