/** @jsx jsx */
import { jsx } from '@emotion/react';

import { withMediaQueries, getSpacingValues } from '../../utils/style-helpers';
import { Children } from '../../utils/types';

type Props = {
  children: Children;
};

export const ButtonGroup = ({ children }: Props) => (
  <div
    css={(theme) =>
      withMediaQueries(theme)({
        display: 'flex',
        flexDirection: ['column', 'row'],

        '& > *': {
          flex: '1 0 auto',
        },

        '& > *:not(:last-child)': {
          marginRight: getSpacingValues([0, 'delta'], theme),
          marginBottom: getSpacingValues(['delta', 0], theme),
        },
      })
    }
  >
    {children}
  </div>
);
