import React from 'react';
import { Link } from 'gatsby';
import { withTheme } from 'emotion-theming';

/**
 * `....................styles....................`
 */

const styles = theme => ({
  label: 'NavLink',
  color: theme.colors.n400,
  fontSize: theme.typography.text.charlie.fontSize,
  letterSpacing: 1,
  textDecoration: 'none',
  '&.currentPage,:hover': {
    color: theme.colors.n000,
  },
});

/**
 * `....................component....................`
 */

const NavLink = ({ theme, ...props }) => (
  <Link css={styles(theme)} {...props} />
);

export default withTheme(NavLink);
