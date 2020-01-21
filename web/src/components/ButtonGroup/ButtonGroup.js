import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import { withMediaQueries } from '../../assets/styles/style-helpers';

// ....................styles....................

const styles = ({ theme }) =>
  withMediaQueries(theme)({
    display: 'flex',
    position: 'relative',
    flexDirection: ['column', 'row'],
    width: '100%',

    '& > *:not(:last-of-type)': {
      marginRight: [0, theme.spacings.delta],
      marginBottom: [theme.spacings.echo, 0],
    },
  });

// ....................component....................

const ButtonGroup = styled.div(styles);

export default withTheme(ButtonGroup);
