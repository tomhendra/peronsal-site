import React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/core';
import baseStyles from '../../assets/styles/base-styles';
import layoutStyles from './layout-styles';
import Header from '../header';
import Main from '../main';
import Footer from '../footer';

const Layout = ({ children }) => (
  <>
    <Global styles={baseStyles} />
    <div css={layoutStyles}>
      <Header />
      <Main mainContent={children} />
      <Footer />
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
