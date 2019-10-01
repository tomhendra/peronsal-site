import React from 'react';

import { sizes } from '../../assets/styles';
import Logo from '../logo';
import NavLink from '../nav-link';
import Navbar from '../navbar';

/**
 * `....................styles....................`
 */

const styles = {
  display: 'flex',
  height: sizes.huge1,
  justifyContent: 'space-between',
  padding: sizes.large1,
  paddingBottom: 0,
  position: 'fixed',
  top: 0,
  width: '100vw',
};

/**
 * `....................component....................`
 */

const Header = () => (
  <header css={styles}>
    <NavLink to="/">
      <Logo />
    </NavLink>
    <Navbar />
  </header>
);

export default Header;
