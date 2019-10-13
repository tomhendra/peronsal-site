import React from 'react';
import { Link } from 'gatsby';
import { withTheme } from 'emotion-theming';

/**
 * `....................styles....................`
 */

const styles = theme => ({
  color: theme.colors.n900,
  fontSize: theme.typography.text.alpha.fontSize,
  textDecoration: 'none',
  '&.currentPage': {
    color: theme.colors.p700,
  },
});

/**
 * `....................component....................`
 */

const NavLink = ({ theme, ...props }) => (
  <Link css={styles(theme)} {...props} />
);

export default withTheme(NavLink);
