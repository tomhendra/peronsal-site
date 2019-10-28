import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import Graphic from '../components/Graphic';
import Grid from '../components/Grid';
import Item from '../components/Item';
import Heading from '../components/Heading';

import { sizes } from '../assets/styles/constants';

// const { PRIMARY } = colors;
const { DELTA, HOTEL } = sizes;
// const { PRIMARY, SECONDARY } = colors;

const IndexPage = () => (
  <Layout>
    <SEO title="Web Developer" />
    <Container center>
      <Graphic>Hola.</Graphic>
      <Grid>
        <Item gridStart={1} gridEnd={9}>
          <Heading as="h1" size={HOTEL}>
            I am Tom.
          </Heading>
          <Heading sub as="h2" size={DELTA}>
            I’m a web developer from the UK living in Spain. I am passionate
            about coding, design & good food!
          </Heading>
        </Item>
      </Grid>
    </Container>
  </Layout>
);

export default IndexPage;
