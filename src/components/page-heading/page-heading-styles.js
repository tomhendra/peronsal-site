import { css } from '@emotion/core';
import { sizes } from '../../assets/styles';

export const pageHeadingStyles = () => css`
  display: flex;
  justify-content: space-between;
  min-height: ${sizes.huge2};
  padding-bottom: ${sizes.large1};
`;
