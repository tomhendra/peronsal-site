/* eslint-disable max-len */
import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Item from '../components/Item';
import Heading from '../components/Heading';
import ContactForm from '../components/ContactForm';

import { sizes } from '../assets/styles/constants';

const { FOXTROT, HOTEL, INDIA } = sizes;

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Container>
      <Grid>
        <Item
          gridStart={1}
          gridEnd={7}
          spacingTop={INDIA}
          spacingBottom={HOTEL}
        >
          <Heading as="h1" size={FOXTROT}>
            Contact.
          </Heading>
        </Item>
        <Item
          gridStart={3}
          gridEnd={11}
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
