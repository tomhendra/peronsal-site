/** @jsx jsx */
import { jsx } from '@emotion/react';

import { Children } from '../../../utils/types';
import { Card } from '../..';

type Props = {
  children: Children;
};

export const StyledCard = ({ children, ...rest }: Props): JSX.Element => (
  <Card
    variant="primary"
    accent="accentCharlie"
    padding={['foxtrot', 'foxtrot', 'golf', 'foxtrot', 'golf']}
    // justifyContent="space-between"
    alignItems="stretch"
    css={(theme) => ({
      minHeight: [
        theme.spacings.november,
        theme.spacings.mike,
        theme.spacings.oscar,
        theme.spacings.november,
        theme.spacings.papa,
      ],

      '&::after': {
        backgroundColor: 'transparent',
        borderColor: theme.colors.accentCharlie,
        borderRadius: theme.borderRadius.bravo,
        borderStyle: 'solid',
        borderWidth: theme.borderWidth.echo,
        content: '""',
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        width: '100%',
        transformOrigin: 'top right',
        transition: `transform ${theme.transitions.default}`,
        zIndex: theme.zIndex.behind,
      },
    })}
    {...rest}
  >
    {children}
  </Card>
);
