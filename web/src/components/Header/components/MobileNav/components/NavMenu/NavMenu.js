import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import { Link } from 'gatsby';

// ....................styles....................

const navStyles = ({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  background: theme.colors.bodyBg,
  height: '100vh',
  left: '0',
  paddingLeft: theme.spacings.india,
  paddingTop: theme.spacings.juliett,
  position: 'absolute',
  top: '0',
  transition: 'transform 0.3s ease-in-out',
  width: '100%',

  '& > :not(:last-of-type)': {
    marginBottom: theme.spacings.echo,
  },
});

const navLinkStyles = ({ theme }) => ({
  color: theme.colors.n400,
  fontSize: theme.typography.headings.delta.fontSize,
  letterSpacing: 1,
  textAlign: 'left',
  textDecoration: 'none',
  transition: 'color 0.3s linear',

  '&.currentPage,:hover': {
    color: theme.colors.n000,
  },
});

// ....................component....................

const Nav = styled.nav(navStyles);
const NavLink = styled(Link)(navLinkStyles);

const NavMenu = () => (
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
    <NavLink to="/blog/" activeClassName="currentPage">
      Blog
    </NavLink>
    <NavLink to="/contact/" activeClassName="currentPage">
      Contact
    </NavLink>
  </Nav>
);

export default withTheme(NavMenu);
