/** @jsx jsx */
import { jsx } from '@emotion/react';

import { Variants } from '../../../../../types/types';

type Props = {
  variant: Variants;
  error?: string;
  touched: boolean;
};

export const StyledInput = (props: Props): JSX.Element => {
  const { variant, error, touched, ...rest } = props;
  return (
    <input
      css={theme => {
        const colorVariants = {
          primary: {
            backgroundColor: theme.colors.white,
            color: theme.colors.n200,
            borderColor: !(error && touched)
              ? theme.colors.n500
              : theme.colors.danger,

            '&::placeholder': {
              color: theme.colors.n300,
            },
          },
          secondary: {
            backgroundColor: theme.colors.bodyBg,
            color: theme.colors.bodyColor,
            borderColor: !(error && touched)
              ? theme.colors.n500
              : theme.colors.danger,

            '&::placeholder': {
              color: theme.colors.n300,
            },
          },
          tertiary: {
            backgroundColor: theme.colors.n100,
            color: theme.colors.n900,
            borderColor: !(error && touched)
              ? theme.colors.n400
              : theme.colors.danger,

            '&::placeholder': {
              color: theme.colors.n700,
            },
          },
        };

        return {
          ...colorVariants[variant],
          WebkitAppearance: 'none',
          MozAppearance: 'none',
          appearance: 'none',
          borderStyle: 'solid',
          borderRadius: theme.borderRadius.bravo,
          borderWidth: theme.borderWidth.bravo,
          fontFamily: theme.fontStack.default,
          fontSize: theme.text.delta.fontSize,
          marginTop: theme.spacings.alpha,
          padding: theme.spacings.charlie,
          width: '100%',
        };
      }}
      {...rest}
    />
  );
};
