/** @jsx jsx */
import { jsx } from '@emotion/react';

import { Tooltip } from '../..';

import { Children } from '../../../utils/types';

type Props = {
  children: Children;
};

export const StyledTooltip = ({ children, ...rest }: Props) => (
  <Tooltip
    variant="neutral"
    align="center"
    position="top"
    css={(theme) => ({
      marginBottom: theme.spacings.delta,
      visibility: 'hidden',
    })}
    {...rest}
  >
    {children}
  </Tooltip>
);
