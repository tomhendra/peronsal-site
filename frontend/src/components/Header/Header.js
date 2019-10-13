import React from 'react';

import { withTheme } from 'emotion-theming';
import Logo from '../Logo';
import NavLink from '../NavLink';
import Navbar from '../Navbar';

/**
 * `....................styles....................`
 */

const styles = theme => ({
  display: 'flex',
  height: theme.spacings.kilo,
  justifyContent: 'space-between',
  padding: theme.spacings.hotel,
  paddingBottom: 0,
  position: 'fixed',
  top: 0,
  width: '100vw',
});

/**
 * `....................component....................`
 */

const Header = ({ theme, ...props }) => (
  <header css={styles(theme)} {...props}>
    <NavLink to="/">
      <Logo />
    </NavLink>
    <Navbar />
  </header>
);

export default withTheme(Header);
