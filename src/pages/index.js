import React from 'react';
import { Layout } from '../components/layout';
import SEO from '../components/utils/seo';
import { Hero } from '../components/hero';

const IndexPage = () => (
  <Layout>
    <SEO title="Web Developer" />
    <Hero mainHeading="Tom Hendra" subHeading="Web Developer" />
  </Layout>
);

export default IndexPage;
