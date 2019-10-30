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

import { buttons, sizes } from '../../assets/styles/constants';

const { PRIMARY, SECONDARY } = buttons;
const { ALPHA } = sizes;

/**
 * `....................styles....................`
 */

const infoStyles = ({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  paddingLeft: theme.spacings.foxtrot,
  width: '60%',
});

/**
 * `....................component....................`
 */

const ProjectInfo = styled.div(infoStyles);

const ProjectPreview = ({ project }) => (
  <Card alignItems="stretch" flexDirection="row">
    <Img fixed={project.image} alt={project.alt} />
    <ProjectInfo>
      <div>
        <Heading as="h2">{project.title}</Heading>
        <Text>{project.description}</Text>
        <TechStack
          gridSize={ALPHA}
          techStackToDisplay={project.techstack.map(tech => tech.title)}
        />
      </div>
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
