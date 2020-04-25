/* eslint-disable max-len */
import React from 'react';

import { Layout, SEO, Section, Grid, Item, ContactForm } from '../components';

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <Section paddingTop="india" variant="secondary">
      <Grid>
        <Item
          gridColStart={[1, 1, 2, 3, 4]}
          gridColEnd={[9, 9, 12, 11, 10]}
          spacingTop={['foxtrot', 'golf', 'india', 'hotel']}
          spacingBottom={['golf', 'hotel']}
        >
          <ContactForm variant="primary" />
        </Item>
      </Grid>
    </Section>
  </Layout>
);

export default Contact;
