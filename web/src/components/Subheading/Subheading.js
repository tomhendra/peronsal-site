import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import {
  childrenPropType,
  sizePropType,
  variantPropType,
} from '../../utils/shared-prop-types';

import {
  getSpacingValues,
  getSubheadingDeclarations,
  withMediaQueries,
} from '../../assets/styles/style-helpers';

import { sizes, variants } from '../../assets/styles/style-enums';

const { ALPHA, BRAVO, CHARLIE, DELTA, ECHO, FOXTROT, GOLF, HOTEL } = sizes;
const { PRIMARY, SECONDARY, TERTIARY } = variants;

// ....................styles....................

function styles({ noMargin, variant, size, spacingBottom, theme }) {
  const baseStyles = {
    fontFamily: theme.fontStack.subheading,
    fontWeight: theme.fontWeight.bold,
    marginBottom: !noMargin ? getSpacingValues(spacingBottom, theme) : 0,
  };

  const colorVariants = {
    [PRIMARY]: {
      color: theme.colors.n300,
    },
    [SECONDARY]: {
      color: theme.colors.n200,
    },
    [TERTIARY]: {
      color: theme.colors.n800,
    },
  };

  const colorConfig = colorVariants[variant];

  const mobileSizeMap = {
    [ALPHA]: ALPHA,
    [BRAVO]: BRAVO,
    [CHARLIE]: BRAVO,
    [DELTA]: CHARLIE,
    [ECHO]: DELTA,
    [FOXTROT]: ECHO,
    [GOLF]: FOXTROT,
    [HOTEL]: GOLF,
  };
  // array for facepaint
  const sizeConfig = [mobileSizeMap[size], size];
  const sizeDeclarations = { ...getSubheadingDeclarations(sizeConfig, theme) };

  return withMediaQueries(theme)({
    ...baseStyles,
    ...colorConfig,
    ...sizeDeclarations,
  });
}

// ....................component....................

const Heading = styled.h2(styles);

// ....................propTypes....................

Heading.propTypes = {
  as: PropTypes.oneOf(['h2', 'h3', 'h4', 'h5', 'h6']),
  noMargin: PropTypes.bool,
  variant: variantPropType,
  size: sizePropType,
  spacingBottom: sizePropType,
  children: childrenPropType,
};

Heading.defaultProps = {
  as: 'h2',
  noMargin: false,
  variant: SECONDARY,
  size: BRAVO,
  spacingBottom: [CHARLIE, DELTA],
  children: null,
};

export default Heading;
