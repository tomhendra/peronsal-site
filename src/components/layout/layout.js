import React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/core';
import { Header } from '../header';
import { Footer } from '../footer';
import { baseStyles } from '../../assets/styles';
import { layoutStyles } from './layout-styles';

export const Layout = ({ children }) => (
  <div css={layoutStyles}>
    <Global styles={baseStyles} />
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
