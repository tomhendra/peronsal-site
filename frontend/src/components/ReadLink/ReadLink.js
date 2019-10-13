import React from 'react';
import { Link } from 'gatsby';
import { withTheme } from 'emotion-theming';

/**
 * `....................styles....................`
 */

const styles = theme => ({
  color: theme.colors.p700,
  fontSize: theme.typography.text.alpha.fontSize,
  textDecoration: 'none',
  textTransform: 'uppercase',
});

/**
 * `....................component....................`
 */

const ReadLink = ({ theme, ...props }) => (
  <Link css={styles(theme)} {...props} />
);

export default withTheme(ReadLink);
