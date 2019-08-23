import React from 'react';
import PropTypes from 'prop-types';
import useSiteMetadata from '../../hooks/use-site-metadata';
import BaseStyles from '../../assets/styles/global/base';
import Header from '../header';
import Main from '../main';
import Footer from '../footer';

const Layout = ({ children }) => {
  const { title } = useSiteMetadata();
  return (
    <>
      <BaseStyles />
      <Header siteTitle={title} />
      <Main content={children} />
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
