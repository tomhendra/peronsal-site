import React from 'react';

import { sizes } from '../../assets/styles';
import Logo from '../Logo';
import NavLink from '../NavLink';
import NavBar from '../NavBar';

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

const Header = props => (
  <header css={styles} {...props}>
    <NavLink to="/">
      <Logo />
    </NavLink>
    <NavBar />
  </header>
);

export default Header;
