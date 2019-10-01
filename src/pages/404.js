import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/utils/seo';
import Container from '../components/container';
import PageHeading from '../components/page-heading';
import PageText from '../components/page-text';

export default () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <PageHeading>
        <PageText
          mainHeading={`Page not found :-(`}
          subHeading={`You just hit a route that doesn't exist... `}
          paragraph={`The sadness.`}
        />
      </PageHeading>
    </Container>
  </Layout>
);
