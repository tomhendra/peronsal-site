/** @jsx jsx */
import { jsx } from '@emotion/react';

export const StyledCircleGrey = (): JSX.Element => (
  <circle
    cx="50%"
    cy="50%"
    r="10"
    css={(theme) => ({
      stroke: theme.colors.n500,
    })}
  />
);
