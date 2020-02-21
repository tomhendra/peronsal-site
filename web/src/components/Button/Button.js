import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import { variantPropType } from '../../utils/shared-prop-types';

import { variants, sizes } from '../../assets/styles/style-enums';

const { PRIMARY, SECONDARY, TERTIARY } = variants;
const { ALPHA, BRAVO, CHARLIE } = sizes;

// ....................styles....................

function buttonStyles({ variant, size, inheritBg, theme }) {
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
    position: 'relative',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',
    transition: `transform ${theme.transitions.default}`,

    '&::after': {
      backgroundColor: 'transparent',
      borderRadius: theme.borderRadius.bravo,
      borderStyle: 'solid',
      borderWidth: theme.borderWidth.charlie,
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      height: '100%',
      width: '100%',
      transformOrigin: 'top right',
      transition: `transform ${theme.transitions.default}`,
      zIndex: theme.zIndex.behind,
    },

    '&:hover, &:focus': {
      '&::after': {
        transition: `transform ${theme.transitions.springDefault}`,
        transform: 'translate(-10px, 10px)',
      },
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

      '&:after': {
        borderColor: theme.colors.n300,
      },
    },
    [SECONDARY]: {
      backgroundColor: !inheritBg ? theme.colors.white : 'inherit',
      borderColor: theme.colors.n300,
      color: theme.colors.n300,

      '&:after': {
        borderColor: theme.colors.n300,
      },
    },
    [TERTIARY]: {
      backgroundColor: !inheritBg ? theme.colors.white : 'inherit',
      borderColor: theme.colors.n500,
      color: theme.colors.n400,

      '&:after': {
        borderColor: theme.colors.n500,
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

  const colorConfig = colorVariants[variant];
  const sizeConfig = sizeVariants[size];

  return {
    ...baseStyles,
    ...colorConfig,
    ...sizeConfig,
  };
}

const linkStyles = {
  display: 'flex',
  textDecoration: 'none',

  '& :first-of-type': {
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
  variant,
  size,
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
        variant={variant}
        size={size}
        inheritBg={inheritBg}
      />
    </InternalLink>
  ) : externalLink ? (
    // if externalLink prop is provided, return anchor tag.
    <ExternalLinkElement
      {...rest}
      target="blank"
      rel="noopener"
      href={externalLink}
      variant={variant}
      size={size}
      inheritBg={inheritBg}
    />
  ) : (
    // default return button if internalLink/externalLink props not provided,
    // based on defaultProp values being defined as null.
    <ButtonElement
      {...rest}
      variant={variant}
      size={size}
      inheritBg={inheritBg}
    />
  );
}

// ....................propTypes....................

Button.protoTypes = {
  variant: variantPropType,
  size: PropTypes.oneOf([ALPHA, BRAVO, CHARLIE]),
  externalLink: PropTypes.string,
  internalLink: PropTypes.string,
  inheritBg: PropTypes.bool,
};

Button.defaultProps = {
  variant: SECONDARY,
  size: BRAVO,
  externalLink: null,
  internalLink: null,
  inheritBg: false,
};

export default Button;
