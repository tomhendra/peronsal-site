/** @jsx jsx */
import { jsx } from '@emotion/react';

import { withMediaQueries } from '../../../../../utils/style-helpers';

import { Children } from '../../../../../types';

type Props = {
  children: Children;
};

export const StyledSpan = ({ children }: Props): JSX.Element => (
  <div
    css={theme =>
      withMediaQueries(theme)({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.n900,
        borderWidth: theme.borderWidth.charlie,
        borderStyle: 'solid',
        borderColor: theme.colors.n500,
        borderRadius: theme.borderRadius.bravo,
        color: theme.colors.n400,
        fontSize: [
          theme.text.bravo.fontSize,
          theme.text.bravo.fontSize,
          theme.text.charlie.fontSize,
        ],
        padding: [
          `${theme.spacings.alpha} ${theme.spacings.bravo}`,
          `${theme.spacings.alpha} ${theme.spacings.bravo}`,
          `${theme.spacings.alpha} ${theme.spacings.charlie}`,
        ],
        textTransform: 'uppercase',
        height: '100%',
        width: '100%',
      })
    }
  >
    {children}
  </div>
);
