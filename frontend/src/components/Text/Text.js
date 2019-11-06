import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { childrenPropType } from '../../utils/shared-prop-types';

import { sizes } from '../../assets/styles/constants';

const { ALPHA, BRAVO, CHARLIE, DELTA } = sizes;

/**
 * `....................styles....................`
 */

const styles = ({ as, bold, italic, strike, noMargin, size, theme }) => {
  const baseStyles = {
    label: 'text',
    color: theme.colors.n400,
    fontFamily: theme.fontStack.default,
    fontWeight: theme.fontWeight.regular,
    marginBottom: !noMargin ? theme.spacings.charlie : 0,
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

  const listItemStyles = {
    label: as === 'li' && 'text--list-item',
    marginLeft: as === 'li' && theme.spacings.echo,
  };

  return {
    ...baseStyles,
    ...sizeStyles,
    ...boldStyles,
    ...italicStyles,
    ...strikeThroughStyles,
    ...listItemStyles,
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
