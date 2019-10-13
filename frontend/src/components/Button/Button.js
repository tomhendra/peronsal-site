import React from 'react';
import { Link } from 'gatsby';
import { withTheme } from 'emotion-theming';

import { buttons, sizes } from '../../assets/styles/constants';

const { PRIMARY, SECONDARY, TERTIARY } = buttons;
const { ALPHA, BRAVO, CHARLIE } = sizes;

/**
 * `....................styles....................`
 */

const styles = ({ buttonStyle, buttonSize, theme }) => {
  // Set values for button variant styles here
  const buttonStyles = {
    [PRIMARY]: {
      background: theme.colors.p400,
      border: theme.colors.p400,
      hover: theme.colors.p300,
    },
    [SECONDARY]: {
      background: theme.colors.n200,
      border: theme.colors.n800,
      hover: theme.colors.n100,
    },
    [TERTIARY]: {
      background: 'inherit',
      border: 'transparent',
      hover: theme.colors.n300,
    },
  };

  // Set values for button sizes here
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
  // config variables declared & assigned buttonStyle / buttonSize / defaultProps
  // values from Button component calling buttonStyles with styleProps
  const styleConfig = buttonStyles[buttonStyle];
  const sizeConfig = buttonSizes[buttonSize];

  return {
    ...sizeConfig,
    backgroundColor: styleConfig.background,
    border: `1px solid ${styleConfig.border}`,
    borderRadius: '4px',
    color: theme.colors.n900,
    fontWeight: 'bold',
    minWidth: theme.spacings.juliett,
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
  buttonType,
  externalLink,
  internalLink,
  theme,
  ...props
}) =>
  internalLink ? (
    // if internalLink prop is provided, return Gatsby Link styled with buttonStyles
    <Link
      to={internalLink}
      css={styles({ buttonSize, buttonStyle, theme })}
      {...props}
    />
  ) : externalLink ? (
    // if externalLink prop is provided, return basic anchor tag styled with buttonStyles
    // (eslint error is a false positive...)
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a
      href={externalLink}
      target="blank"
      css={styles({ buttonSize, buttonStyle, theme })}
      {...props}
    />
  ) : (
    // default return button if internalLink/externalLink props are not provided,
    // based on defaultProp values being defined as null below.
    // eslint-disable-next-line react/button-has-type
    <button css={styles({ buttonSize, buttonStyle, theme })} {...props} />
  );

Button.defaultProps = {
  buttonStyle: 'primary',
  buttonSize: 'bravo',
  externalLink: null,
  internalLink: null,
};

export default withTheme(Button);
