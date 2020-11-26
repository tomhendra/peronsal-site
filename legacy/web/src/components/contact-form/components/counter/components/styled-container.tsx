/** @jsx jsx */
import { jsx } from '@emotion/react';

import { Children } from '../../../../../utils/types';

type Props = {
  children: Children;
};

export const StyledContainer = ({ children }: Props): JSX.Element => (
  <div
    css={(theme) => ({
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'flex-end',
      height: theme.spacings.golf,
    })}
  >
    {children}
  </div>
);
