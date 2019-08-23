import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/utils/seo';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact</h1>
    <p>
      I'm always open to new opportunities. if you'd like to chat email me at{' '}
      <a href={'mailto:hola@tomhendra.dev'}>hola@tomhendra.dev</a>
    </p>
    <Link to="/">&larr; back to home</Link>
  </Layout>
);

export default ContactPage;
