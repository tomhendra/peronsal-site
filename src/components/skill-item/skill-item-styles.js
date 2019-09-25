import { css } from '@emotion/core';
import { sizes } from '../../assets/styles';

export const skillItemStyles = () => css`
  align-items: center;
  display: flex;
  min-height: ${sizes.large1};

  & p {
    margin-left: ${sizes.small4};
  }
`;
