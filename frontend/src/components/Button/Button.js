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
    textDecoration: 'none',
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
      '&:disabled': {
        backgroundColor: theme.colors.n800,
        borderColor: theme.colors.n800,
        color: theme.colors.n600,
      },
    },
    [SECONDARY]: {
      backgroundColor: theme.colors.bodyBg,
      borderColor: theme.colors.n700,
      color: theme.colors.n300,

      '&:hover,:focus': {
        backgroundColor: theme.colors.n600,
        borderColor: theme.colors.p500,
        color: theme.colors.n100,
      },
      '&:disabled': {
        backgroundColor: theme.colors.n800,
        borderColor: theme.colors.n700,
        color: theme.colors.n600,
      },
    },
    [TERTIARY]: {
      backgroundColor: 'inherit',
      borderColor: 'transparent',
      color: theme.colors.n100,

      '&:hover,:focus': {
        backgroundColor: theme.colors.n800,
        borderColor: theme.colors.n800,
        color: theme.colors.n000,
      },
      '&:disabled': {
        backgroundColor: theme.colors.n800,
        borderColor: theme.colors.n800,
        color: theme.colors.n600,
      },
    },
  };

  const buttonSizes = {
    [ALPHA]: {
      fontSize: theme.typography.text.alpha.fontSize,
      minWidth: theme.spacings.hotel,
      padding: `${theme.spacings.charlie} ${theme.spacings.echo}`,
    },
    [BRAVO]: {
      fontSize: theme.typography.text.bravo.fontSize,
      minWidth: theme.spacings.kilo,
      padding: `${theme.spacings.charlie} ${theme.spacings.echo}`,
    },
    [CHARLIE]: {
      fontSize: theme.typography.text.charlie.fontSize,
      minWidth: theme.spacings.lima,
      padding: `${theme.spacings.echo} ${theme.spacings.foxtrot}`,
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
    // if internalLink prop is provided, return Gatsby Link styled with buttonStyles
    <Link to={internalLink}>
      <ButtonElement
        buttonStyle={buttonStyle}
        buttonSize={buttonSize}
        {...otherProps}
      />
    </Link>
  ) : externalLink ? (
    // if externalLink prop is provided, return basic anchor tag styled with buttonStyles
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
  buttonStyle: PRIMARY,
  buttonSize: BRAVO,
  externalLink: null,
  internalLink: null,
};

export default withTheme(Button);
