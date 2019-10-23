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
    label: 'grid',
    display: 'grid',
    columnGap: [
      theme.grid.alpha.gutter,
      theme.grid.bravo.gutter,
      theme.grid.charlie.gutter,
      theme.grid.delta.gutter,
    ],
    gridTemplateColumns: [
      `repeat(${theme.grid.alpha.cols}, 1fr)`,
      `repeat(${theme.grid.bravo.cols}, 1fr)`,
      `repeat(${theme.grid.charlie.cols}, 1fr)`,
      `repeat(${theme.grid.delta.cols}, 1fr)`,
    ],
    margin: '0 auto',
    maxWidth: [
      theme.grid.alpha.maxWidth,
      theme.grid.bravo.maxWidth,
      theme.grid.charlie.maxWidth,
      theme.grid.delta.maxWidth,
    ],
    '& div': {
      border: devMode && '1px dashed hsl(300, 100%, 50%)',
    },
  });
};

/**
 * `....................component....................`
 */

const Grid = ({ devMode, theme, children }) => (
  <div css={styles(devMode, theme)}>{children}</div>
);

Grid.propTypes = {
  devMode: PropTypes.bool,
  children: childrenPropType,
};

Grid.defaultProps = {
  devMode: false,
  children: null,
};

export default withTheme(Grid);