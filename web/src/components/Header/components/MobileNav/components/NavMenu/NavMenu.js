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
  paddingTop: theme.spacings.kilo,
  position: 'fixed',
  left: 0,
  top: 0,
  transform: open ? 'translateX(0)' : 'translateX(100%)',
  transition: theme.transitions.slow,
  width: '100vw',
  zIndex: theme.zIndex.drawer,

  '& > :not(:last-of-type)': {
    marginBottom: theme.spacings.foxtrot,
  },
});

const navLinkStyles = ({ theme }) => ({
  color: theme.colors.n400,
  fontSize: theme.typography.headings.delta.fontSize,
  letterSpacing: 1,
  lineHeight: 0.85,
  textAlign: 'left',
  textDecoration: 'none',
  transition: 'color 0.3s linear',
  position: 'relative',

  '&.currentPage,:hover': {
    color: theme.colors.n000,
  },

  '&.currentPage': {
    '&::before': {
      backgroundColor: theme.colors.p400,
      borderRadius: theme.borderRadius.alpha,
      content: '""',
      position: 'absolute',
      left: '-1.5rem',
      height: '100%',
      width: '0.5rem',
    },
  },
});

// ....................component....................

const Nav = styled.nav(navStyles);
const NavLink = styled(Link)(navLinkStyles);

function NavMenu({ open }) {
  return (
    <Nav open={open}>
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

// ....................propTypes....................

NavMenu.propTypes = {
  open: PropTypes.bool.isRequired,
};

PropTypes.defaultProps = {
  open: null,
};

export default withTheme(NavMenu);
