import styled from '@emotion/styled';

import { withMediaQueries } from '../../assets/styles/style-helpers';

// ....................styles....................

const styles = ({ theme }) =>
  withMediaQueries(theme)({
    display: 'flex',

    '& > *:not(:last-of-type)': {
      marginRight: theme.spacings.bravo,
    },
  });

// ....................component....................

const ButtonGroup = styled.div(styles);

export default ButtonGroup;
