import React from 'react';
import { Layout } from '../components/layout';
import { SEO } from '../components/utils/seo';
import { PageText } from '../components/page-text';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <PageText
      mainHeading={`Contact me.`}
      subHeading={`Let's work together!`}
      paragraph={`I'm always open to new opportunities. if you'd like to chat please send me a short message and I’ll get back to you right away. Alternatively find me online @tomhendra`}
    />
  </Layout>
);

export default ContactPage;
