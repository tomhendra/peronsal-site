import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import NavLink from './navlink';

const Header = ({ siteTitle }) => (
  <header
    css={css`
      background-color: #eee;
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      padding: 0.5rem calc((100vw - 550px - 0.5rem) / 2);
    `}
  >
    <NavLink to="/" fontWeight="bold">
      {siteTitle}
    </NavLink>
    <nav
      css={css`
        margin-top: 0;
      `}
    >
      <NavLink to="/" activeClassName="current-page">
        Home
      </NavLink>
      <NavLink to="/about/" activeClassName="current-page">
        About
      </NavLink>
      <NavLink to="/projects/" activeClassName="current-page">
        Projects
      </NavLink>
      <NavLink to="/blog/" activeClassName="current-page">
        Blog
      </NavLink>
      <NavLink to="/contact/" activeClassName="current-page">
        Contact
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
