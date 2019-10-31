import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

import { buttons, sizes } from '../../assets/styles/constants';

const { PRIMARY, SECONDARY, TERTIARY } = buttons;
const { ALPHA, BRAVO, CHARLIE } = sizes;

/**
 * `....................styles....................`
 */

const styles = ({ buttonStyle, buttonSize, theme }) => {
  const baseStyles = {
    borderRadius: theme.borderRadius.charlie,
    borderStyle: 'solid',
    borderWidth: theme.borderWidth.alpha,
    cursor: 'pointer',
    fontWeight: 'bold',
    letterSpacing: 0.8,
    textDecoration: 'none',

    '&:disabled': {
      opacity: 0.4,
      pointerEvents: 'none',
      userSelectable: 'none',
    },
  };

  const buttonStyles = {
    [PRIMARY]: {
      backgroundColor: theme.colors.p400,
      borderColor: theme.colors.p400,
      color: theme.colors.white,

      '&:hover,:focus': {
        backgroundColor: theme.colors.p300,
        borderColor: theme.colors.p300,
      },
    },
    [SECONDARY]: {
      backgroundColor: theme.colors.bodyBg,
      borderColor: theme.colors.n700,
      color: theme.colors.n100,

      '&:hover,:focus': {
        backgroundColor: theme.colors.n700,
        color: theme.colors.n000,
      },
    },
    [TERTIARY]: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      color: theme.colors.n100,

      '&:hover,:focus': {
        backgroundColor: theme.colors.n800,
        borderColor: theme.colors.n800,
        color: theme.colors.n000,
      },
    },
  };

  const buttonSizes = {
    [ALPHA]: {
      fontSize: theme.typography.text.bravo.fontSize,
      padding: `${theme.spacings.charlie} ${theme.spacings.echo}`,
    },
    [BRAVO]: {
      fontSize: theme.typography.text.charlie.fontSize,
      padding: `${theme.spacings.charlie} ${theme.spacings.golf}`,
    },
    [CHARLIE]: {
      fontSize: theme.typography.text.delta.fontSize,
      padding: `${theme.spacings.delta} ${theme.spacings.echo}`,
    },
  };

  const styleConfig = buttonStyles[buttonStyle];
  const sizeConfig = buttonSizes[buttonSize];

  return {
    ...baseStyles,
    ...styleConfig,
    ...sizeConfig,
  };
};

/**
 * `....................component....................`
 */

const ButtonElement = styled.button(styles);

const Button = ({
  externalLink,
  internalLink,
  buttonStyle,
  buttonSize,
  ...otherProps
}) =>
  internalLink ? (
    // if internalLink prop is provided, return ButtonElement wrapped with Gatsby Link
    <Link to={internalLink}>
      <ButtonElement
        buttonStyle={buttonStyle}
        buttonSize={buttonSize}
        {...otherProps}
      />
    </Link>
  ) : externalLink ? (
    // if externalLink prop is provided, return ButtonElement wrapped with anchor tag
    <a href={externalLink} target="blank">
      <ButtonElement
        buttonStyle={buttonStyle}
        buttonSize={buttonSize}
        {...otherProps}
      />
    </a>
  ) : (
    // default return button if internalLink/externalLink props are not provided,
    // based on defaultProp values being defined as null.
    <ButtonElement
      buttonStyle={buttonStyle}
      buttonSize={buttonSize}
      {...otherProps}
    />
  );

/**
 * `....................propTypes....................`
 */

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
