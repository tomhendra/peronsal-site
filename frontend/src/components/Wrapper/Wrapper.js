import React from 'react';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

/**
 * `....................styles....................`
 */

const baseStyles = {
  label: 'Wrapper',
  minHeight: '100vh',
  position: 'relative',
  width: '100vw',
};

/**
 * `....................component....................`
 */

const Wrapper = ({ children }) => <div css={baseStyles}>{children}</div>;

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withTheme(Wrapper);
