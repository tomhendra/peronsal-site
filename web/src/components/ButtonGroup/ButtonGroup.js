import styled from '@emotion/styled';

import {
  withMediaQueries,
  getSpacingValues,
} from '../../assets/styles/style-helpers';

import { sizes } from '../../assets/styles/style-enums';

const { CHARLIE } = sizes;

// ....................styles....................

function styles({ theme }) {
  return withMediaQueries(theme)({
    display: 'flex',
    flexDirection: ['column', 'row'],

    '& > *:not(:last-of-type)': {
      marginRight: getSpacingValues([0, CHARLIE], theme),
      marginBottom: getSpacingValues([CHARLIE, 0], theme),
    },
  });
}

// ....................component....................

const ButtonGroup = styled.div(styles);

// ....................propTypes....................

export default ButtonGroup;
