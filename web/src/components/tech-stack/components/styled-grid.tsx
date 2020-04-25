/** @jsx jsx */
import { jsx } from '@emotion/react';

import { withMediaQueries } from '../../../utils/style-helpers';

import { Children } from '../../../utils/types';

type Props = {
  gridSize: 'alpha' | 'delta';
  noSpacingBottom?: boolean;
  children: Children;
};

export const StyledGrid = ({ gridSize, noSpacingBottom, children }: Props) => (
  <div
    css={(theme) => {
      const baseStyles = {
        display: 'grid',
        marginBottom: !noSpacingBottom ? theme.spacings.foxtrot : 0,
        justifyItems: 'center',
        width: '100%',
      };

      const gridStyles = {
        alpha: {
          gridTemplateColumns: 'repeat(8, 1fr)',
          gap: theme.spacings.charlie,
        },
        delta: {
          gridTemplateColumns: [
            'repeat(3, 1fr)',
            'repeat(3, 1fr)',
            'repeat(4, 1fr)',
            'repeat(6, 1fr)',
            'repeat(6, 1fr)',
          ],
          gap: [
            `${theme.spacings.golf} ${theme.spacings.foxtrot}`,
            `${theme.spacings.india} ${theme.spacings.hotel}`,
          ],
        },
      };

      const gridConfig = gridStyles[gridSize];

      return withMediaQueries(theme)({
        ...baseStyles,
        ...gridConfig,
      });
    }}
  >
    {children}
  </div>
);
