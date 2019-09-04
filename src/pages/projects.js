import React from 'react';
import { Layout } from '../components/layout';
import { SEO } from '../components/utils/seo';

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>My projects.</h1>
    <h2>I’ve been building stuff.</h2>
    <p>
      I specialise in frontend development and love crafting beautiful user
      experiences. I thrive on continuous self-improvement and take pride in
      learning directly from the experts who shape the modern web.
    </p>
    <div>1/3, 2/3, 3/3 indicator</div>
    <div>Project 1</div>
    <div>Project 1</div>
    <div>Project 1</div>
  </Layout>
);

export default ProjectsPage;
