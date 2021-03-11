/** @jsx jsx */
import { jsx } from '@emotion/react';

import { Children } from '../../../../../types/types';

type Props = {
  children: Children;
};

export const StyledContainer = ({ children }: Props): JSX.Element => (
  <div
    css={theme => ({
      padding: `${theme.spacings.bravo} 0`,
      position: 'relative',
      zIndex: theme.zIndex.input,
    })}
  >
    {children}
  </div>
);
