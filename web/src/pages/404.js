import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Container from '../components/Container'
import PageHeading from '../components/PageHeading'
import PageText from '../components/PageText'

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
)
