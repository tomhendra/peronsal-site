import React from 'react';
import { Layout } from '../components/layout';
import { SEO } from '../components/utils/seo';
import { Container } from '../components/container';
import { Hero } from '../components/hero';

const IndexPage = () => (
  <Layout>
    <SEO title="Web Developer" />
    <Container>
      <Hero mainHeading="Tom Hendra" subHeading="Web Developer" />
    </Container>
  </Layout>
);

export default IndexPage;
