import React from 'react';
import { withTheme } from 'emotion-theming';

/**
 * `....................styles....................`
 */

const styles = theme => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  justifyContent: 'center',
  margin: '0 auto',
  maxWidth: theme.spacings.quebec,
  textTransform: 'uppercase',

  h1: {
    fontSize: theme.typography.headings.lima.fontSize,
    marginBottom: theme.spacings.bravo,
    lineHeight: 1,
  },

  h2: {
    alignSelf: 'flex-end',
    color: theme.colors.p600,
    paddingRight: theme.spacings.golf,
  },
});

/**
 * `....................component....................`
 */

const Hero = ({ mainHeading, subHeading, theme, ...props }) => (
  <div css={styles(theme)} {...props}>
    <h1>{mainHeading}</h1>
    <h2>{subHeading}</h2>
  </div>
);

export default withTheme(Hero);
