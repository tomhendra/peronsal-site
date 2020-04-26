/** @jsx jsx */
import { jsx } from '@emotion/react';

import { hideVisually } from 'polished';

type Props = {
  name: string;
};

export const StyledCheckbox = ({ name, ...rest }: Props) => (
  <input
    id={name}
    type="checkbox"
    css={(theme) => ({
      ...hideVisually(),
      '&:focus + label::before': {
        borderWidth: theme.borderWidth.bravo,
        borderColor: theme.colors.p400,
      },
    })}
    {...rest}
  />
);
