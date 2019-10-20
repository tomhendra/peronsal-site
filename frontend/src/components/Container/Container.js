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
    gridTemplateColumns: [
      theme.grid.alpha.cols,
      theme.grid.bravo.cols,
      theme.grid.charlie.cols,
      theme.grid.delta.cols,
    ],
    columnGap: [
      theme.grid.alpha.gutter,
      theme.grid.bravo.gutter,
      theme.grid.charlie.gutter,
      theme.grid.delta.gutter,
    ],
    margin: '0 auto',
    maxWidth: [
      theme.grid.alpha.maxWidth,
      theme.grid.bravo.maxWidth,
      theme.grid.charlie.maxWidth,
      theme.grid.delta.maxWidth,
    ],
    padding: '0 4rem',
    '& < *': {
      border: devMode && '1px dashed hsl(307, 100%, 50%)',
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
  theme: null,
};

Container.propTypes = {
  devMode: PropTypes.bool,
  theme: PropTypes.objectOf(PropTypes.object),
};

export default withTheme(Container);
