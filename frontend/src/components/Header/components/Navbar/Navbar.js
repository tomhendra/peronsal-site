import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

/**
 * `....................styles....................`
 */

const navStyles = ({ theme }) => ({
  label: 'navbar',
  alignItems: 'center',
  display: 'flex',

  '& :not(:last-of-type)': {
    marginRight: theme.spacings.golf,
  },
});

const navLinkStyles = ({ theme }) => ({
  label: 'NavLink',
  color: theme.colors.n400,
  fontSize: theme.typography.text.charlie.fontSize,
  letterSpacing: 1,
  textDecoration: 'none',
  '&.currentPage,:hover': {
    color: theme.colors.n000,
  },
});

/**
 * `....................component....................`
 */

const Nav = styled.nav(navStyles);
const NavLink = styled(Link)(navLinkStyles);

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
