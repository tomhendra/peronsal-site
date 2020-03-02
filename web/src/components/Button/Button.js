import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import {
  variantPropType,
  childrenPropType,
} from '../../utils/shared-prop-types';

import { variants, sizes } from '../../assets/styles/style-enums';

const { PRIMARY, SECONDARY, TERTIARY } = variants;
const { ALPHA, BRAVO, CHARLIE } = sizes;

// ....................styles....................

function buttonStyles({ variant, size, theme }) {
  const baseStyles = {
    border: 0,
    cursor: 'pointer',
    position: 'relative',
    textDecoration: 'none',

    '&::after': {
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
        transform: 'translate(-7px, 7px)',
      },
    },

    '&:active': {
      '&::after': {
        transition: `transform ${theme.transitions.fast}`,
        transform: 'translate(0px, 0px)',
      },
    },

    '&:disabled': {
      opacity: 0.5,
      pointerStandardts: 'none',
      userSelectable: 'none',
      '&::after': {
        transition: `transform ${theme.transitions.default}`,
        transform: 'translate(0px, 0px)',
      },
    },
  };

  const colorVariants = {
    [PRIMARY]: {
      '&:after': {
        borderColor: theme.colors.n300,
      },
    },
    [SECONDARY]: {
      '&:after': {
        borderColor: theme.colors.n300,
      },
    },
    [TERTIARY]: {
      '&:after': {
        borderColor: theme.colors.n500,
      },
    },
  };

  const sizeVariants = {
    [ALPHA]: {
      height: '4.8rem',
    },
    [BRAVO]: {
      height: '6rem',
    },
    [CHARLIE]: {
      height: '7.2rem',
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

function innerButtonStyles({ variant, size, inheritBg, theme }) {
  const baseStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.borderRadius.bravo,
    borderStyle: 'solid',
    borderWidth: theme.borderWidth.charlie,
    width: '100%',
    height: '100%',
    fontFamily: theme.fontStack.heading,
    fontWeight: theme.fontWeight.medium,
    lineHeight: 1,
    position: 'relative',
    textDecoration: 'none',
    textTransform: 'uppercase',
  };

  const colorVariants = {
    [PRIMARY]: {
      backgroundColor: theme.colors.p400,
      borderColor: theme.colors.n300,
      color: theme.colors.n100,
    },
    [SECONDARY]: {
      backgroundColor: !inheritBg ? theme.colors.white : 'inherit',
      borderColor: theme.colors.n300,
      color: theme.colors.n300,
    },
    [TERTIARY]: {
      backgroundColor: !inheritBg ? theme.colors.white : 'inherit',
      borderColor: theme.colors.n500,
      color: theme.colors.n400,
    },
  };

  const sizeVariants = {
    [ALPHA]: {
      minWidth: theme.spacings.india,
      fontSize: theme.typography.text.delta.fontSize,
      padding: `0 ${theme.spacings.delta}`,
    },
    [BRAVO]: {
      minWidth: theme.spacings.juliett,
      fontSize: theme.typography.text.echo.fontSize,
      padding: `0 ${theme.spacings.echo}`,
    },
    [CHARLIE]: {
      minWidth: theme.spacings.kilo,
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
  textDecoration: 'none',
};

// ....................component....................

const ButtonElement = styled.button(buttonStyles);
const InnerButton = styled.span(innerButtonStyles);
const InternalLink = styled(Link)(linkStyles);

function Button({
  externalLink,
  internalLink,
  variant,
  size,
  inheritBg,
  children,
  ...rest
}) {
  return internalLink ? (
    // if internalLink prop is provided, return button wrapped with Gatsby Link.
    // it is not possible to use custom props on Gatsby (Reach) Link as React will
    // warn about unknown props on DOM nodes.
    // This is a known issue: https://github.com/gatsbyjs/gatsby/issues/11362
    <ButtonElement variant={variant} size={size}>
      <InternalLink to={internalLink}>
        <InnerButton variant={variant} size={size} inheritBg={inheritBg}>
          {children}
        </InnerButton>
      </InternalLink>
    </ButtonElement>
  ) : externalLink ? (
    // if externalLink prop is provided, return anchor tag.
    <ButtonElement
      as="a"
      target="blank"
      rel="noopener"
      href={externalLink}
      variant={variant}
      size={size}
    >
      <InnerButton variant={variant} size={size} inheritBg={inheritBg}>
        {children}
      </InnerButton>
    </ButtonElement>
  ) : (
    // default return button if internalLink/externalLink props not provided,
    // based on defaultProp values being defined as null.
    <ButtonElement variant={variant} size={size} {...rest}>
      <InnerButton variant={variant} size={size} inheritBg={inheritBg}>
        {children}
      </InnerButton>
    </ButtonElement>
  );
}

// ....................propTypes....................

Button.protoTypes = {
  children: childrenPropType,
  variant: variantPropType,
  size: PropTypes.oneOf([ALPHA, BRAVO, CHARLIE]),
  externalLink: PropTypes.string,
  internalLink: PropTypes.string,
  inheritBg: PropTypes.bool,
};

Button.defaultProps = {
  children: null,
  variant: SECONDARY,
  size: BRAVO,
  externalLink: null,
  internalLink: null,
  inheritBg: false,
};

export default Button;
