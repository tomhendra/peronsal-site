import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { color, fontsize } from '../../assets/styles';

export const NavLink = styled(Link)`
  color: ${color.neutral.light5};
  font-size: ${fontsize.base};
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid ${color.neutral.light5};
  }

  &:last-of-type {
    margin: 0;
  }
`;
