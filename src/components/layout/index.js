import React from 'react';
import PropTypes from 'prop-types';
import useSiteMetadata from '../../hooks/use-site-metadata';
import { Global } from '@emotion/core';
import baseStyles from '../../assets/styles/base-styles';
import layoutStyles from './layout-styles';
import Header from '../header';
import Main from '../main';
import Footer from '../footer';

const Layout = ({ children }) => {
  const { title } = useSiteMetadata();
  return (
    <>
      <Global styles={baseStyles} />
      <div css={layoutStyles}>
        <Header siteTitle={title} />
        <Main mainContent={children} />
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
