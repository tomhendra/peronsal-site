import React from 'react';

import { useProjects } from '../hooks/use-projects';
import Layout from '../components/layout';
import SEO from '../components/utils/seo';
import Container from '../components/container';
import PageHeading from '../components/page-heading';
import PageText from '../components/page-text';
import PageCounter from '../components/page-counter';
import ProjectPreview from '../components/project-preview';

const ProjectsPage = () => {
  const projects = useProjects();
  return (
    <Layout>
      <SEO title="Projects" />
      <Container>
        <PageHeading>
          <PageText
            mainHeading={`My projects.`}
            subHeading={`I’ve been building stuff.`}
            paragraph={`I specialise in frontend development and have a bit of a thing for slick design & motion. I've recently been concentrating on building web apps. These are some of the projects I have been working on.`}
          />
          <PageCounter pageNumber={`01`} totalPages={`03`} />
        </PageHeading>
        {projects.map(project => (
          <ProjectPreview key={project.id} project={project} />
        ))}
      </Container>
    </Layout>
  );
};
export default ProjectsPage;
