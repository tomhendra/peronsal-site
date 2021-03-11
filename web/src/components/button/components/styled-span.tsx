/** @jsx jsx */
import { jsx } from '@emotion/react';

import { Variants, ButtonSizes, Children } from '../../../types/types';

type Props = {
  variant: Variants;
  size: ButtonSizes;
  children: Children;
};

export const StyledSpan = ({ variant, size, children }: Props): JSX.Element => (
  <span
    css={theme => {
      const colorVariants = {
        primary: {
          backgroundColor: theme.colors.p400,
          borderColor: theme.colors.n300,
          color: theme.colors.n100,
        },
        secondary: {
          backgroundColor: theme.colors.white,
          borderColor: theme.colors.n300,
          color: theme.colors.n300,
        },
        tertiary: {
          backgroundColor: theme.colors.white,
          borderColor: theme.colors.n500,
          color: theme.colors.n400,
        },
      };

      const sizeVariants = {
        alpha: {
          minWidth: theme.spacings.india,
          fontSize: theme.text.delta.fontSize,
          padding: `0 ${theme.spacings.delta}`,
        },
        bravo: {
          minWidth: theme.spacings.juliett,
          fontSize: theme.text.echo.fontSize,
          padding: `0 ${theme.spacings.echo}`,
        },
        charlie: {
          minWidth: theme.spacings.kilo,
          fontSize: theme.text.foxtrot.fontSize,
          padding: `0 ${theme.spacings.foxtrot}`,
        },
      };

      return {
        ...colorVariants[variant],
        ...sizeVariants[size],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: theme.borderRadius.bravo,
        borderStyle: 'solid',
        borderWidth: theme.borderWidth.charlie,
        width: '100%',
        height: '100%',
        fontFamily: theme.fontStack.heading,
        fontWeight: theme.fontWeight.medium,
        lineHeight: 1,
        position: 'relative',
        textDecoration: 'none',
        textTransform: 'uppercase',
      };
    }}
  >
    {children}
  </span>
);
