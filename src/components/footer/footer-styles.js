import { css } from '@emotion/core';
import { colors } from '../../assets/styles';

const footerStyles = () => css`
  background-color: ${colors.neutral.dark1};
  border-top: 1px solid ${colors.neutral.light5};
  color: ${colors.neutral.light5};
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 550px - 0.5rem) / 2);
`;

export default footerStyles;
