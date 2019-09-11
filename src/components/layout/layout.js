import React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/core';
import { baseStyles } from '../../assets/styles';
import { Header } from '../header';
import { Main } from '../main';
import { Footer } from '../footer';
import { layoutStyles } from './layout-styles';

export const Layout = ({ children }) => (
  <div css={layoutStyles}>
    <Global styles={baseStyles} />
    <Header />
    <Main mainContent={children} />
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
