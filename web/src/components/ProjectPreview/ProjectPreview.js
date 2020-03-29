import React from 'react';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

import { Button } from '../Button';
import Card from '../Card';
import Heading from '../Heading';
import Text from '../Text';

import { toPlainText } from '../../utils/helpers';
import { withMediaQueries } from '../../assets/styles/style-helpers';
import { variants, sizes } from '../../assets/styles/style-enums';

const { PRIMARY, TERTIARY } = variants;
const { ALPHA, CHARLIE, DELTA, FOXTROT, GOLF } = sizes;

// ....................styles....................

const contentStyles = ({ theme }) =>
  withMediaQueries(theme)({
    marginBottom: [
      theme.spacings.foxtrot,
      theme.spacings.foxtrot,
      theme.spacings.foxtrot,
      theme.spacings.golf,
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
      theme.spacings.foxtrot,
    ],
  });

// ....................component....................

const Content = styled.div(contentStyles);
const Image = styled(Img)(imageStyles);

function ProjectPreview({ project }) {
  return (
    <Card
      variant={PRIMARY}
      justifyContent="space-between"
      padding={[FOXTROT, FOXTROT, FOXTROT, GOLF]}
      alignItems="stretch"
    >
      <Content>
        <Image fluid={project.mainImage} alt={project.alt} />
        <Heading as="h3" size={CHARLIE} spacingBottom={DELTA} variant={PRIMARY}>
          {project.title}
        </Heading>
        <Text noMargin size={CHARLIE} variant={PRIMARY}>
          {toPlainText(project.description)}
        </Text>
      </Content>
      <Button variant={TERTIARY} size={ALPHA} internalLink={project.slug}>
        More Details
      </Button>
    </Card>
  );
}

export default ProjectPreview;
