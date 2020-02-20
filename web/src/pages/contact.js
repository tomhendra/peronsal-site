/* eslint-disable max-len */
import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';
import Grid from '../components/Grid';
import Item from '../components/Item';
import ContactForm from '../components/ContactForm';

import { sizes, variants } from '../assets/styles/style-enums';

const { FOXTROT, GOLF, HOTEL, INDIA } = sizes;
const { PRIMARY, SECONDARY } = variants;

function ContactPage() {
  return (
    <Layout>
      <SEO title="Contact" />
      <Section paddingTop={INDIA} variant={SECONDARY}>
        <Grid withoutBottomSpacing>
          <Item
            gridColStart={[1, 1, 2, 3, 4]}
            gridColEnd={[9, 9, 12, 11, 10]}
            spacingTop={[FOXTROT, GOLF, INDIA, HOTEL]}
            spacingBottom={[GOLF, HOTEL]}
          >
            <ContactForm variant={PRIMARY} />
          </Item>
        </Grid>
      </Section>
    </Layout>
  );
}
export default ContactPage;
