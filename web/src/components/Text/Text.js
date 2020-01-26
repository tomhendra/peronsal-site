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
    fontFamily: theme.fontStack.default,
    fontStyle: !italic ? 'normal' : 'italic',
    fontWeight: !bold ? theme.fontWeight.regular : theme.fontWeight.bold,
    marginBottom: !noMargin ? getSpacingValues(size, theme) : 0,
    marginLeft: as === 'li' && theme.spacings.echo,
    textDecoration: !strike ? 'none' : 'line-through',
    wordWrap: 'break-word',
  };

  const mobileSizeMap = {
    [ALPHA]: BRAVO,
    [BRAVO]: CHARLIE,
    [CHARLIE]: CHARLIE,
    [DELTA]: DELTA,
    [ECHO]: DELTA,
  };
  // array for facepaint
  const sizeConfig = [mobileSizeMap[size], size];
  const sizeDeclarations = {
    ...getTextDeclarations(sizeConfig, theme),
  };

  const blockquoteStyles = as === 'blockquote' && {
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
    ...sizeDeclarations,
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
