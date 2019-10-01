import React from 'react';
import { Link } from 'gatsby';

import { colors, fontsizes, sizes } from '../../assets/styles';

/**
 * `....................constants....................`
 */

// Set values for button variant styles here
const primary = 'primary';
const secondary = 'secondary';
const tertiary = 'tertiary';

const buttonStyles = {
  [primary]: {
    background: colors.primary.dark5,
    border: colors.primary.dark5,
    hover: colors.primary.dark4,
  },
  [secondary]: {
    background: colors.neutral.dark3,
    border: colors.neutral.light4,
    hover: colors.neutral.dark2,
  },
  [tertiary]: {
    background: 'inherit',
    border: 'transparent',
    hover: colors.neutral.dark4,
  },
};

// Set values for button sizes here
const small = 'small';
const medium = 'medium';
const large = 'large';

const buttonSizes = {
  [small]: {
    fontSize: fontsizes.base,
    minWidth: sizes.large1,
    padding: `${sizes.small3} ${sizes.medium1}`,
  },
  [medium]: {
    fontSize: fontsizes.medium2,
    minWidth: sizes.huge1,
    padding: `${sizes.small3} ${sizes.medium1}`,
  },
  [large]: {
    fontSize: fontsizes.large1,
    minWidth: sizes.huge2,
    padding: `${sizes.medium1} ${sizes.medium2}`,
  },
};

/**
 * `....................styles....................`
 */

const styles = ({ buttonStyle, buttonSize }) => {
  // config variables declared & assigned buttonStyle / buttonSize / defaultProps
  // values from Button component calling buttonStyles with styleProps
  const styleConfig =
    buttonStyles[buttonStyle] || buttonStyles[Button.defaultProps.buttonStyle];

  const sizeConfig =
    buttonSizes[buttonSize] || buttonSizes[Button.defaultProps.buttonSize];

  return {
    ...sizeConfig,
    backgroundColor: styleConfig.background,
    border: `1px solid ${styleConfig.border}`,
    borderRadius: '4px',
    color: colors.neutral.light5,
    fontWeight: 'bold',
    minWidth: sizes.large3,
    textDecoration: 'none',
    textTransform: 'uppercase',
    cursor: 'pointer',
    '&:hover,:disabled,:focus': {
      backgroundColor: styleConfig.hover,
    },
  };
};

/**
 * `....................component....................`
 */

const Button = ({
  buttonStyle,
  buttonSize,
  externalLink,
  internalLink,
  ...rest
}) => {
  return internalLink ? (
    // if internalLink prop is provided, return Gatsby Link styled with buttonStyles
    <Link
      to={internalLink}
      css={styles({ buttonSize, buttonStyle })}
      {...rest}
    />
  ) : externalLink ? (
    // if externalLink prop is provided, return basic anchor tag styled with buttonStyles
    // (eslint error is a false positive...)
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a
      href={externalLink}
      target="blank"
      css={styles({ buttonSize, buttonStyle })}
      {...rest}
    />
  ) : (
    // default return button if internalLink/externalLink props are not provided,
    // based on defaultProp values being defined as null below.
    <button css={styles({ buttonSize, buttonStyle })} {...rest} />
  );
};

Button.defaultProps = {
  buttonStyle: 'primary',
  buttonSize: 'md',
  externalLink: null,
  internalLink: null,
};

export default Button;
