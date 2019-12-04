/* eslint-disable max-len */
import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Item from '../components/Item';
import ContactForm from '../components/ContactForm';

import { sizes } from '../assets/styles/constants';

const { GOLF, HOTEL, INDIA } = sizes;

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Container>
      <Grid withoutBottomSpacing>
        <Item
          gridStart={[1, 2, 3, 3]}
          gridEnd={[9, 8, 10, 10]}
          spacingTop={[GOLF, INDIA, HOTEL]}
          spacingBottom={[GOLF, HOTEL]}
        >
          <ContactForm />
        </Item>
      </Grid>
    </Container>
  </Layout>
);

export default ContactPage;
