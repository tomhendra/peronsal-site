import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Projects</h1>
    <p>This is the project page</p>
    <Link to="/">&larr; back to home</Link>
  </Layout>
);
