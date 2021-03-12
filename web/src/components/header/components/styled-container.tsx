import { withMediaQueries } from '../../../utils/style-helpers';
import { Children } from '../../../types';

type Props = {
  children: Children;
};

export const StyledContainer = ({ children }: Props) => (
  <div
    css={theme =>
      withMediaQueries(theme)({
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 auto',
        maxWidth: [
          '100vw',
          '100vw',
          theme.grid.charlie.maxWidth,
          theme.grid.delta.maxWidth,
          theme.grid.echo.maxWidth,
        ],

        width: '100%',
      })
    }
  >
    {children}
  </div>
);
