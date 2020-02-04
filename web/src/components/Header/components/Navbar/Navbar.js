import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import {
  withMediaQueries,
  getHeadingDeclarations,
} from '../../../../assets/styles/style-helpers';

import { sizes } from '../../../../assets/styles/style-enums';

const { ALPHA } = sizes;

// ....................styles....................

const navStyles = ({ theme }) =>
  withMediaQueries(theme)({
    alignItems: 'center',
    display: ['none', 'flex'],

    '& > :not(:last-of-type)': {
      marginRight: theme.spacings.golf,
    },
  });

const navLinkStyles = ({ theme }) => ({
  color: theme.colors.n400,
  fontFamily: theme.fontStack.heading,
  fontWeight: theme.fontWeight.regular,
  ...getHeadingDeclarations(ALPHA, theme),
  position: 'relative',
  textDecoration: 'none',
  textTransform: 'uppercase',
  // highlight of active page by text colour
  '&.currentPage,:hover': {
    color: theme.colors.n100,
  },
  // highlight of active page by underline
  /*
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
  */
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
    </Nav>
  );
}

export default withTheme(Navbar);
