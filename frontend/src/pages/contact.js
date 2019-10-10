/* eslint-disable max-len */
import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import PageHeading from '../components/PageHeading';
import PageText from '../components/PageText';
import FormikContactForm from '../components/ContactForm';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Container>
      <PageHeading>
        <PageText
          mainHeading="Contact me."
          subHeading="Let's work together!"
          paragraph="I'm always open to new opportunities. if you'd like to chat please send me a short message and I’ll get back to you right away. Alternatively find me online @tomhendra"
        />
      </PageHeading>
      <FormikContactForm />
    </Container>
  </Layout>
);

export default ContactPage;
