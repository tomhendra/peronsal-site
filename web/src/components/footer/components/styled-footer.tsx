/** @jsx jsx */
import { jsx } from '@emotion/react';

import { Children } from '../../../types';
import { withMediaQueries } from '../../../utils/style-helpers';

type Props = {
  children: Children;
};

export const StyledFooter = ({ children }: Props): JSX.Element => (
  <footer
    css={theme =>
      withMediaQueries(theme)({
        color: theme.colors.n400,
        paddingTop: [
          theme.spacings.hotel,
          theme.spacings.hotel,
          theme.spacings.india,
          theme.spacings.india,
          theme.spacings.juliett,
        ],
        paddingRight: [
          theme.grid.alpha.gutter,
          theme.grid.bravo.gutter,
          theme.grid.charlie.gutter,
          theme.grid.delta.gutter,
          theme.grid.echo.gutter,
        ],
        paddingBottom: [
          theme.spacings.golf,
          theme.spacings.golf,
          theme.spacings.hotel,
          theme.spacings.hotel,
          theme.spacings.hotel,
        ],
        paddingLeft: [
          theme.grid.alpha.gutter,
          theme.grid.bravo.gutter,
          theme.grid.charlie.gutter,
          theme.grid.delta.gutter,
          theme.grid.echo.gutter,
        ],
        width: '100vw',
        zIndex: theme.zIndex.footer,
      })
    }
  >
    {children}
  </footer>
);
