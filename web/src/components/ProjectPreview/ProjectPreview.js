import React from 'react';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import Card from '../Card';
import Heading from '../Heading';
import Text from '../Text';
import Button from '../Button';

import { withMediaQueries } from '../../assets/styles/style-helpers';
import { variants, sizes } from '../../assets/styles/style-enums';

const { TERTIARY } = variants;
const { BRAVO, CHARLIE, DELTA, FOXTROT, GOLF } = sizes;

// ....................styles....................

const contentStyles = ({ theme }) =>
  withMediaQueries(theme)({
    marginBottom: [
      theme.spacings.foxtrot,
      theme.spacings.foxtrot,
      theme.spacings.foxtrot,
      theme.spacings.golf,
    ],
  });

const imageStyles = ({ theme }) =>
  withMediaQueries(theme)({
    marginBottom: [
      theme.spacings.echo,
      theme.spacings.echo,
      theme.spacings.echo,
      theme.spacings.foxtrot,
    ],
  });

// ....................component....................

const Content = styled.div(contentStyles);
const Image = styled(Img)(imageStyles);

function ProjectPreview({ project }) {
  return (
    <Card
      justifyContent="space-between"
      padding={[FOXTROT, FOXTROT, FOXTROT, GOLF]}
      alignItems="stretch"
    >
      <Content>
        <Image fluid={project.image} alt={project.alt} />
        <Heading size={CHARLIE} spacingBottom={DELTA} as="h3">
          {project.title}
        </Heading>
        <Text size={CHARLIE} noMargin>
          {project.description}
        </Text>
      </Content>
      <Button
        buttonStyle={TERTIARY}
        buttonSize={BRAVO}
        externalLink={project.repo}
      >
        More Details
      </Button>
    </Card>
  );
}

export default withTheme(ProjectPreview);
