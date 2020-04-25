/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Children } from '../../../utils/types';

type Props = {
  children: Children;
};

export const StyledContainer = ({ children }: Props) => (
  <div
    css={{
      position: 'relative',

      '&:hover': {
        // select StyledTooltip adn reveal on hover
        '&:first-child': {
          visibility: 'visible',
        },
      },
    }}
  >
    {children}
  </div>
);
