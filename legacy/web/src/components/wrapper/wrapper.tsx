/** @jsx jsx */
import { jsx } from '@emotion/react';

import { Children } from '../../utils/types';

type Props = {
  children: Children;
};

export const Wrapper = ({ children }: Props): JSX.Element => (
  <div
    css={{
      minHeight: '100vh',
      minWidth: '100vw',
      overflow: 'hidden',
      position: 'relative',
    }}
  >
    {children}
  </div>
);
