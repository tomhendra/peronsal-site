import React from 'react';
import { Layout } from '../components/layout';
import { SEO } from '../components/utils/seo';
import { Container } from '../components/container';
import { PageHeading } from '../components/page-heading';
import { PageText } from '../components/page-text';

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <Container>
      <PageHeading>
        <PageText
          mainHeading={`My projects.`}
          subHeading={`I’ve been building stuff.`}
          paragraph={`I specialise in frontend development and have a bit of a thing for slick design & motion. These are some of the projects I have been working on.`}
        />
      </PageHeading>
    </Container>
  </Layout>
);

export default ProjectsPage;
