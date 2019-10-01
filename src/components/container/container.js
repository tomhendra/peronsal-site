import React from 'react';
import PropTypes from 'prop-types';

import { sizes } from '../../assets/styles';

/**
 * `....................styles....................`
 */

const styles = {
  minHeight: '100vh',
  padding: `0 calc((100vw - ${sizes.massive4}) / 2)`,
  paddingTop: sizes.large3,
};

/**
 * `....................component....................`
 */

const Container = ({ children }) => <div css={styles}>{children}</div>;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
