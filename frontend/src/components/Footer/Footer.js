import React from 'react';
import { withTheme } from 'emotion-theming';

import { withMediaQueries } from '../../assets/styles/style-helpers';

import useSiteMetadata from '../../hooks/useSiteMetadata';
import Social from '../Social';

/**
 * `....................styles....................`
 */

const baseStyles = theme => {
  return withMediaQueries(theme)({
    label: 'Footer',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    borderTop: `${theme.borderWidth.alpha} solid ${theme.colors.n800}`,
    display: 'flex',
    height: '6rem',
    padding: '0 4rem',
    width: '100vw',
    zIndex: theme.zIndex.footer,

    '> *': {
      alignItems: 'center',
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

const Footer = ({ theme, ...props }) => {
  const { siteMetadata } = useSiteMetadata();
  const date = new Date().getFullYear();

  return (
    <footer css={baseStyles(theme)} {...props}>
      <div>
        {/* prettier-ignore */}
        <span>
          &copy;
          {siteMetadata.author}
          {' '}
          {date}
        </span>
        <Social />
        {/* placeholder for switch component... */}
        <span>SWITCH</span>
      </div>
    </footer>
  );
};

export default withTheme(Footer);
