/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Children } from '../../../../../utils/types';

type Props = {
  children: Children;
};

export const StyledContainer = ({ children }: Props) => (
  <div
    css={(theme) => ({
      position: 'relative',
      zIndex: theme.zIndex.input,
    })}
  >
    {children}
  </div>
);
