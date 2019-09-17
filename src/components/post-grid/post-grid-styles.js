import { css } from '@emotion/core';
import { size } from '../../assets/styles';

export const postGridStyles = () => css`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-bottom: ${size.large3};

  > *:not(:last-of-type) {
    margin-bottom: ${size.medium3};
  }
`;
