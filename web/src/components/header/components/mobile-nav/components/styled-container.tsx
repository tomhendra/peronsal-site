import { withMediaQueries } from '../../../../../utils/style-helpers';
import { Children } from '../../../../../types';

type Props = {
  children: Children;
};

export const StyledContainer = ({ children }: Props) => (
  <div
    css={theme =>
      withMediaQueries(theme)({
        display: ['flex', 'flex', 'none', 'none', 'none'],
        alignItems: 'center',
        position: 'relative',
      })
    }
  >
    {children}
  </div>
);
