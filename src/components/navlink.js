import { Link } from 'gatsby';
import styled from '@emotion/styled';

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid #222;
  }

  &:last-of-type {
    margin: 0;
  }
`;

export default NavLink;
