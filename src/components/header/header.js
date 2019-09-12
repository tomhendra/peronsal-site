import React from 'react';
import { headerStyles } from './header-styles';
import { Logo } from '../logo';
import { NavLink } from '../nav-link';
import { Navbar } from '../navbar';

export const Header = () => (
  <header css={headerStyles}>
    <NavLink to="/">
      <Logo />
    </NavLink>
    <Navbar />
  </header>
);
