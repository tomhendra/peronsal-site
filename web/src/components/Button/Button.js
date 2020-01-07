import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

import { childrenPropType } from '../../utils/shared-prop-types';

import { buttons, sizes } from '../../assets/styles/constants';

const { PRIMARY, SECONDARY, TERTIARY } = buttons;
const { ALPHA, BRAVO, CHARLIE } = sizes;

/**
 * `....................styles....................`
 */

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
    width: '100%',

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
  color: 'inherit',
  textDecoration: 'none',

  '&:visited,&:hover': {
    color: 'inherit',
  },
};

// ....................animations....................

const animationVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  pressed: { scale: 0.95 },
};

// ....................component....................

const ButtonElement = styled(motion.button)(buttonStyles);
const InternalLinkElement = styled(Link)(linkStyles);

const Button = ({
  externalLink,
  internalLink,
  buttonStyle,
  buttonSize,
  children,
  ...rest
}) => {
  return internalLink ? (
    // if internalLink prop is provided, return Gatsby Link wrapped with ButtonElement
    <ButtonElement
      buttonStyle={buttonStyle}
      buttonSize={buttonSize}
      variants={animationVariants}
      initial="rest"
      whileHover="hover"
      whileTap="pressed"
      {...rest}
    >
      <InternalLinkElement to={internalLink}>{children}</InternalLinkElement>
    </ButtonElement>
  ) : externalLink ? (
    // if externalLink prop is provided, return ButtonElement 'as' anchor tag
    <ButtonElement
      as="a"
      target="blank"
      href={externalLink}
      buttonStyle={buttonStyle}
      buttonSize={buttonSize}
      variants={animationVariants}
      initial="rest"
      whileHover="hover"
      whileTap="pressed"
      {...rest}
    >
      {children}
    </ButtonElement>
  ) : (
    // default return button if internalLink/externalLink props are not provided,
    // based on defaultProp values being defined as null.
    <ButtonElement
      buttonStyle={buttonStyle}
      buttonSize={buttonSize}
      variants={animationVariants}
      initial="rest"
      whileHover="hover"
      whileTap="pressed"
      {...rest}
    >
      {children}
    </ButtonElement>
  );
};

/**
 * `....................propTypes....................`
 */

Button.protoTypes = {
  buttonStyle: PropTypes.oneOf([PRIMARY, SECONDARY, TERTIARY]),
  buttonSize: PropTypes.oneOf([ALPHA, BRAVO, CHARLIE]),
  externalLink: PropTypes.string,
  internalLink: PropTypes.string,
  children: childrenPropType,
};

Button.defaultProps = {
  buttonStyle: SECONDARY,
  buttonSize: BRAVO,
  externalLink: null,
  internalLink: null,
  children: null,
};

export default withTheme(Button);
