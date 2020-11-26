/** @jsx jsx */
import { jsx } from '@emotion/react';

import { Children } from '../../../../../utils/types';

import { withMediaQueries } from '../../../../../utils/style-helpers';

type Props = {
  children: Children;
};

export const StyledSpan = ({ children }: Props): JSX.Element => (
  <span
    css={(theme) =>
      withMediaQueries(theme)({
        color: theme.colors.n400,
        fontFamily: theme.fontStack.heading,
        fontSize: [theme.text.bravo.fontSize, theme.text.charlie.fontSize],
        fontWeight: theme.fontWeight.regular,
        letterSpacing: 0.75,
        textTransform: 'uppercase',
      })
    }
  >
    {children}
  </span>
);
