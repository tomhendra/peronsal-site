import React from 'react';
import { withTheme } from 'emotion-theming';

import { childrenPropType } from '../../utils/shared-prop-types';
import { withMediaQueries } from '../../assets/styles/style-helpers';

/**
 * `....................styles....................`
 */

const styles = theme => {
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
  });
};

/**
 * `....................component....................`
 */

const Grid = ({ theme, children }) => <div css={styles(theme)}>{children}</div>;

/**
 * `....................propTypes....................`
 */

Grid.propTypes = {
  children: childrenPropType,
};

Grid.defaultProps = {
  children: null,
};

export default withTheme(Grid);
