import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/utils/seo';

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>
    <p>This is the project page</p>
    <Link to="/">&larr; back to home</Link>
  </Layout>
);

export default ProjectsPage;
