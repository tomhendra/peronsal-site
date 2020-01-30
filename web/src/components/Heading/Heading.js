import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { childrenPropType, sizePropType } from '../../utils/shared-prop-types';

import {
  getSpacingValues,
  getHeadingDeclarations,
  withMediaQueries,
} from '../../assets/styles/style-helpers';

import { sizes } from '../../assets/styles/constants';

const { ALPHA, BRAVO, CHARLIE, DELTA, ECHO, FOXTROT, GOLF, HOTEL } = sizes;

// ....................styles....................

function styles({ noMargin, size, spacingBottom, theme }) {
  const baseStyles = {
    fontFamily: theme.fontStack.heading,
    fontWeight: theme.fontWeight.medium,
    marginBottom: !noMargin ? getSpacingValues(spacingBottom, theme) : 0,
  };

  const mobileSizeMap = {
    [ALPHA]: ALPHA,
    [BRAVO]: ALPHA,
    [CHARLIE]: BRAVO,
    [DELTA]: CHARLIE, // tested (card heading)
    [ECHO]: DELTA, // tested (section heading)
    [FOXTROT]: ECHO, // tested (hero heading)
    [GOLF]: FOXTROT,
    [HOTEL]: GOLF,
  };
  // array for facepaint
  const sizeConfig = [mobileSizeMap[size], size];
  const sizeDeclarations = { ...getHeadingDeclarations(sizeConfig, theme) };

  return withMediaQueries(theme)({
    ...baseStyles,
    ...sizeDeclarations,
  });
}

// ....................component....................

const Heading = styled.h2(styles);

// ....................propTypes....................

Heading.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  noMargin: PropTypes.bool,
  size: PropTypes.oneOf([
    ALPHA,
    BRAVO,
    CHARLIE,
    DELTA,
    ECHO,
    FOXTROT,
    GOLF,
    HOTEL,
  ]),
  spacingBottom: sizePropType,
  children: childrenPropType,
};

Heading.defaultProps = {
  as: 'h2',
  noMargin: false,
  size: BRAVO,
  spacingBottom: [CHARLIE, DELTA],
  children: null,
};

export default Heading;
