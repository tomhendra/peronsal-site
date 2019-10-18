import React from 'react';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

import { withMediaQueries } from '../../assets/styles/style-helpers';

/**
 * `....................styles....................`
 */

const baseStyles = theme => {
  return withMediaQueries(theme)({
    label: 'Container',
    margin: '0 auto',
    position: 'relative',
    maxWidth: theme.breakpoints.map(bp => `${bp}px`),
    // padding: theme.breakpoints.map(bp => `0 calc((100vw - ${bp}px) / 2)`),
  });
};

/**
 * `....................component....................`
 */

const Container = ({ theme, ...props }) => {
  return <div css={baseStyles(theme)} {...props} />;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withTheme(Container);
