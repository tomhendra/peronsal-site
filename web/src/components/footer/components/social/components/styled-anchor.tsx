/** @jsx jsx */
import { jsx } from '@emotion/react';

import { withMediaQueries } from '../../../../../utils/style-helpers';
import { Children } from '../../../../../utils/types';

type Props = {
  href: string;
  children: Children;
};

export const StyledAnchor = ({ href, children }: Props) => (
  <a
    href={href}
    target="blank"
    rel="noopener"
    css={(theme) =>
      withMediaQueries(theme)({
        position: 'relative',
        textDecoration: 'none',

        '&::after': {
          borderWidth: theme.borderWidth.charlie,
          borderStyle: 'solid',
          borderColor: theme.colors.n500,
          borderRadius: theme.borderRadius.bravo,
          content: '""',
          height: '100%',
          width: '100%',
          position: 'absolute',
          left: 0,
          top: 0,
          zIndex: theme.zIndex.behind,
          transformOrigin: 'top right',
          transition: `transform ${theme.transitions.default}`,
        },

        '&:hover, &:focus': {
          '&::after': {
            transition: `transform ${theme.transitions.springDefault}`,
            transform: 'translate(-6px, 6px)',
          },
        },
      })
    }
  >
    {children}
  </a>
);
