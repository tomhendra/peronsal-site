import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import { withMediaQueries } from '../../../../assets/styles/style-helpers';

// ....................styles....................

const navStyles = ({ theme }) =>
  withMediaQueries(theme)({
    label: 'navbar',
    alignItems: 'center',
    display: ['none', 'flex'],

    '& > :not(:last-of-type)': {
      marginRight: theme.spacings.golf,
    },
  });

const navLinkStyles = ({ theme }) => ({
  label: 'NavLink',
  color: theme.colors.n400,
  fontSize: theme.typography.text.charlie.fontSize,
  letterSpacing: 1,
  textDecoration: 'none',
  position: 'relative',

  '&.currentPage,:hover': {
    color: theme.colors.n000,
  },

  '&.currentPage': {
    '&::after': {
      backgroundColor: theme.colors.p400,
      borderRadius: theme.borderRadius.alpha,
      top: '3.75rem',
      content: '""',
      transform: 'translateX(-100%)',
      position: 'absolute',
      height: '0.25rem',
      width: '100%',
    },
  },
});

// ....................component....................

const Nav = styled.nav(navStyles);
const NavLink = styled(Link)(navLinkStyles);

const Navbar = () => (
  <Nav>
    <NavLink to="/" activeClassName="currentPage">
      Home
    </NavLink>
    <NavLink to="/projects/" activeClassName="currentPage">
      Projects
    </NavLink>
    <NavLink to="/blog/" activeClassName="currentPage">
      Blog
    </NavLink>
    <NavLink to="/contact/" activeClassName="currentPage">
      Contact
    </NavLink>
  </Nav>
);

export default withTheme(Navbar);
