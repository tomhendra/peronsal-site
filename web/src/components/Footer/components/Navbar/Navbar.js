import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import {
  withMediaQueries,
  getTextDeclarations,
} from '../../../../assets/styles/style-helpers';

import { sizes } from '../../../../assets/styles/constants';

const { CHARLIE } = sizes;

// ....................styles....................

const navStyles = ({ theme }) =>
  withMediaQueries(theme)({
    display: 'flex',
    alignItems: 'center',

    '& > :not(:last-of-type)': {
      marginRight: theme.spacings.foxtrot,
    },
  });

const navLinkStyles = ({ theme }) => ({
  ...getTextDeclarations(CHARLIE, theme),
  color: theme.colors.n400,
  textDecoration: 'none',
  textTransform: 'uppercase',
  borderWidth: theme.borderWidth.charlie,
  borderStyle: 'solid',
  borderColor: 'transparent',
  borderRadius: theme.borderRadius.bravo,
  padding: `${theme.spacings.alpha} ${theme.spacings.charlie}`,

  '&:hover': {
    borderColor: theme.colors.n500,
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
