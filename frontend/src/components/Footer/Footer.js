import React from 'react';
import { withTheme } from 'emotion-theming';

import useSiteMetadata from '../../hooks/useSiteMetadata';
<<<<<<< HEAD:frontend/src/components/Footer/Footer.js
=======
import { sizes } from '../../assets/styles';
>>>>>>> 46f85bc230a9102059d37b3e6963ca895cd6a9b6:src/components/footer/footer.js
import Social from '../Social';

/**
 * `....................styles....................`
 */

const styles = theme => ({
  alignItems: 'flex-end',
  bottom: 0,
  display: 'flex',
  fontSize: '1rem',
  height: theme.spacings.kilo,
  justifyContent: 'space-between',
  padding: theme.spacings.hotel,
  paddingTop: 0,
  position: 'fixed',
  textTransform: 'uppercase',
  width: '100vw',
});

/**
 * `....................component....................`
 */

const Footer = ({ theme, ...props }) => {
  const { siteMetadata } = useSiteMetadata();
  const date = new Date().getFullYear();

  return (
    <footer css={styles(theme)} {...props}>
      &copy;
      {siteMetadata.author}
      {date}
      <Social />
    </footer>
  );
};

export default withTheme(Footer);
