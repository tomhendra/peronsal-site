/* eslint-disable max-len */
import React from 'react';

import useProjects from '../hooks/useProjects';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';
import Graphic from '../components/Graphic';
import Grid from '../components/Grid';
import Item from '../components/Item';
import Heading from '../components/Heading';
import Text from '../components/Text';
import ProjectPreview from '../components/ProjectPreview';

import { sizes } from '../assets/styles/constants';

const { FOXTROT, GOLF, HOTEL, INDIA } = sizes;

function ProjectsPage() {
  const projects = useProjects();
  return (
    <Layout>
      <SEO title="Projects" />
      <Section>
        <Graphic>Projects</Graphic>
        <Grid>
          <Item
            gridStart={1}
            gridEnd={[8, 6, 7, 7]}
            spacingTop={[GOLF, INDIA]}
            spacingBottom={[GOLF, HOTEL]}
          >
            <Heading as="h1" size={FOXTROT}>
              My projects.
            </Heading>
            <Text>
              I specialise in frontend development and have a bit of a thing for
              clean design & motion. I&apos;ve recently been focusing on
              building web apps with React.
            </Text>
            <Text noMargin>
              I am also a huge advocate of open source software and contribute
              where I can. With collaboration from developers all over the
              world, we can work together to deliver great products accessible
              to everyone.
            </Text>
          </Item>
          {projects.length ? (
            projects.map(project => (
              <Item
                gridStart={1}
                gridEnd={[9, 9, 11, 11]}
                spacingBottom={[HOTEL, INDIA]}
                key={project.id}
              >
                <ProjectPreview project={project} />
              </Item>
            ))
          ) : (
            <Item
              gridStart={1}
              gridEnd={8}
              spacingTop={GOLF}
              spacingBottom={GOLF}
            >
              <Heading sub>
                Projects are yet to be added. Please check back soon!
              </Heading>
            </Item>
          )}
        </Grid>
      </Section>
    </Layout>
  );
}

export default ProjectsPage;
