/** @jsx jsx */
import { jsx } from '@emotion/react';

import { Children } from '../../../../../utils/types';

type Props = {
  children: Children;
};

export const StyledContainer = ({ children }: Props) => (
  <div
    css={(theme) => ({
      padding: `${theme.spacings.bravo} 0`,
      position: 'relative',
      zIndex: theme.zIndex.input,
    })}
  >
    {children}
  </div>
);
