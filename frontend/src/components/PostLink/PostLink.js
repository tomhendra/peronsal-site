import React from 'react';
import { Link } from 'gatsby';
import { withTheme } from 'emotion-theming';

/**
 * `....................styles....................`
 */

const styles = theme => ({
  color: theme.colors.n800,
  fontSize: theme.typography.headings.delta.fontSize,
  fontWeight: 'bold',
  lineHeight: 1.2,
  textDecoration: 'none',
});

/**
 * `....................component....................`
 */

const PostLink = ({ theme, ...props }) => (
  <Link css={styles(theme)} {...props} />
);

export default withTheme(PostLink);
