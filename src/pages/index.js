import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Web Developer" />
    <h1>Hello, I am Tom.</h1>
    <h2>I make websites & web apps</h2>
    <h2>with code.</h2>
    <Link to="/about/">Learn about me &rarr;</Link>
  </Layout>
);

export default IndexPage;
