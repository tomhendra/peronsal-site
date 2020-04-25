import React from 'react';

import {
  StyledButton,
  StyledSpan,
  StyledLink,
  StyledAnchor,
} from './components';

import { Variants, ButtonSizes, Children } from '../../utils/types';

type Props = {
  variant: Variants;
  size: ButtonSizes;
  internalLink?: string;
  externalLink?: string;
  inheritBg?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
  children: Children;
};

export const Button = (props: Props) => {
  const {
    variant = 'secondary',
    size = 'bravo',
    internalLink,
    externalLink,
    inheritBg,
    type = 'button',
    disabled,
    onClick,
    children,
  } = props;

  return internalLink ? (
    // if internalLink prop is provided, return Gatsby Link inside button.
    <StyledButton variant={variant} size={size} type="button">
      <StyledLink to={internalLink}>
        <StyledSpan variant={variant} size={size} inheritBg={inheritBg}>
          {children}
        </StyledSpan>
      </StyledLink>
    </StyledButton>
  ) : externalLink ? (
    // if externalLink prop is provided, return anchor element inside button.
    <StyledButton variant={variant} size={size} type="button">
      <StyledAnchor externalLink={externalLink}>
        <StyledSpan variant={variant} size={size} inheritBg={inheritBg}>
          {children}
        </StyledSpan>
      </StyledAnchor>
    </StyledButton>
  ) : (
    // default return button if internalLink/externalLink props not provided,
    // based on defaultProp values being defined as null.
    // ...rest required by Formik for event handlers
    <StyledButton
      variant={variant}
      size={size}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      <StyledSpan variant={variant} size={size} inheritBg={inheritBg}>
        {children}
      </StyledSpan>
    </StyledButton>
  );
};
