import React from 'react';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

/**
 * `....................styles....................`
 */

const styles = theme => ({
  minHeight: '100vh',
  padding: `0 calc((100vw - ${theme.spacings.romeo}) / 2)`,
  paddingTop: theme.spacings.juliett,
});

/**
 * `....................component....................`
 */

const Container = ({ children, theme, ...props }) => (
  <div css={styles} {...props}>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withTheme(Container);
