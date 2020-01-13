import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

import { buttons, sizes } from '../../assets/styles/constants';

const { PRIMARY, SECONDARY, TERTIARY } = buttons;
const { ALPHA, BRAVO, CHARLIE } = sizes;

// ....................styles....................

const buttonStyles = ({ buttonStyle, buttonSize, theme }) => {
  const baseStyles = {
    borderRadius: theme.borderRadius.charlie,
    borderStyle: 'solid',
    borderWidth: theme.borderWidth.alpha,
    cursor: 'pointer',
    fontWeight: 'bold',
    letterSpacing: 0.8,
    textAlign: 'center',
    textDecoration: 'none',
    transition: 'transform .15s ease-in-out',
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
      borderColor: theme.colors.p400,
      color: theme.colors.n000,

      '&:hover,:focus': {
        backgroundColor: theme.colors.p300,
        borderColor: theme.colors.p300,
      },
    },
    [SECONDARY]: {
      backgroundColor: theme.colors.bodyBg,
      borderColor: theme.colors.n500,
      color: theme.colors.n200,

      '&:hover,:focus': {
        backgroundColor: theme.colors.n500,
        color: theme.colors.n100,
      },
    },
    [TERTIARY]: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      color: theme.colors.n200,

      '&:hover,:focus': {
        backgroundColor: theme.colors.n500,
        borderColor: theme.colors.n500,
        color: theme.colors.n100,
      },
    },
  };

  const sizeVariants = {
    [ALPHA]: {
      fontSize: theme.typography.text.bravo.fontSize,
      padding: `${theme.spacings.charlie} ${theme.spacings.delta}`,
    },
    [BRAVO]: {
      fontSize: theme.typography.text.charlie.fontSize,
      padding: `${theme.spacings.charlie} ${theme.spacings.delta}`,
    },
    [CHARLIE]: {
      fontSize: theme.typography.text.delta.fontSize,
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
};

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
  ...rest
}) {
  return internalLink ? (
    // if internalLink prop is provided, return ButtonElement wrapped with Gatsby Link.
    <InternalLink to={internalLink}>
      <InternalLinkElement
        {...rest}
        buttonStyle={buttonStyle}
        buttonSize={buttonSize}
      />
    </InternalLink>
  ) : externalLink ? (
    // if externalLink prop is provided, return anchor tag
    <ExternalLinkElement
      {...rest}
      target="blank"
      href={externalLink}
      buttonStyle={buttonStyle}
      buttonSize={buttonSize}
    />
  ) : (
    // default return ButtonElement if internalLink/externalLink props not provided,
    // based on defaultProp values being defined as null.
    <ButtonElement
      {...rest}
      buttonStyle={buttonStyle}
      buttonSize={buttonSize}
    />
  );
}

// ....................propTypes....................

Button.protoTypes = {
  buttonStyle: PropTypes.oneOf([PRIMARY, SECONDARY, TERTIARY]),
  buttonSize: PropTypes.oneOf([ALPHA, BRAVO, CHARLIE]),
  externalLink: PropTypes.string,
  internalLink: PropTypes.string,
};

Button.defaultProps = {
  buttonStyle: SECONDARY,
  buttonSize: BRAVO,
  externalLink: null,
  internalLink: null,
};

export default withTheme(Button);
