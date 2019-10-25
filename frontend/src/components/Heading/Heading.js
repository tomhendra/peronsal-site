import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { childrenPropType } from '../../utils/shared-prop-types';

import { sizes } from '../../assets/styles/constants';

const { ALPHA, BRAVO, CHARLIE, DELTA, ECHO, FOXTROT, GOLF } = sizes;

/**
 * `....................styles....................`
 */

const styles = ({ noMargin, size, theme }) => {
  const baseStyles = {
    label: 'heading',
    color: theme.colors.n000,
    fontFamily: theme.fontStack.heading,
    fontWeight: theme.fontWeight.bold,
    marginBottom: !noMargin ? theme.spacings.echo : 0,
  };

  const sizeStyles = {
    label: `heading--${size}`,
    fontSize: theme.typography.headings[size].fontSize,
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
  size: PropTypes.oneOf([ALPHA, BRAVO, CHARLIE, DELTA, ECHO, FOXTROT, GOLF]),
  children: childrenPropType,
};

Heading.defaultProps = {
  as: 'h2',
  noMargin: false,
  size: BRAVO,
  children: null,
};

export default Heading;
