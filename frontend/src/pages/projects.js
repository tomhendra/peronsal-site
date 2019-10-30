/* eslint-disable max-len */
import React from 'react';

import useProjects from '../hooks/useProjects';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import Graphic from '../components/Graphic';
import Grid from '../components/Grid';
import Item from '../components/Item';
import Heading from '../components/Heading';
import Text from '../components/Text';
import ProjectPreview from '../components/ProjectPreview';

import { sizes } from '../assets/styles/constants';

const { FOXTROT, HOTEL, INDIA } = sizes;

const ProjectsPage = () => {
  const projects = useProjects();
  console.log(projects);
  return (
    <Layout>
      <SEO title="Projects" />
      <Container>
        <Graphic>Projects</Graphic>
        <Grid>
          <Item
            gridStart={1}
            gridEnd={7}
            spacingTop={INDIA}
            spacingBottom={HOTEL}
          >
            <Heading as="h1" size={FOXTROT}>
              My projects.
            </Heading>
            <Text>
              I specialise in frontend development and have a bit of a thing for
              slick design & motion. I&apos;ve recently been focusing on
              building web apps with React.
            </Text>
            <Text noMargin>
              I am also a huge advocate of open source software and contribute
              where I can. With collaboration from developers all over the
              world, we can work together to deliver great products accessible
              to everyone.
            </Text>
          </Item>
          {projects.map(project => (
            <Item
              gridStart={1}
              gridEnd={11}
              spacingBottom={INDIA}
              key={project.id}
            >
              <ProjectPreview project={project} />
            </Item>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};
export default ProjectsPage;
