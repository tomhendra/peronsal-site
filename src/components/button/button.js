import React from 'react';
import { Link } from 'gatsby';
import { buttonStyles } from './button-styles';

export const Button = ({
  buttonStyle,
  buttonSize,
  externalLink,
  internalLink,
  ...rest
}) => {
  // destructure props to pass into buttonStyles function (DRY)
  const styleProps = { buttonStyle, buttonSize, defaultProps };
  // if externalLink prop is provided, return basic anchor tag styled with buttonStyles
  if (externalLink) {
    return (
      // eslint error is a false positive:
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a
        href={externalLink}
        target="blank"
        css={buttonStyles({ ...styleProps })}
        {...rest}
      />
    );
    // if internalLink prop is provided, return Gatsby Link styled with buttonStyles
  } else if (internalLink) {
    return (
      <Link to={internalLink} css={buttonStyles({ ...styleProps })} {...rest} />
    );
  }
  // default return button if internalLink/externalLink props are not provided,
  // based on defaultProps being defined as null below.
  return <button css={buttonStyles({ ...styleProps })} {...rest} />;
};

// default props assigned to variable to pass into buttonStyles
// assignment happens concurrently, so change default props here for Button :)
const defaultProps = (Button.defaultProps = {
  buttonStyle: `primary`,
  buttonSize: `md`,
  externalLink: null,
  internalLink: null,
});
