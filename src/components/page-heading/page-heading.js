import React from 'react';
import PropTypes from 'prop-types';
import { pageHeadingStyles } from './page-heading-styles';

export const PageHeading = ({ children }) => (
  <div css={pageHeadingStyles}>{children}</div>
);

PageHeading.propTypes = {
  children: PropTypes.node.isRequired,
};
