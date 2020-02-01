import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import { withMediaQueries } from '../../../../assets/styles/style-helpers';

// ....................styles....................

const navStyles = ({ theme }) =>
  withMediaQueries(theme)({
    display: 'flex',
    justifyContent: ['space-between', 'flex-end'],

    '& > :not(:last-of-type)': {
      marginRight: [0, theme.spacings.delta, theme.spacings.echo],
    },
  });

const navLinkStyles = ({ theme }) =>
  withMediaQueries(theme)({
    color: theme.colors.n400,
    textDecoration: 'none',
    textTransform: 'uppercase',
    borderWidth: theme.borderWidth.charlie,
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderRadius: theme.borderRadius.bravo,
    fontSize: theme.typography.text.charlie.fontSize,
    padding: [
      `${theme.spacings.bravo} 0`,
      `${theme.spacings.alpha} ${theme.spacings.charlie}`,
    ],

    '&:hover': {
      borderColor: ['transparent', theme.colors.n500],
    },
  });

// ....................component....................

const Nav = styled.nav(navStyles);
const NavLink = styled(Link)(navLinkStyles);

function Navbar() {
  return (
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
      <NavLink to="/privacy-policy/" activeClassName="currentPage">
        Privacy Policy
      </NavLink>
    </Nav>
  );
}

export default withTheme(Navbar);
