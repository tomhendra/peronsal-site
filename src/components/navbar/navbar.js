import React from 'react';

import { sizes } from '../../assets/styles';
import NavLink from '../nav-link';

/**
 * `....................styles....................`
 */

const styles = {
  display: 'flex',
  flexDirection: 'column',
  minWidth: sizes.large1,
  textTransform: 'uppercase',

  '& :not(:first-of-type)': {
    marginTop: sizes.small3,
  },
};

/**
 * `....................component....................`
 */

const Navbar = () => (
  <nav css={styles}>
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

export default Navbar;
