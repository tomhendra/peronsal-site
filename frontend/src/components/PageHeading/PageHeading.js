import React from 'react';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

/**
 * `....................styles....................`
 */

const styles = theme => ({
  display: 'flex',
  justifyContent: 'space-between',
  minHeight: theme.spacings.lima,
  paddingBottom: theme.spacings.hotel,
});

/**
 * `....................component....................`
 */

const PageHeading = ({ children, theme, ...props }) => (
  <div css={styles(theme)} {...props}>
    {children}
  </div>
);

PageHeading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withTheme(PageHeading);
