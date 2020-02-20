import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import {
  childrenPropType,
  sizePropType,
  variantPropType,
} from '../../utils/shared-prop-types';

import {
  getSpacingValues,
  getHeadingDeclarations,
  withMediaQueries,
} from '../../assets/styles/style-helpers';

import { sizes, variants } from '../../assets/styles/style-enums';

const { ALPHA, BRAVO, CHARLIE, DELTA, ECHO, FOXTROT, GOLF, HOTEL } = sizes;
const { PRIMARY, SECONDARY, TERTIARY } = variants;

// ....................styles....................

function styles({ noMargin, variant, size, spacingBottom, theme }) {
  const baseStyles = {
    fontFamily: theme.fontStack.heading,
    fontWeight: theme.fontWeight.medium,
    marginBottom: !noMargin ? getSpacingValues(spacingBottom, theme) : 0,
  };

  const colorVariants = {
    [PRIMARY]: {
      color: theme.colors.n400,
    },
    [SECONDARY]: {
      color: theme.colors.n300,
    },
    [TERTIARY]: {
      color: theme.colors.n700,
    },
  };

  const colorConfig = colorVariants[variant];

  const mobileSizeMap = {
    [ALPHA]: ALPHA,
    [BRAVO]: ALPHA,
    [CHARLIE]: CHARLIE, // tested (ProjectPreview heading)
    [DELTA]: CHARLIE, // tested (card heading)
    [ECHO]: DELTA, // tested (section heading)
    [FOXTROT]: ECHO, // tested (hero heading)
    [GOLF]: FOXTROT,
    [HOTEL]: GOLF,
  };
  // array for facepaint
  const sizeConfig = [mobileSizeMap[size], mobileSizeMap[size], size];
  const sizeDeclarations = { ...getHeadingDeclarations(sizeConfig, theme) };

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
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
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
  spacingBottom: [CHARLIE, CHARLIE, DELTA],
  children: null,
};

export default Heading;
