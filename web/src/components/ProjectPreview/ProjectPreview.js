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
const { ALPHA, BRAVO, CHARLIE } = sizes;

/**
 * `....................styles....................`
 */

const infoStyles = ({ theme }) =>
  withMediaQueries(theme)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: theme.spacings.foxtrot,
    width: ['100%', '57%', '60%', '60%'],
  });

/**
 * `....................component....................`
 */

const ProjectInfo = styled.div(infoStyles);

const ProjectPreview = ({ project }) => (
  <Card alignItems="stretch" justifyContent="space-between" flexDirection="row">
    <Img fixed={project.image} alt={project.alt} />
    <ProjectInfo>
      <div>
        <Heading as="h2">{project.title}</Heading>
        <Text noMargin size={[BRAVO, BRAVO, CHARLIE, CHARLIE]}>
          {project.description}
        </Text>
      </div>
      <TechStack
        gridSize={ALPHA}
        techStackToDisplay={project.techstack.map(tech => tech.title)}
      />
      <ButtonGroup>
        <Button
          buttonStyle={SECONDARY}
          buttonSize={BRAVO}
          externalLink={project.repo}
        >
          View Repo
        </Button>
        <Button
          buttonStyle={PRIMARY}
          buttonSize={BRAVO}
          externalLink={project.url}
        >
          Launch App
        </Button>
      </ButtonGroup>
    </ProjectInfo>
  </Card>
);

export default withTheme(ProjectPreview);
