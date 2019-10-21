import React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import { themes } from '../../assets/themes';
import { cssReset, globalStyles } from '../../assets/styles';
import Wrapper from '../Wrapper';
import Header from '../Header';
import Footer from '../Footer';

/**
 * `....................styles....................`
 */

// TODO: use state to change on switch
const theme = themes.delfin;
const globals = globalStyles(theme);

/**
 * `....................component....................`
 */

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global styles={{ ...cssReset, ...globals }} />
    <Wrapper>
      <Header />
      <main css={{ position: 'relative' }}>{children}</main>
      <Footer />
    </Wrapper>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
