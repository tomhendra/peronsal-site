import React from 'react';
import { useSiteMetadata } from '../../hooks/use-site-metadata';
import logoSVG from '../../assets/images/logo/tomhendra-logo.svg';
import { logoStyles } from './logo-styles';

export const Logo = () => {
  const { siteMetadata } = useSiteMetadata();

  return (
    <div css={logoStyles}>
      <img src={logoSVG} alt="Tom Hendra logo" />
      <p>{siteMetadata.title}</p>
    </div>
  );
};
