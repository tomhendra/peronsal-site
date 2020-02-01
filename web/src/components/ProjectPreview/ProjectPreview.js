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

import { variants, sizes } from '../../assets/styles/style-enums';

const { PRIMARY, SECONDARY } = variants;
const { ALPHA, CHARLIE } = sizes;

// ....................styles....................

const infoStyles = ({ theme }) =>
  withMediaQueries(theme)({
    display: 'flex',
    flexDirection: 'column',
    minHeight: theme.spacings.lima,
    justifyContent: 'space-between',
    paddingLeft: [0, theme.spacings.foxtrot],
    paddingTop: [theme.spacings.foxtrot, theme.spacings.alpha],
    width: ['100%', '57%', '60%', '60%'],
  });

// ....................component....................

const ProjectInfo = styled.div(infoStyles);

function ProjectPreview({ project }) {
  return (
    <Card
      alignItems={['center', 'stretch']}
      flexDirection={['column', 'row']}
      justifyContent="space-between"
    >
      <Img fixed={project.image} alt={project.alt} />
      <ProjectInfo>
        <div>
          <Heading as="h2">{project.title}</Heading>
          <Text size={CHARLIE}>{project.description}</Text>
        </div>
        <TechStack
          gridSize={ALPHA}
          stack={project.techstack.map(tech => tech.title)}
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
}

export default withTheme(ProjectPreview);
