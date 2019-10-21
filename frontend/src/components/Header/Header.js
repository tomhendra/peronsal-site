import React from 'react';
import { Link } from 'gatsby';
import { withTheme } from 'emotion-theming';

import { withMediaQueries } from '../../assets/styles/style-helpers';

import Logo from '../Logo';
import Navbar from '../Navbar';

/**
 * `....................styles....................`
 */

const baseStyles = theme => {
  return withMediaQueries(theme)({
    label: 'Header',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    borderBottom: `${theme.borderWidth.alpha} solid ${theme.colors.n800}`,
    display: 'flex',
    height: '6rem',
    padding: '0 4rem',
    position: 'fixed',
    top: 0,
    width: '100vw',
    zIndex: theme.zIndex.header,

    '& div': {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '0 auto',
      maxWidth: [...theme.breakpoints],
      width: '100%',
    },
  });
};

/**
 * `....................component....................`
 */

const Header = ({ theme, ...props }) => (
  <header css={baseStyles(theme)} {...props}>
    <div>
      <Link to="/">
        <Logo />
      </Link>
      <Navbar />
    </div>
  </header>
);

export default withTheme(Header);
