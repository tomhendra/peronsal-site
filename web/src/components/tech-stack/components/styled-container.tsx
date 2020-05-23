/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Children } from '../../../utils/types';

type Props = {
  children: Children;
};

export const StyledContainer = ({ children }: Props): JSX.Element => (
  <div
    css={{
      position: 'relative',

      '&:hover': {
        // select StyledTooltip adn reveal on hover
        '& > :first-of-type': {
          visibility: 'visible',
        },
      },
    }}
  >
    {children}
  </div>
);
