import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About me</h1>
    <p>This is the about page</p>
    <Link to="/">&larr; back to home</Link>
  </Layout>
);

export default AboutPage;
