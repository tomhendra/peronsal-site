import React from 'react';
import { withTheme } from 'emotion-theming';

import NavLink from '../NavLink';

/**
 * `....................styles....................`
 */

const styles = theme => ({
  display: 'flex',
  flexDirection: 'column',
  minWidth: theme.spacings.hotel,
  textTransform: 'uppercase',

  '& :not(:first-of-type)': {
    marginTop: theme.spacings.charlie,
  },
});

/**
 * `....................component....................`
 */

const NavBar = ({ theme, ...props }) => (
  <nav css={styles(theme)} {...props}>
    <NavLink to="/about/" activeClassName="currentPage">
      About
    </NavLink>
    <NavLink to="/projects/" activeClassName="currentPage">
      Projects
    </NavLink>
    <NavLink to="/contact/" activeClassName="currentPage">
      Contact
    </NavLink>
    <NavLink to="/blog/" activeClassName="currentPage">
      Blog
    </NavLink>
  </nav>
);

export default withTheme(NavBar);
