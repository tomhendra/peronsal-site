import { css } from '@emotion/core';
import { colors, sizes } from '../../assets/styles';

export const contactFormStyles = () => css`
  align-items: center;
  background: ${colors.neutral.dark2};
  border: 1px solid ${colors.neutral.dark4};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  height: ${sizes.huge4};
  margin: 0 auto;
  padding: ${sizes.large2} ${sizes.medium3};
  width: ${sizes.massive3};

  > input {
    background-color: ${colors.neutral.light5};
    border-radius: 4px;
    border: 1px solid ${colors.neutral.light2};
  }
`;
