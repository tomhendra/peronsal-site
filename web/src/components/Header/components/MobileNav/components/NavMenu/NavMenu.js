import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

// ....................styles....................

const navStyles = ({ theme, open }) => ({
  display: 'flex',
  flexDirection: 'column',
  background: theme.colors.bodyBg,
  height: '100vh',
  paddingLeft: theme.spacings.india,
  paddingTop: theme.spacings.juliett,
  position: 'fixed',
  left: 0,
  top: 0,
  transform: open ? 'translateX(0)' : 'translateX(100%)',
  transition: theme.transitions.slow,
  width: '100vw',
  zIndex: theme.zIndex.drawer,

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

const NavMenu = ({ open }) => (
  <Nav open={open}>
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

// ....................propTypes....................

NavMenu.propTypes = {
  open: PropTypes.bool.isRequired,
};

PropTypes.defaultProps = {
  open: null,
};

export default withTheme(NavMenu);
