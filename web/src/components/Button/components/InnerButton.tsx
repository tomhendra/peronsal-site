import styled from '@emotion/styled';

import { Variants, Sizes } from '../../../utils/enums';

interface InnerButtonProps {
  variant: Variants;
  size: Sizes.Alpha | Sizes.Bravo | Sizes.Charlie;
  inheritBg?: boolean;
}

export const InnerButton = styled('span')<InnerButtonProps>(
  ({ theme, variant, size, inheritBg }): {} => {
    const baseStyles = {
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

    const { Primary, Secondary, Tertiary } = Variants;

    const colorVariants = {
      [Primary]: {
        backgroundColor: theme.colors.p400,
        borderColor: theme.colors.n300,
        color: theme.colors.n100,
      },
      [Secondary]: {
        backgroundColor: !inheritBg ? theme.colors.white : 'inherit',
        borderColor: theme.colors.n300,
        color: theme.colors.n300,
      },
      [Tertiary]: {
        backgroundColor: !inheritBg ? theme.colors.white : 'inherit',
        borderColor: theme.colors.n500,
        color: theme.colors.n400,
      },
    };

    const colorConfig = colorVariants[variant];

    const { Alpha, Bravo, Charlie } = Sizes;

    const sizeVariants = {
      [Alpha]: {
        minWidth: theme.spacings.india,
        fontSize: theme.typography.text.delta.fontSize,
        padding: `0 ${theme.spacings.delta}`,
      },
      [Bravo]: {
        minWidth: theme.spacings.juliett,
        fontSize: theme.typography.text.echo.fontSize,
        padding: `0 ${theme.spacings.echo}`,
      },
      [Charlie]: {
        minWidth: theme.spacings.kilo,
        fontSize: theme.typography.text.foxtrot.fontSize,
        padding: `0 ${theme.spacings.foxtrot}`,
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
