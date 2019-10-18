import React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import { themes } from '../../assets/themes';
import { cssReset, globalStyles } from '../../assets/styles';
import Header from '../Header';
import Footer from '../Footer';

/**
 * `....................styles....................`
 */

// TODO: use state to change on switch
const theme = themes.delfin;
const globals = globalStyles(theme);

const styles = {
  ...cssReset,
  ...globals,
};

/**
 * `....................component....................`
 */

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global styles={styles} />
    <div css={{ position: 'relative', margin: '0 auto' }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
