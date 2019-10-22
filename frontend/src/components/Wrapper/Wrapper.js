import React from 'react';
import { withTheme } from 'emotion-theming';

import { childrenPropType } from '../../utils/shared-prop-types';

/**
 * `....................styles....................`
 */

const styles = {
  label: 'Wrapper',
  minHeight: '100vh',
  position: 'relative',
  width: '100vw',
};

/**
 * `....................component....................`
 */

const Wrapper = ({ children }) => <div css={styles}>{children}</div>;

Wrapper.propTypes = {
  children: childrenPropType,
};

Wrapper.defaultProps = {
  children: null,
};

export default withTheme(Wrapper);
