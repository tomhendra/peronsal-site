import { useTheme } from '@emotion/react';
import React from 'react';
import * as featherIcons from 'react-feather';

import { StyledContainer } from './components';

import { IconColors, IconSizes, Spacings, Icons } from '../../utils/types';

type Props = {
  type: Icons;
  color: IconColors;
  size: IconSizes;
  spacing?: Spacings;
  spacingTop?: Spacings;
  spacingRight?: Spacings;
  spacingBottom?: Spacings;
  spacingLeft?: Spacings;
};

export const Icon = (props: Props): JSX.Element => {
  const {
    color = 'brand',
    size = 'echo',
    type = 'Code',
    spacing,
    spacingTop,
    spacingRight,
    spacingBottom,
    spacingLeft,
  } = props;

  const theme = useTheme();
  const IconElement = featherIcons[type];

  return (
    <StyledContainer
      size={size}
      spacing={spacing}
      spacingTop={spacingTop}
      spacingRight={spacingRight}
      spacingBottom={spacingBottom}
      spacingLeft={spacingLeft}
      aria-label={`An icon or logo SVG image depicting ${type}.`}
    >
      <IconElement color={theme.colors[color]} size={theme.iconSizes[size]} />
    </StyledContainer>
  );
};
