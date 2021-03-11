/** @jsx jsx */
import { jsx } from '@emotion/react';

import { Tooltip } from '../..';

import { Children } from '../../../types/types';

type Props = {
  children: Children;
};

export const StyledTooltip = ({ children, ...rest }: Props): JSX.Element => (
  <Tooltip
    variant="neutral"
    align="center"
    position="top"
    css={theme => ({
      marginBottom: theme.spacings.delta,
      visibility: 'hidden',
    })}
    {...rest}
  >
    {children}
  </Tooltip>
);
