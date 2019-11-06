import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { childrenPropType } from '../../utils/shared-prop-types';

import { sizes } from '../../assets/styles/constants';

const { ALPHA, BRAVO, CHARLIE, DELTA, ECHO } = sizes;

/**
 * `....................styles....................`
 */

const styles = ({ as, bold, italic, strike, noMargin, size, theme }) => {
  const baseStyles = {
    label: 'text',
    color: theme.colors.n400,
    fontFamily: theme.fontStack.default,
    fontWeight: theme.fontWeight.regular,
    marginBottom: !noMargin ? theme.typography.text[size].fontSize : 0,
  };

  const sizeStyles = {
    label: `text--${size}`,
    fontSize: theme.typography.text[size].fontSize,
    lineHeight: theme.typography.text[size].lineHeight,
  };

  const boldStyles = bold && {
    label: 'text--bold',
    fontWeight: theme.fontWeight.bold,
  };

  const italicStyles = italic && {
    label: 'text--italic',
    fontStyle: 'italic',
  };

  const strikeThroughStyles = strike && {
    label: 'text--strike-through',
    textDecoration: 'line-through',
  };

  const listItemStyles = as === 'li' && {
    label: 'text--list-item',
    marginLeft: theme.spacings.echo,
  };

  const blockquoteStyles = as === 'blockquote' && {
    label: 'text--blockquote',
    background: theme.colors.n900,
    borderLeft: `${theme.borderWidth.delta} solid ${theme.colors.p800}`,
    borderRadius: theme.borderRadius.alpha,
    margin: `${theme.spacings.golf} 0`,
    padding: theme.spacings.echo,
    paddingLeft: theme.spacings.golf,
    position: 'relative',

    '&::before': {
      content: '"\\201C"',
      color: theme.colors.p800,
      fontFamily: theme.fontStack.heading,
      fontSize: `calc(${theme.typography.text[size].fontSize} * 3)`,
      position: 'absolute',
      left: '1rem',
      top: '-1rem',
    },

    '&::after': {
      content: '""',
    },
  };

  return {
    ...baseStyles,
    ...sizeStyles,
    ...boldStyles,
    ...italicStyles,
    ...strikeThroughStyles,
    ...listItemStyles,
    ...blockquoteStyles,
  };
};

/**
 * `....................component....................`
 */

const Text = styled.p(styles);

/**
 * `....................propTypes....................`
 */

Text.propTypes = {
  as: PropTypes.string,
  noMargin: PropTypes.bool,
  size: PropTypes.oneOf([ALPHA, BRAVO, CHARLIE, DELTA, ECHO]),
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
