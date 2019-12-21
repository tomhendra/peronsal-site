import React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import { themes } from '../../assets/themes';
import { cssReset } from '../../assets/styles';
import Wrapper from '../Wrapper';
import Header from '../Header';
import Footer from '../Footer';

/**
 * `....................styles....................`
 */

// TODO: use state to change on switch
const theme = themes.nord;

const globalStyles = {
  body: {
    background: theme.colors.bodyBg,
    color: theme.colors.bodyColor,
    fontFamily: theme.fontStack.default,
  },
  main: {
    position: 'relative',
  },
};

/**
 * `....................component....................`
 */

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global styles={{ ...cssReset, ...globalStyles }} />
    <Wrapper>
      <Header />
      <main>{children}</main>
      <Footer />
    </Wrapper>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
