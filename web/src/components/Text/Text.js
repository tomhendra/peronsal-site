import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { childrenPropType } from '../../utils/shared-prop-types';

import {
  getSpacingValues,
  getTextDeclarations,
  withMediaQueries,
} from '../../assets/styles/style-helpers';

import { sizes } from '../../assets/styles/constants';

const { ALPHA, BRAVO, CHARLIE, DELTA, ECHO } = sizes;

// ....................styles....................

function styles({ as, bold, italic, strike, noMargin, size, theme }) {
  const baseStyles = {
    label: 'text',
    color: theme.colors.n400,
    fontFamily: theme.fontStack.default,
    fontWeight: theme.fontWeight.regular,
    marginBottom: !noMargin ? getSpacingValues(size, theme) : 0,
    wordWrap: 'break-word',
  };

  const mobileSizeMap = {
    [ALPHA]: ALPHA,
    [BRAVO]: BRAVO,
    [CHARLIE]: CHARLIE,
    [DELTA]: CHARLIE,
    [ECHO]: DELTA,
  };
  // array for facepaint
  const sizeConfig = [mobileSizeMap[size], size];

  const sizeStyles = {
    ...getTextDeclarations(sizeConfig, theme),
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
    background: theme.colors.n800,
    borderLeft: `${theme.borderWidth.delta} solid ${theme.colors.p400}`,
    borderRadius: theme.borderRadius.alpha,
    margin: `${theme.spacings.golf} 0`,
    padding: theme.spacings.echo,
    paddingLeft: theme.spacings.golf,
    position: 'relative',

    '&::before': {
      content: '"\\201C"',
      color: theme.colors.p800,
      fontFamily: theme.fontStack.heading,
      fontSize: theme.iconSizes.juliett,
      position: 'absolute',
      left: '1rem',
      top: '-1rem',
    },

    '&::after': {
      content: '""',
    },
  };

  return withMediaQueries(theme)({
    ...baseStyles,
    ...sizeStyles,
    ...boldStyles,
    ...italicStyles,
    ...strikeThroughStyles,
    ...listItemStyles,
    ...blockquoteStyles,
  });
}

// ....................component....................

const Text = styled.p(styles);

// ....................propTypes....................

Text.propTypes = {
  as: PropTypes.string,
  noMargin: PropTypes.bool,
  size: PropTypes.oneOfType([
    PropTypes.oneOf([ALPHA, BRAVO, CHARLIE, DELTA, ECHO]),
    PropTypes.arrayOf(PropTypes.oneOf([ALPHA, BRAVO, CHARLIE, DELTA, ECHO])),
  ]),
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
