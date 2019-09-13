import React from 'react';
import PropTypes from 'prop-types';
import { containerStyles } from './container-styles';

export const Container = ({ children }) => (
  <div css={containerStyles}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
