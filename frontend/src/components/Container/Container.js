import React from 'react';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

import { childrenPropType } from '../../utils/shared-prop-types';
import { withMediaQueries } from '../../assets/styles/style-helpers';

/**
 * `....................styles....................`
 */

const styles = (devMode, theme) => {
  return withMediaQueries(theme)({
    label: 'container',
    margin: '0 auto',
    maxWidth: [...theme.breakpoints],
    // 6rem being height of fixed header...
    minHeight: 'calc(100vh - 6rem)',
    paddingTop: '6rem',
    '& div': {
      border: devMode && '1px dashed hsl(300, 100%, 50%)',
    },
  });
};

/**
 * `....................component....................`
 */

const Container = ({ devMode, theme, children }) => (
  <div css={styles(devMode, theme)}>{children}</div>
);

Container.propTypes = {
  devMode: PropTypes.bool,
  children: childrenPropType,
};

Container.defaultProps = {
  devMode: false,
  children: null,
};

export default withTheme(Container);
