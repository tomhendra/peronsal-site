/** @jsx jsx */
import { jsx } from '@emotion/react';

import { getPositionStyles } from './helpers';

import {
  FeedbackVariants,
  Positions,
  Alignments,
  Children,
} from '../../utils/types';

type Props = {
  variant: FeedbackVariants;
  position: Positions;
  align: Alignments;
  children: Children;
};

export const Tooltip = (props: Props) => {
  const {
    variant = 'neutral',
    position = 'top',
    align = 'center',
    children,
  } = props;

  return (
    <div
      css={(theme) => {
        const variantOptions = {
          neutral: {
            backgroundColor: theme.colors.n200,
            color: theme.colors.n900,
          },
          danger: {
            backgroundColor: theme.colors.r700,
            color: theme.colors.r000,
          },
          warning: {
            backgroundColor: theme.colors.warning,
            color: theme.colors.y000,
          },
          success: {
            backgroundColor: theme.colors.success,
            color: theme.colors.g000,
          },
        };

        const variantConfig = variantOptions[variant];
        const { backgroundColor } = variantConfig;

        return {
          ...variantConfig,
          ...getPositionStyles(align, position, backgroundColor, theme),
          borderRadius: theme.borderRadius.bravo,
          fontSize: theme.text.bravo.fontSize,
          maxWidth: theme.spacings.lima,
          minWidth: theme.spacings.india,
          padding: `${theme.spacings.bravo} ${theme.spacings.charlie}`,
          position: 'absolute',
          textAlign: 'center',
          zIndex: theme.zIndex.tooltip,
          // Tooltip arrow
          '&::after': {
            border: `${theme.borderWidth.foxtrot} solid transparent`,
            content: '""',
            position: 'absolute',
          },
        };
      }}
    >
      {children}
    </div>
  );
};
