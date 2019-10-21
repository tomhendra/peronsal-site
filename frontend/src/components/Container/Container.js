import React from 'react';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

import { withMediaQueries } from '../../assets/styles/style-helpers';

/**
 * `....................styles....................`
 */

const baseStyles = (devMode, theme) => {
  return withMediaQueries(theme)({
    label: 'Container',
    display: 'grid',
    columnGap: [
      theme.grid.alpha.gutter,
      theme.grid.bravo.gutter,
      theme.grid.charlie.gutter,
      theme.grid.delta.gutter,
    ],
    gridTemplateColumns: [
      `repeat ${theme.grid.alpha.cols} 1fr`,
      `repeat ${theme.grid.bravo.cols} 1fr`,
      `repeat ${theme.grid.charlie.cols} 1fr`,
      `repeat ${theme.grid.delta.cols} 1fr`,
    ],
    margin: '0 auto',
    maxWidth: [
      theme.grid.alpha.maxWidth,
      theme.grid.bravo.maxWidth,
      theme.grid.charlie.maxWidth,
      theme.grid.delta.maxWidth,
    ],
    // 6rem being height of fixed header...
    minHeight: 'calc(100vh - 6rem)',
    padding: '6rem 0 4rem 0',
    '& div': {
      border: devMode && '1px dashed hsl(300, 100%, 50%)',
    },
  });
};

/**
 * `....................component....................`
 */

const Container = ({ devMode, theme, ...props }) => {
  return <div css={baseStyles(devMode, theme)} {...props} />;
};

Container.defaultProps = {
  devMode: false,
};

Container.propTypes = {
  devMode: PropTypes.bool,
};

export default withTheme(Container);
