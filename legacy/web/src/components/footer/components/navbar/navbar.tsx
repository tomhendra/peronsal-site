import React from 'react';

import { StyledNav, StyledNavLink } from './components';

export const Navbar = (): JSX.Element => (
  <StyledNav>
    <StyledNavLink to="/" activeClassName="currentPage">
      Home
    </StyledNavLink>
    <StyledNavLink to="/projects/" activeClassName="currentPage">
      Projects
    </StyledNavLink>
    <StyledNavLink to="/blog/" activeClassName="currentPage">
      Blog
    </StyledNavLink>
    <StyledNavLink to="/contact/" activeClassName="currentPage">
      Contact
    </StyledNavLink>
    <StyledNavLink to="/privacy-policy/" activeClassName="currentPage">
      Privacy Policy
    </StyledNavLink>
  </StyledNav>
);

export default Navbar;
