/** @jsx jsx */
import { jsx } from '@emotion/react';
import { withMediaQueries } from '../../../../../utils/style-helpers';
import { Variants, Children } from '../../../../../types/types';

type Props = {
  variant: Variants;
  name: string;
  checked?: boolean;
  error?: string;
  touched?: boolean;
  children: Children;
};

export const StyledLabel = (props: Props): JSX.Element => {
  const { variant, name, checked, error, touched, children } = props;

  return (
    <label
      htmlFor={name}
      css={theme => {
        const colorVariants = {
          primary: {
            color: theme.colors.n200,
          },
          secondary: {
            color: theme.colors.bodyColor,
          },
          tertiary: {
            color: theme.colors.n900,
          },
        };

        const baseStyles = {
          alignItems: 'center',
          display: 'flex',
          flexWrap: 'wrap',
          fontSize: [theme.text.bravo.fontSize, theme.text.charlie.fontSize],
          position: 'relative',
          zIndex: theme.zIndex.input,
        };

        const checkboxStyles = {
          '&::before': {
            backgroundColor: !checked ? 'inherit' : theme.colors.p400,
            borderColor:
              !checked && !touched
                ? theme.colors.n500
                : checked
                ? theme.colors.p400
                : error && theme.colors.danger,
            borderStyle: 'solid',
            borderRadius: theme.borderRadius.bravo,
            borderWidth: theme.borderWidth.bravo,
            content: '""',
            cursor: 'pointer',
            display: 'inline-block',
            height: theme.iconSizes.charlie,
            marginRight: '0.6rem',
            transition: 'border 0.05s ease-in, background-color 0.05s ease-in',
            width: theme.iconSizes.charlie,
          },

          // target Icon container div
          '& div': {
            cursor: 'pointer',
            left: '0.2rem',
            opacity: !checked ? 0 : 1,
            position: 'absolute',
            top: '0.2rem',
            transform: !checked ? 'scale(0, 0)' : 'scale(1, 1)',
            transition: 'transform 0.05s ease-in, opacity 0.05s ease-in',
            // thicken the nested svg slightly from 2 default (hackish?)
            '& svg': {
              strokeWidth: 3,
            },
          },
        };

        return withMediaQueries(theme)({
          ...colorVariants[variant],
          ...baseStyles,
          ...checkboxStyles,
        });
      }}
    >
      {children}
    </label>
  );
};
