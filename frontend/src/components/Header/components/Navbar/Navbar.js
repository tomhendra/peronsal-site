import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import NavLink from '../../../NavLink';

/**
 * `....................styles....................`
 */

const styles = ({ theme }) => ({
  label: 'navbar',
  alignItems: 'center',
  display: 'flex',

  '& :not(:last-of-type)': {
    marginRight: theme.spacings.golf,
  },
});

/**
 * `....................component....................`
 */

const Nav = styled.nav(styles);

const Navbar = () => (
  <Nav>
    <NavLink to="/" activeClassName="currentPage">
      Home
    </NavLink>
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
  </Nav>
);

export default withTheme(Navbar);
