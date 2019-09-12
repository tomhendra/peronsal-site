import React from 'react';
import logoSVG from '../../assets/images/logo/tomhendra-logo-no-bg.svg';
import { logoStyles } from './logo-styles';

export const Logo = () => (
  <div css={logoStyles}>
    <img src={logoSVG} alt="Tom Hendra logo" />
  </div>
);
