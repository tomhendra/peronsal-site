import React from 'react';
import useSiteMetadata from '../../hooks/use-site-metadata';
import footerStyles from './footer-styles';

const Footer = () => {
  const { title } = useSiteMetadata();
  return (
    <footer css={footerStyles}>
      <p>{title}</p>
      <p>Social links</p>
    </footer>
  );
};

export default Footer;
