import { css } from '@emotion/core';
import { size } from '../../assets/styles';

export const skillItemStyles = () => css`
  align-items: center;
  display: flex;
  min-height: ${size.large1};

  & p {
    margin-left: ${size.small4};
  }
`;
