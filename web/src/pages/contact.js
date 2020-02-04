/* eslint-disable max-len */
import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';
import Grid from '../components/Grid';
import Item from '../components/Item';
import ContactForm from '../components/ContactForm';

import { sizes } from '../assets/styles/style-enums';

const { GOLF, HOTEL, INDIA } = sizes;

function ContactPage() {
  return (
    <Layout>
      <SEO title="Contact" />
      <Section paddingTop={INDIA}>
        <Grid withoutBottomSpacing>
          <Item
            gridColStart={[1, 2, 3, 4]}
            gridColEnd={[9, 12, 11, 10]}
            spacingTop={[GOLF, INDIA, HOTEL]}
            spacingBottom={[GOLF, HOTEL]}
          >
            <ContactForm />
          </Item>
        </Grid>
      </Section>
    </Layout>
  );
}
export default ContactPage;
