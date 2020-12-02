/** @jsx jsx */
import { jsx } from '@emotion/react';

export const StyledDivider = (): JSX.Element => (
  <div
    css={(theme) => ({
      backgroundColor: theme.colors.n500,
      height: theme.borderWidth.delta,
    })}
  />
);