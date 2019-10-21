import React from 'react';
import { Link } from 'gatsby';
import { withTheme } from 'emotion-theming';

import Logo from '../Logo';
import Navbar from '../Navbar';
import { withMediaQueries } from '../../assets/styles/style-helpers';
import { colors, sizes } from '../../assets/styles/constants';

const { NEUTRAL } = colors;
const { FOXTROT } = sizes;

/**
 * `....................styles....................`
 */

const styles = theme => {
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

    '> *': {
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
  <header css={styles(theme)} {...props}>
    <div>
      <Link to="/" css={{ fontSize: 0, lineHeight: 0 }}>
        <Logo size={FOXTROT} color={NEUTRAL} />
      </Link>
      <Navbar />
    </div>
  </header>
);

export default withTheme(Header);
