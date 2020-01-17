import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

import { childrenPropType } from '../../utils/shared-prop-types';
import { withMediaQueries } from '../../assets/styles/style-helpers';

// ....................styles....................

const styles = ({ devMode, withoutBottomSpacing, withRowGaps, theme }) =>
  withMediaQueries(theme)({
    label: 'grid',
    display: 'grid',
    gridTemplateRows: 'auto',
    columnGap: [
      theme.grid.alpha.gutter,
      theme.grid.bravo.gutter,
      theme.grid.charlie.gutter,
      theme.grid.delta.gutter,
    ],
    rowGap: withRowGaps && [
      theme.grid.alpha.gutter,
      theme.grid.bravo.gutter,
      theme.grid.charlie.gutter,
      theme.grid.delta.gutter,
    ],
    gridTemplateColumns: [
      `repeat(${theme.grid.alpha.cols}, minmax(0, 1fr))`,
      `repeat(${theme.grid.bravo.cols}, minmax(0, 1fr))`,
      `repeat(${theme.grid.charlie.cols}, minmax(0, 1fr))`,
      `repeat(${theme.grid.delta.cols}, minmax(0, 1fr))`,
    ],
    margin: '0 auto',
    maxWidth: [
      theme.grid.alpha.maxWidth,
      theme.grid.bravo.maxWidth,
      theme.grid.charlie.maxWidth,
      theme.grid.delta.maxWidth,
    ],
    paddingBottom: !withoutBottomSpacing && theme.spacings.india,
    width: '100%',
    zIndex: theme.zIndex.default,
    border: devMode && '1px dashed hsl(300, 100%, 50%)',
    '& > *': {
      border: devMode && '1px dashed hsl(300, 100%, 50%)',
    },
  });

// ....................component....................

const Grid = styled.div(styles);

// ....................propTypes....................

Grid.propTypes = {
  devMode: PropTypes.bool,
  withoutBottomSpacing: PropTypes.bool,
  withRowGaps: PropTypes.bool,
  children: childrenPropType,
};

Grid.defaultProps = {
  devMode: false,
  withoutBottomSpacing: false,
  withRowGaps: false,
  children: null,
};

export default withTheme(Grid);
