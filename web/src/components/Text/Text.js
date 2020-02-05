import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

import { childrenPropType, sizePropType } from '../../utils/shared-prop-types';

import {
  getSpacingValues,
  getTextDeclarations,
  withMediaQueries,
} from '../../assets/styles/style-helpers';

import { sizes } from '../../assets/styles/style-enums';

const { ALPHA, BRAVO, CHARLIE, DELTA, ECHO, FOXTROT } = sizes;

// ....................styles....................

function styles({
  as,
  bold,
  italic,
  strike,
  noMargin,
  spacingBottom,
  size,
  theme,
}) {
  const baseStyles = {
    fontFamily: theme.fontStack.default,
    fontStyle: !italic ? 'normal' : 'italic',
    fontWeight: !bold ? theme.fontWeight.regular : theme.fontWeight.bold,
    marginBottom: !noMargin ? getSpacingValues(spacingBottom, theme) : 0,
    marginLeft: as === 'li' && theme.spacings.echo,
    textDecoration: !strike ? 'none' : 'line-through',
    wordWrap: 'break-word',
  };

  const mobileSizeMap = {
    [ALPHA]: ALPHA,
    [BRAVO]: ALPHA,
    [CHARLIE]: CHARLIE, // used (card text)
    [DELTA]: CHARLIE, // used (body text)
    [ECHO]: DELTA, // tested (CTA section text)
    [FOXTROT]: ECHO, // tested (hero text)
  };
  // array for facepaint
  const sizeConfig = [mobileSizeMap[size], mobileSizeMap[size], size];
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
  size: sizePropType,
  spacingBottom: sizePropType,
  bold: PropTypes.bool,
  italic: PropTypes.bool,
  strike: PropTypes.bool,
  children: childrenPropType,
};

Text.defaultProps = {
  as: 'p',
  noMargin: false,
  size: DELTA,
  spacingBottom: [CHARLIE, CHARLIE, DELTA],
  bold: false,
  italic: false,
  strike: false,
  children: null,
};

export default withTheme(Text);
