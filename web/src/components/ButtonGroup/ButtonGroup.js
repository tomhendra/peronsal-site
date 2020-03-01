import styled from '@emotion/styled';

import {
  withMediaQueries,
  getSpacingValues,
} from '../../assets/styles/style-helpers';

import { sizes } from '../../assets/styles/style-enums';

const { DELTA } = sizes;

// ....................styles....................

function styles({ theme }) {
  return withMediaQueries(theme)({
    display: 'flex',
    flexDirection: ['column', 'row'],

    '& > *': {
      flex: '1 0 auto',
    },

    '& > *:not(:last-of-type)': {
      marginRight: getSpacingValues([0, DELTA], theme),
      marginBottom: getSpacingValues([DELTA, 0], theme),
    },
  });
}

// ....................component....................

const ButtonGroup = styled.div(styles);

// ....................propTypes....................

export default ButtonGroup;
