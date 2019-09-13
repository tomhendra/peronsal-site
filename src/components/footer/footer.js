import React from 'react';
import { useSiteMetadata } from '../../hooks/use-site-metadata';
import { Social } from '../social';
import { footerStyles } from './footer-styles';

export const Footer = () => {
  const { siteMetadata } = useSiteMetadata();
  const date = new Date().getFullYear();

  return (
    <footer css={footerStyles}>
      <p>
        &copy; {siteMetadata.title} {date}
      </p>
      <Social />
    </footer>
  );
};
