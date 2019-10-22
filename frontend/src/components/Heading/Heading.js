import React from 'react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import PropTypes from 'prop-types';

import { childrenPropType } from '../../utils/shared-prop-types';

import { sizes } from '../../assets/styles/constants';

const { ALPHA, BRAVO, CHARLIE, DELTA, ECHO, FOXTROT, GOLF } = sizes;

/**
 * `....................styles....................`
 */

const styles = ({ noMargin, size, theme }) => {
  return {
    label: `Heading--${size}`,
    color: theme.colors.n000,
    fontFamily: theme.fontStack.heading,
    fontSize: theme.typography.headings[size].fontSize,
    fontWeight: theme.fontWeight.bold,
    lineHeight: theme.typography.headings[size].lineHeight,
    marginBottom: !noMargin ? theme.spacings.echo : 0,
  };
};

/**
 * `....................component....................`
 */

const HeadingElement = styled('span', {
  // Control props forwarded along to the HTML element
  // https://emotion.sh/docs/styled#customizing-prop-forwarding
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'size',
})`
  ${styles}
`;

const Heading = ({ as, ...otherProps }) => (
  <HeadingElement as={as} {...otherProps} />
);

Heading.propTypes = {
  children: childrenPropType,
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  noMargin: PropTypes.bool,
  size: PropTypes.oneOf([ALPHA, BRAVO, CHARLIE, DELTA, ECHO, FOXTROT, GOLF]),
};

Heading.defaultProps = {
  children: null,
  as: 'h2',
  noMargin: false,
  size: BRAVO,
};

export default Heading;
