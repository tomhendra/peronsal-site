import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { colors, fontsize } from '../../assets/styles';

const NavLink = styled(Link)`
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

export default NavLink;

// import React from 'react';
// import { Link } from 'gatsby';
// import navlinkStyles from './navlink-styles';

// const NavLink = () => <Link style={navlinkStyles} />;

// export default NavLink;
