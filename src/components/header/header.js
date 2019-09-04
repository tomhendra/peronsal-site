import React from 'react';
import { headerStyles } from './header-styles';
import { Logo } from '../logo';
import { NavLink } from '../nav-link';

export const Header = () => (
  <header css={headerStyles}>
    <NavLink to="/">
      <Logo />
    </NavLink>
    <nav>
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
  </header>
);
