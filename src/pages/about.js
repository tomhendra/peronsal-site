import React from 'react';
import { Layout } from '../components/layout';
import { SEO } from '../components/utils/seo';
import { PageText } from '../components/page-text';

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <PageText
      mainHeading={`About me.`}
      subHeading={`Hola, I'm Tom.`}
      paragraph={`I am a frontend web developer from the UK, living in Spain. 
      I am passionate about crafting beautiful user experiences. I take pride in
      continuously learning directly from the experts who shape the modern web.`}
    />
  </Layout>
);

export default AboutPage;
