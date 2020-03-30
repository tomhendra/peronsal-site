import styled from '@emotion/styled';

import { Variants, Sizes } from '../../../utils/enums';

interface ButtonElementProps {
  variant: Variants;
  size: Sizes.Alpha | Sizes.Bravo | Sizes.Charlie;
}

export const ButtonElement = styled('button')<ButtonElementProps>(
  ({ variant, size, theme }): {} => {
    const baseStyles = {
      border: 0,
      cursor: 'pointer',
      position: 'relative',
      textDecoration: 'none',

      '&::after': {
        borderRadius: theme.borderRadius.bravo,
        borderStyle: 'solid',
        borderWidth: theme.borderWidth.charlie,
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

      '&:hover, &:focus': {
        '&::after': {
          transition: `transform ${theme.transitions.springDefault}`,
          transform: 'translate(-7px, 7px)',
        },
      },

      '&:active': {
        '&::after': {
          transition: `transform ${theme.transitions.fast}`,
          transform: 'translate(0px, 0px)',
        },
      },

      '&:disabled': {
        opacity: 0.5,
        pointerStandardts: 'none',
        userSelectable: 'none',
        '&::after': {
          transition: `transform ${theme.transitions.default}`,
          transform: 'translate(0px, 0px)',
        },
      },
    };

    const { Primary, Secondary, Tertiary } = Variants;

    const colorVariants = {
      [Primary]: {
        '&:after': {
          borderColor: theme.colors.n300,
        },
      },
      [Secondary]: {
        '&:after': {
          borderColor: theme.colors.n300,
        },
      },
      [Tertiary]: {
        '&:after': {
          borderColor: theme.colors.n500,
        },
      },
    };

    const colorConfig = colorVariants[variant];

    const { Alpha, Bravo, Charlie } = Sizes;

    const sizeVariants = {
      [Alpha]: {
        height: '4.8rem',
      },
      [Bravo]: {
        height: '6rem',
      },
      [Charlie]: {
        height: '7.2rem',
      },
    };

    const sizeConfig = sizeVariants[size];

    return {
      ...baseStyles,
      ...colorConfig,
      ...sizeConfig,
    };
  },
);
