import {
  withMediaQueries,
  shadowStandardCharlie,
} from '../../../utils/style-helpers';

import { Children } from '../../../types';

type Props = {
  children: Children;
};

export const StyledHeader = ({ children }: Props) => (
  <header
    css={theme =>
      withMediaQueries(theme)({
        alignItems: 'center',
        backgroundColor: theme.colors.white,
        display: 'flex',
        height: ['5rem', '5rem', '6rem', '6rem', '6rem'],
        padding: [
          `0 ${theme.grid.alpha.gutter}`,
          `0 ${theme.grid.bravo.gutter}`,
          `0 ${theme.grid.charlie.gutter}`,
          `0 ${theme.grid.delta.gutter}`,
          `0 ${theme.grid.echo.gutter}`,
        ],
        position: 'fixed',
        top: 0,
        width: '100vw',
        zIndex: theme.zIndex.header,
        ...shadowStandardCharlie('shadowNeutral', theme),
      })
    }
  >
    {children}
  </header>
);
