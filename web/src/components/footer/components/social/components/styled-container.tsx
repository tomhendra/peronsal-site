import { withMediaQueries } from '../../../../../utils/style-helpers';

import { Children } from '../../../../../types';

type Props = {
  children: Children;
};

export const StyledContainer = ({ children }: Props) => (
  <div
    css={theme =>
      withMediaQueries(theme)({
        display: 'flex',
        justifyContent: [
          'flex-start',
          'flex-start',
          'flex-end',
          'flex-end',
          'flex-start',
        ],

        '& > :not(:last-of-type)': {
          marginRight: [
            theme.spacings.bravo,
            theme.spacings.bravo,
            theme.spacings.echo,
          ],
        },
      })
    }
  >
    {children}
  </div>
);
