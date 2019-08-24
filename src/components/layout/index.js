import React from 'react';
import PropTypes from 'prop-types';
import useSiteMetadata from '../../hooks/use-site-metadata';
import GlobalStyles from '../../assets/styles/global-styles';
import Header from '../header';
import Main from '../main';
import Footer from '../footer';

const Layout = ({ children }) => {
  const { title } = useSiteMetadata();
  return (
    <>
      <GlobalStyles />
      <Header siteTitle={title} />
      <Main mainContent={children} />
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
