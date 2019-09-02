import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { color } from '../../assets/styles';

export const NavLink = styled(Link)`
  color: ${color.neutral.light5};
  font-weight: ${props => props.fontWeight || 'normal'};
  text-decoration: none;

  &.current-page {
    color: ${color.primary.light3};
  }
`;
