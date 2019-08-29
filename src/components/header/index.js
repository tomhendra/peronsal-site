import React from 'react';
import PropTypes from 'prop-types';
import headerStyles from './header-styles';
import Logo from '../logo';
import NavLink from '../navlink';

const Header = ({ siteTitle }) => (
  <header css={headerStyles}>
    <NavLink to="/">
      {/* <Logo /> */}
      {siteTitle}
    </NavLink>
    <nav>
      <NavLink to="/about/" activeClassName="current-page">
        About
      </NavLink>
      <NavLink to="/projects/" activeClassName="current-page">
        Projects
      </NavLink>
      <NavLink to="/contact/" activeClassName="current-page">
        Contact
      </NavLink>
      <NavLink to="/blog/" activeClassName="current-page">
        Blog
      </NavLink>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
