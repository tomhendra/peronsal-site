import React from 'react';
import { NavLink } from '../nav-link';
import { navbarStyles } from './navbar-styles';

export const Navbar = () => (
  <nav css={navbarStyles}>
    <NavLink to="/about/" activeClassName="current-page">
      About
    </NavLink>
    <NavLink to="/projects/" activeClassName="current-page">
      Projects
    </NavLink>
    <NavLink to="/contact/" activeClassName="current-page">
      Contact
    </NavLink>
    <NavLink to="/blog/" activeClassName="current-page">
      Blog
    </NavLink>
  </nav>
);
