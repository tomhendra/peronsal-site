import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import {
  childrenPropType,
  sizePropType,
  variantPropType,
} from '../../utils/shared-prop-types';

import {
  getSpacingValues,
  getTextDeclarations,
  withMediaQueries,
} from '../../assets/styles/style-helpers';

import { sizes, variants } from '../../assets/styles/style-enums';

const { ALPHA, BRAVO, CHARLIE, DELTA, ECHO, FOXTROT } = sizes;
const { PRIMARY, SECONDARY, TERTIARY } = variants;

// ....................styles....................

function styles({
  as,
  bold,
  italic,
  strike,
  noMargin,
  spacingBottom,
  variant,
  size,
  theme,
}) {
  const baseStyles = {
    fontFamily: theme.fontStack.default,
    fontStyle: !italic ? 'normal' : 'italic',
    fontWeight: !bold ? theme.fontWeight.regular : theme.fontWeight.bold,
    listStylePosition: as === 'ul' || (as === 'li' && 'inside'),
    marginBottom: !noMargin ? getSpacingValues(spacingBottom, theme) : 0,
    textDecoration: !strike ? 'none' : 'line-through',
    wordWrap: 'break-word',
  };

  const colorVariants = {
    [PRIMARY]: {
      color: theme.colors.n200,
    },
    [SECONDARY]: {
      color: theme.colors.bodyColor,
    },
    [TERTIARY]: {
      color: theme.colors.n900,
    },
  };

  const colorConfig = colorVariants[variant];

  const mobileSizeMap = {
    [ALPHA]: ALPHA,
    [BRAVO]: ALPHA,
    [CHARLIE]: CHARLIE, // used (card text)
    [DELTA]: CHARLIE, // used (body text)
    [ECHO]: DELTA, // tested (CTA section text)
    [FOXTROT]: ECHO, // tested (hero text)
  };
  // array for facepaint
  const sizeConfig = [mobileSizeMap[size], mobileSizeMap[size], size];
  const sizeDeclarations = {
    ...getTextDeclarations(sizeConfig, theme),
  };

  const blockquoteStyles = as === 'blockquote' && {
    background: theme.colors.n800,
    borderLeft: `${theme.borderWidth.delta} solid ${theme.colors.p400}`,
    borderRadius: theme.borderRadius.alpha,
    margin: `${theme.spacings.golf} 0`,
    padding: theme.spacings.echo,
    paddingLeft: theme.spacings.golf,
    position: 'relative',

    '&::before': {
      content: '"\\201C"',
      color: theme.colors.p800,
      fontFamily: theme.fontStack.heading,
      fontSize: theme.iconSizes.juliett,
      position: 'absolute',
      left: '1rem',
      top: '-1rem',
    },

    '&::after': {
      content: '""',
    },
  };

  return withMediaQueries(theme)({
    ...baseStyles,
    ...colorConfig,
    ...sizeDeclarations,
    ...blockquoteStyles,
  });
}

// ....................component....................

const TextElement = styled.p(styles);
function Text({
  as,
  noMargin,
  variant,
  size,
  spacingBottom,
  bold,
  italic,
  strike,
  children,
}) {
  return (
    <TextElement
      as={as}
      noMargin={noMargin}
      variant={variant}
      size={size}
      spacingBottom={spacingBottom}
      bold={bold}
      italic={italic}
      strike={strike}
    >
      {children}
    </TextElement>
  );
}

// ....................propTypes....................

Text.propTypes = {
  noMargin: PropTypes.bool,
  variant: variantPropType,
  size: sizePropType,
  spacingBottom: sizePropType,
  bold: PropTypes.bool,
  italic: PropTypes.bool,
  strike: PropTypes.bool,
  children: childrenPropType,
};

Text.defaultProps = {
  noMargin: false,
  variant: SECONDARY,
  size: DELTA,
  spacingBottom: [CHARLIE, CHARLIE, DELTA],
  bold: false,
  italic: false,
  strike: false,
  children: null,
};

export default Text;
