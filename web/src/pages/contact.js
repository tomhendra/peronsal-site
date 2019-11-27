/* eslint-disable max-len */
import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Item from '../components/Item';
import ContactForm from '../components/ContactForm';

import { sizes } from '../assets/styles/constants';

const { HOTEL, INDIA } = sizes;

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Container>
      <Grid>
        <Item
          gridStart={[1, 2, 3, 3]}
          gridEnd={[7, 8, 10, 10]}
          spacingTop={INDIA}
          spacingBottom={HOTEL}
        >
          <ContactForm />
        </Item>
      </Grid>
    </Container>
  </Layout>
);

export default ContactPage;
