import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
    <p>Welcome to by portfolio</p>
    <Link to="/about/">Learn about me &rarr;</Link>
  </Layout>
);
