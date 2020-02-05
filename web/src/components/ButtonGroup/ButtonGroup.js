import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import { withMediaQueries } from '../../assets/styles/style-helpers';

// ....................styles....................

const styles = ({ theme }) =>
  withMediaQueries(theme)({
    display: 'flex',

    '& > *:not(:last-of-type)': {
      marginRight: [
        theme.grid.alpha.gutter,
        theme.grid.bravo.gutter,
        theme.grid.charlie.gutter,
        theme.grid.delta.gutter,
        theme.grid.echo.gutter,
      ],
    },
  });

// ....................component....................

const ButtonGroup = styled.div(styles);

export default withTheme(ButtonGroup);
