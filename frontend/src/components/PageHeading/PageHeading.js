import React from 'react';
import PropTypes from 'prop-types';

import { sizes } from '../../assets/styles';

/**
 * `....................styles....................`
 */

const styles = {
  display: 'flex',
  justifyContent: 'space-between',
  minHeight: sizes.huge2,
  paddingBottom: sizes.large1,
};

/**
 * `....................component....................`
 */

const PageHeading = ({ children, ...props }) => (
  <div css={styles} {...props}>
    {children}
  </div>
);

PageHeading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageHeading;
