import React, { ReactNode, FC } from 'react';

import { Variants, Sizes } from '../../utils/enums';

import {
  ButtonElement,
  InnerButton,
  InternalLink,
  ExternalLink,
} from './components';

interface Props {
  variant: Variants;
  size: Sizes.Alpha | Sizes.Bravo | Sizes.Charlie;
  internalLink?: string;
  externalLink?: string;
  inheritBg?: boolean;
  children: ReactNode;
}

export const Button: FC<Props> = ({
  variant,
  size,
  internalLink,
  externalLink,
  inheritBg,
  children,
  ...rest
}) =>
  internalLink ? (
    // if internalLink prop is provided, return Gatsby Link inside button.
    <ButtonElement variant={variant} size={size}>
      <InternalLink to={internalLink}>
        <InnerButton variant={variant} size={size} inheritBg={inheritBg}>
          {children}
        </InnerButton>
      </InternalLink>
    </ButtonElement>
  ) : externalLink ? (
    // if externalLink prop is provided, return anchor element inside button.
    <ButtonElement variant={variant} size={size}>
      <ExternalLink target="blank" rel="noopener" href={externalLink}>
        <InnerButton variant={variant} size={size} inheritBg={inheritBg}>
          {children}
        </InnerButton>
      </ExternalLink>
    </ButtonElement>
  ) : (
    // default return button if internalLink/externalLink props not provided,
    // based on defaultProp values being defined as null.
    // ...rest required by Formik for event handlers
    <ButtonElement variant={variant} size={size} {...rest}>
      <InnerButton variant={variant} size={size} inheritBg={inheritBg}>
        {children}
      </InnerButton>
    </ButtonElement>
  );

Button.defaultProps = {
  size: Sizes.Bravo,
  variant: Variants.Secondary,
};
