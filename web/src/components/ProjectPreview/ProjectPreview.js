import React from 'react';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import Card from '../Card';
import Heading from '../Heading';
import Text from '../Text';
import TechStack from '../TechStack';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';

import { withMediaQueries } from '../../assets/styles/style-helpers';

import { buttons, sizes } from '../../assets/styles/constants';

const { PRIMARY, SECONDARY } = buttons;
const { ALPHA, CHARLIE } = sizes;

/**
 * `....................styles....................`
 */

const infoStyles = ({ theme }) =>
  withMediaQueries(theme)({
    display: 'flex',
    flexDirection: 'column',
    minHeight: theme.spacings.lima,
    justifyContent: 'space-between',
    paddingLeft: [0, theme.spacings.foxtrot],
    width: ['100%', '57%', '60%', '60%'],
    paddingTop: [theme.spacings.foxtrot, 0],
  });

/**
 * `....................component....................`
 */

const ProjectInfo = styled.div(infoStyles);

const ProjectPreview = ({ project }) => (
  <Card
    alignItems={['center', 'stretch']}
    justifyContent="space-between"
    flexDirection={['column', 'row']}
  >
    <Img fixed={project.image} alt={project.alt} />
    <ProjectInfo>
      <div>
        <Heading as="h2">{project.title}</Heading>
        <Text size={CHARLIE}>{project.description}</Text>
      </div>
      <TechStack
        gridSize={ALPHA}
        techStackToDisplay={project.techstack.map(tech => tech.title)}
      />
      <ButtonGroup>
        <Button
          buttonStyle={SECONDARY}
          buttonSize={ALPHA}
          externalLink={project.repo}
        >
          View Repo
        </Button>
        <Button
          buttonStyle={PRIMARY}
          buttonSize={ALPHA}
          externalLink={project.url}
        >
          Launch App
        </Button>
      </ButtonGroup>
    </ProjectInfo>
  </Card>
);

export default withTheme(ProjectPreview);
