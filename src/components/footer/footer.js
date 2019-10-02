import React from 'react';

import { useSiteMetadata } from '../../hooks/use-site-metadata';
import { sizes } from '../../assets/styles';
import Social from '../social';

/**
 * `....................styles....................`
 */

const styles = {
  alignItems: 'flex-end',
  bottom: 0,
  display: 'flex',
  fontSize: '1rem',
  height: sizes.huge1,
  justifyContent: 'space-between',
  padding: sizes.large1,
  paddingTop: 0,
  position: 'fixed',
  textTransform: 'uppercase',
  width: '100vw',
};

/**
 * `....................component....................`
 */

const Footer = props => {
  const { siteMetadata } = useSiteMetadata();
  const date = new Date().getFullYear();

  return (
    <footer css={styles} {...props}>
      &copy; {siteMetadata.author} {date}
      <Social />
    </footer>
  );
};

export default Footer;
