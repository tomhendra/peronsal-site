import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { childrenPropType } from '../../utils/shared-prop-types';

import { sizes } from '../../assets/styles/constants';

const { ALPHA, BRAVO, CHARLIE, DELTA, ECHO, FOXTROT, GOLF, HOTEL } = sizes;

/**
 * `....................styles....................`
 */

const styles = ({ noMargin, size, sub, theme }) => {
  const baseStyles = {
    label: 'heading',
    color: !sub ? theme.colors.n000 : theme.colors.n300,
    fontFamily: !sub ? theme.fontStack.heading : theme.fontStack.default,
    fontWeight: !sub ? theme.fontWeight.bold : theme.fontWeight.regular,
    letterSpacing: 0.7,
    marginBottom: !noMargin ? theme.spacings.delta : 0,
  };

  const sizeStyles = {
    label: `heading--${size}`,
    fontSize: !sub
      ? theme.typography.headings[size].fontSize
      : theme.typography.subHeadings[size].fontSize,
    lineHeight: theme.typography.headings[size].lineHeight,
  };

  return {
    ...baseStyles,
    ...sizeStyles,
  };
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
  sub: PropTypes.bool,
  children: childrenPropType,
};

Heading.defaultProps = {
  as: 'h2',
  noMargin: false,
  size: BRAVO,
  sub: false,
  children: null,
};

export default Heading;
