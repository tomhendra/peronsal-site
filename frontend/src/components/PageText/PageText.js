import React from 'react';
import { withTheme } from 'emotion-theming';

/**
 * `....................styles....................`
 */

const styles = theme => ({
  maxWidth: '50%',

  h1: {
    marginBottom: theme.spacings.foxtrot,
  },

  h2: {
    color: theme.colors.p700,
    marginBottom: theme.spacings.charlie,
  },
});

/**
 * `....................component....................`
 */

const PageText = ({ mainHeading, subHeading, paragraph, theme, ...props }) => (
  <div css={styles(theme)} {...props}>
    <h1>{mainHeading}</h1>
    <h2>{subHeading}</h2>
    <p>{paragraph}</p>
  </div>
);

export default withTheme(PageText);
