import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Tom Hendra</h1>
    <p>software developer</p>
    <Link to="/about/">About</Link>
  </Layout>
);

export default IndexPage;
