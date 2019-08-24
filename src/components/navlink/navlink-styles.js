import { css } from '@emotion/core';
import { colors, fontsize } from '../../assets/styles';

const navlinkStyles = () => css`
  color: ${colors.neutral.light5};
  font-size: ${fontsize.base};
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid ${colors.neutral.light5};
  }

  &:last-of-type {
    margin: 0;
  }
`;

export default navlinkStyles;
