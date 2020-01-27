import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

import { variants, sizes } from '../../assets/styles/constants';

const { PRIMARY, SECONDARY, TERTIARY } = variants;
const { ALPHA, BRAVO, CHARLIE } = sizes;

// ....................styles....................

function buttonStyles({ buttonStyle, buttonSize, inheritBg, theme }) {
  const baseStyles = {
    borderRadius: theme.borderRadius.bravo,
    borderStyle: 'solid',
    borderWidth: theme.borderWidth.charlie,
    cursor: 'pointer',
    fontFamily: theme.fontStack.heading,
    fontWeight: theme.fontWeight.medium,
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',
    transition: `transform ${theme.transitions.default}`,
    width: '100%',

    '&:hover': {
      transform: 'scale(1.05)',
    },

    '&:active': {
      transform: 'scale(0.95)',
    },

    '&:disabled': {
      opacity: 0.4,
      pointerStandardts: 'none',
      userSelectable: 'none',
    },
  };

  const colorVariants = {
    [PRIMARY]: {
      backgroundColor: theme.colors.p400,
      borderColor: theme.colors.n300,
      color: theme.colors.n100,

      '&:hover,:focus': {
        backgroundColor: theme.colors.p300,
        color: theme.colors.n000,
      },
    },
    [SECONDARY]: {
      backgroundColor: !inheritBg ? theme.colors.white : 'inherit',
      borderColor: theme.colors.n300,
      color: theme.colors.n300,

      '&:hover,:focus': {
        backgroundColor: theme.colors.n600,
        color: theme.colors.n200,
      },
    },
    [TERTIARY]: {
      backgroundColor: !inheritBg ? theme.colors.white : 'inherit',
      borderColor: theme.colors.n600,
      color: theme.colors.n400,

      '&:hover,:focus': {
        backgroundColor: theme.colors.n800,
        color: theme.colors.n300,
      },
    },
  };

  const sizeVariants = {
    [ALPHA]: {
      fontSize: theme.typography.text.charlie.fontSize,
      padding: `${theme.spacings.bravo} ${theme.spacings.delta}`,
    },
    [BRAVO]: {
      fontSize: theme.typography.text.delta.fontSize,
      padding: `${theme.spacings.charlie} ${theme.spacings.echo}`,
    },
    [CHARLIE]: {
      fontSize: theme.typography.headings.alpha.fontSize,
      padding: `${theme.spacings.delta} ${theme.spacings.foxtrot}`,
    },
  };

  const colorConfig = colorVariants[buttonStyle];
  const sizeConfig = sizeVariants[buttonSize];

  return {
    ...baseStyles,
    ...colorConfig,
    ...sizeConfig,
  };
}

const linkStyles = {
  textDecoration: 'none',
  width: '100%',
};

// ....................component....................

const InternalLink = styled(Link)(linkStyles);
const InternalLinkElement = styled.div(buttonStyles);
const ExternalLinkElement = styled.a(buttonStyles);
const ButtonElement = styled.button(buttonStyles);

function Button({
  externalLink,
  internalLink,
  buttonStyle,
  buttonSize,
  inheritBg,
  ...rest
}) {
  return internalLink ? (
    // if internalLink prop is provided, wrap with Gatsby Link.
    <InternalLink to={internalLink}>
      <InternalLinkElement
        {...rest}
        buttonStyle={buttonStyle}
        buttonSize={buttonSize}
        inheritBg={inheritBg}
      />
    </InternalLink>
  ) : externalLink ? (
    // if externalLink prop is provided, return anchor tag.
    <ExternalLinkElement
      {...rest}
      target="blank"
      href={externalLink}
      buttonStyle={buttonStyle}
      buttonSize={buttonSize}
      inheritBg={inheritBg}
    />
  ) : (
    // default return button if internalLink/externalLink props not provided,
    // based on defaultProp values being defined as null.
    <ButtonElement
      {...rest}
      buttonStyle={buttonStyle}
      buttonSize={buttonSize}
      inheritBg={inheritBg}
    />
  );
}

// ....................propTypes....................

Button.protoTypes = {
  buttonStyle: PropTypes.oneOf([PRIMARY, SECONDARY, TERTIARY]),
  buttonSize: PropTypes.oneOf([ALPHA, BRAVO, CHARLIE]),
  externalLink: PropTypes.string,
  internalLink: PropTypes.string,
  inheritBg: PropTypes.bool,
};

Button.defaultProps = {
  buttonStyle: SECONDARY,
  buttonSize: CHARLIE,
  externalLink: null,
  internalLink: null,
  inheritBg: false,
};

export default withTheme(Button);
