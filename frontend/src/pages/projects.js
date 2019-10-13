/* eslint-disable max-len */
import React from 'react';

import useProjects from '../hooks/useProjects';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import PageHeading from '../components/PageHeading';
import PageText from '../components/PageText';
import PageCounter from '../components/PageCounter';
import ProjectPreview from '../components/ProjectPreview';

const ProjectsPage = () => {
  const projects = useProjects();
  return (
    <Layout>
      <SEO title="Projects" />
      <Container>
        <PageHeading>
          <PageText
            mainHeading="My projects."
            subHeading="I’ve been building stuff."
            paragraph="I specialise in frontend development and have a bit of a thing for slick design & motion.
            I've recently been concentrating on building web apps. These are some of the projects I have been working on"
          />
          <PageCounter pageNumber="01" totalPages="03" />
        </PageHeading>
        {projects.map(project => (
          <ProjectPreview
            key={project.id}
            project={project}
            css={theme => ({ marginBottom: theme.spacings.india })}
          />
        ))}
      </Container>
    </Layout>
  );
};
export default ProjectsPage;
