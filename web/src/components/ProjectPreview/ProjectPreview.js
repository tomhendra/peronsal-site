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
const { BRAVO, CHARLIE, DELTA, GOLF } = sizes;

// ....................styles....................

const containerStyles = ({ theme }) =>
  withMediaQueries(theme)({
    display: 'flex',
    flexDirection: 'column',
    minHeight: theme.spacings.lima,
    justifyContent: 'space-between',
  });

const contentStyles = ({ theme }) => ({
  marginBottom: theme.spacings.golf,
});

const imageStyles = ({ theme }) => ({
  marginBottom: theme.spacings.foxtrot,
});

// ....................component....................

const Container = styled.div(containerStyles);
const Content = styled.div(contentStyles);
const Image = styled(Img)(imageStyles);

function ProjectPreview({ project }) {
  return (
    <Card justifyContent="space-between" padding={GOLF}>
      <Container>
        <Content>
          <Image fixed={project.image} alt={project.alt} />
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
      </Container>
    </Card>
  );
}

export default withTheme(ProjectPreview);
