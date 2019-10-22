import React from 'react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import PropTypes from 'prop-types';

import { childrenPropType } from '../../utils/shared-prop-types';

import { sizes } from '../../assets/styles/constants';

const { ALPHA, BRAVO, CHARLIE, DELTA } = sizes;

/**
 * `....................styles....................`
 */

const styles = ({ bold, italic, strike, noMargin, size, theme }) => {
  const baseStyles = {
    label: 'text',
    color: theme.colors.n200,
    fontFamily: theme.fontStack.default,
    fontWeight: theme.fontWeight.regular,
    marginBottom: !noMargin ? theme.spacings.bravo : 0,
  };

  const sizeStyles = {
    label: `text--${size}`,
    fontSize: theme.typography.text[size].fontSize,
    lineHeight: theme.typography.text[size].lineHeight,
  };

  const boldStyles = {
    label: bold && 'text--bold',
    fontWeight: bold && theme.fontWeight.bold,
  };

  const italicStyles = {
    label: italic && 'text--italic',
    fontStyle: italic && 'italic',
  };

  const strikeThroughStyles = {
    label: strike && 'text--strike-through',
    textDecoration: strike && 'line-through',
  };

  return {
    ...baseStyles,
    ...sizeStyles,
    ...boldStyles,
    ...italicStyles,
    ...strikeThroughStyles,
  };
};

/**
 * `....................component....................`
 */

const Text = ({ as, ...otherProps }) => {
  const TextElement = styled('p', {
    // Control props forwarded along to the HTML element
    // https://emotion.sh/docs/styled#customizing-prop-forwarding
    shouldForwardProp: prop => isPropValid(prop) && prop !== 'size',
  })`
    ${styles}
  `;
  return <TextElement as={as} {...otherProps} />;
};

Text.propTypes = {
  as: PropTypes.string,
  noMargin: PropTypes.bool,
  size: PropTypes.oneOf([ALPHA, BRAVO, CHARLIE, DELTA]),
  bold: PropTypes.bool,
  italic: PropTypes.bool,
  strike: PropTypes.bool,
  children: childrenPropType,
};

Text.defaultProps = {
  as: 'p',
  noMargin: false,
  size: CHARLIE,
  bold: false,
  italic: false,
  strike: false,
  children: null,
};

export default Text;
