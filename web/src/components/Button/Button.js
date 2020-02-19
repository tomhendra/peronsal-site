import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import { variantPropType } from '../../utils/shared-prop-types';

import { variants, sizes } from '../../assets/styles/style-enums';

const { PRIMARY, SECONDARY, TERTIARY } = variants;
const { ALPHA, BRAVO, CHARLIE } = sizes;

// ....................styles....................

function buttonStyles({ buttonStyle, buttonSize, inheritBg, theme }) {
  const baseStyles = {
    alignItems: 'center',
    borderRadius: theme.borderRadius.bravo,
    borderStyle: 'solid',
    borderWidth: theme.borderWidth.charlie,
    cursor: 'pointer',
    display: 'flex',
    fontFamily: theme.fontStack.heading,
    fontWeight: theme.fontWeight.medium,
    justifyContent: 'center',
    lineHeight: 1,
    minWidth: theme.spacings.juliett,
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',
    transition: `transform ${theme.transitions.default}`,

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
      borderColor: theme.colors.n500,
      color: theme.colors.n400,

      '&:hover,:focus': {
        backgroundColor: theme.colors.n800,
        color: theme.colors.n300,
      },
    },
  };

  const sizeVariants = {
    [ALPHA]: {
      height: '4.8rem',
      fontSize: theme.typography.text.delta.fontSize,
      padding: `0 ${theme.spacings.delta}`,
    },
    [BRAVO]: {
      height: '6rem',
      fontSize: theme.typography.text.echo.fontSize,
      padding: `0 ${theme.spacings.echo}`,
    },
    [CHARLIE]: {
      height: '7.2rem',
      fontSize: theme.typography.text.foxtrot.fontSize,
      padding: `0 ${theme.spacings.foxtrot}`,
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
  display: 'flex',
  textDecoration: 'none',

  '& :first-child': {
    flexGrow: 1,
  },
};

// ....................component....................

const InternalLink = styled(Link)(linkStyles);
const InternalLinkElement = styled.button(buttonStyles);
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
    // if internalLink prop is provided, return button wrapped with Gatsby Link.
    // it is not possible to use custom props on Gatsby (Reach) Link as React will
    // warn about unknown props on DOM nodes.
    // This is a known issue: https://github.com/gatsbyjs/gatsby/issues/11362
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
  buttonStyle: variantPropType,
  buttonSize: PropTypes.oneOf([ALPHA, BRAVO, CHARLIE]),
  externalLink: PropTypes.string,
  internalLink: PropTypes.string,
  inheritBg: PropTypes.bool,
};

Button.defaultProps = {
  buttonStyle: SECONDARY,
  buttonSize: BRAVO,
  externalLink: null,
  internalLink: null,
  inheritBg: false,
};

export default Button;
