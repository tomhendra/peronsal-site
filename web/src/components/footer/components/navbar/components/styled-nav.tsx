/** @jsx jsx */
import { jsx } from '@emotion/react';

import { Children } from '../../../../../utils/types';

import { withMediaQueries } from '../../../../../utils/style-helpers';

type Props = {
  children: Children;
};

export const StyledNav = ({ children }: Props) => (
  <nav
    css={(theme) =>
      withMediaQueries(theme)({
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: ['space-between', 'space-between', 'flex-end'],

        '& > :not(:last-of-type)': {
          marginRight: [
            0,
            0,
            theme.spacings.charlie,
            theme.spacings.charlie,
            theme.spacings.delta,
          ],
        },
      })
    }
  >
    {children}
  </nav>
);
