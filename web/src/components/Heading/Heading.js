import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import {
  childrenPropType,
  spacingPropType,
} from '../../utils/shared-prop-types';

import {
  getSpacingValues,
  getHeadingDeclarations,
  getSubheadingDeclarations,
  withMediaQueries,
} from '../../assets/styles/style-helpers';

import { sizes } from '../../assets/styles/constants';

const { ALPHA, BRAVO, CHARLIE, DELTA, ECHO, FOXTROT, GOLF, HOTEL } = sizes;

/**
 * `....................styles....................`
 */

const styles = ({ noMargin, size, spacingBottom, sub, theme }) => {
  const baseStyles = {
    color: !sub ? theme.colors.n000 : theme.colors.n300,
    fontFamily: theme.fontStack.heading,
    fontWeight: !sub ? theme.fontWeight.bold : theme.fontWeight.regular,
    letterSpacing: 0.7,
    marginBottom: !noMargin ? getSpacingValues(spacingBottom, theme) : 0,
  };

  const mobileSizeMap = {
    [ALPHA]: ALPHA,
    [BRAVO]: ALPHA,
    [CHARLIE]: BRAVO,
    [DELTA]: CHARLIE,
    [ECHO]: DELTA,
    [FOXTROT]: ECHO,
    [GOLF]: FOXTROT,
    [HOTEL]: GOLF,
  };
  // array for facepaint
  const sizeConfig = [mobileSizeMap[size], size];
  const sizeDeclarations = !sub
    ? getHeadingDeclarations(sizeConfig, theme)
    : getSubheadingDeclarations(sizeConfig, theme);

  const sizeStyles = {
    ...sizeDeclarations,
  };

  return withMediaQueries(theme)({
    ...baseStyles,
    ...sizeStyles,
  });
};

/**
 * `....................component....................`
 */

const Heading = styled.h2(styles);

/**
 * `....................propTypes....................`
 */

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
  spacingBottom: spacingPropType,
  sub: PropTypes.bool,
  children: childrenPropType,
};

Heading.defaultProps = {
  as: 'h2',
  noMargin: false,
  size: BRAVO,
  spacingBottom: [CHARLIE, DELTA],
  sub: false,
  children: null,
};

export default Heading;
