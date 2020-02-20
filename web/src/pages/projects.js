/* eslint-disable max-len */
import React from 'react';

import useProjects from '../hooks/useProjects';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';
import Grid from '../components/Grid';
import Item from '../components/Item';
import Heading from '../components/Heading';
import Text from '../components/Text';
import ProjectPreview from '../components/ProjectPreview';
import ButtonGroup from '../components/ButtonGroup';
import Button from '../components/Button';

import { sizes, variants } from '../assets/styles/style-enums';
import InlineLink from '../components/InlineLink';

const { BRAVO, ECHO, FOXTROT, GOLF, HOTEL, JULIETT, LIMA, MIKE } = sizes;
const { PRIMARY, SECONDARY } = variants;

function ProjectsPage() {
  const projects = useProjects();
  return (
    <Layout>
      <SEO title="Projects" />
      <Section variant={SECONDARY}>
        <Grid>
          <Item
            gridColStart={1}
            gridColEnd={[9, 8, 9, 8, 6]}
            spacingBottom={HOTEL}
          >
            <Heading as="h1" size={FOXTROT} variant={SECONDARY}>
              My projects.
            </Heading>
            <Text variant={SECONDARY}>
              I specialize in front end development and have a bit of a thing
              for clean design & motion. I&apos;ve recently been focusing on
              building web apps with React.
            </Text>
            <Text noMargin variant={SECONDARY}>
              For my next journey into the unknown, I intend to explore 3D
              animated data visualizations, so you can expect to see some really
              fancy stuff appear on this page soon.
            </Text>
          </Item>
        </Grid>
        <Grid withRowGaps>
          {projects.length ? (
            projects.map(project => (
              <Item gridColSpan={[8, 8, 6, 6, 4]} key={project.id}>
                <ProjectPreview project={project} />
              </Item>
            ))
          ) : (
            <Item
              gridColStart={1}
              gridColEnd={[9, 8, 10, 8, 6]}
              spacingBottom={GOLF}
            >
              <Heading variant={SECONDARY}>
                There are no projects to display. Please check back soon!
              </Heading>
            </Item>
          )}
        </Grid>
      </Section>
      <Section
        centerContentVertically
        paddingTop={[JULIETT, LIMA]}
        paddingBottom={[JULIETT, LIMA, LIMA, MIKE]}
        variant={PRIMARY}
      >
        <Grid>
          <Item
            gridColStart={[1, 2, 3, 3, 4]}
            gridColEnd={[9, 8, 11, 10, 9]}
            spacingBottom={GOLF}
          >
            <Heading as="h2" size={ECHO} variant={PRIMARY}>
              Oh, but there’s more…
            </Heading>
            <Text size={ECHO} noMargin variant={PRIMARY}>
              I’ve started a blog! If you’d like to read about things I feel
              inspired enough to write about, check out the&nbsp;
              <InlineLink internalLink="/blog/">Blog Page</InlineLink>
              .&nbsp;Or if you’d rather get straight to business, just hit that
              contact button!
            </Text>
          </Item>
          <Item gridColStart={[2, 2, 3, 3, 4]} gridColEnd={[8, 8, 9, 9, 8]}>
            <ButtonGroup>
              <Button internalLink="/blog/" variant={SECONDARY} size={BRAVO}>
                Blog
              </Button>
              <Button internalLink="/contact/" variant={PRIMARY} size={BRAVO}>
                Contact
              </Button>
            </ButtonGroup>
          </Item>
        </Grid>
      </Section>
    </Layout>
  );
}

export default ProjectsPage;
