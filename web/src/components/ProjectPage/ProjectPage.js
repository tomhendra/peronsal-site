import React from 'react';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Section from '../Section';
import Grid from '../Grid';
import Item from '../Item';
import Heading from '../Heading';
import Text from '../Text';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';
import TechStack from '../TechStack';

import { sizes, variants } from '../../assets/styles/style-enums';

const { ALPHA, BRAVO, DELTA, ECHO } = sizes;
const { PRIMARY, SECONDARY, TERTIARY } = variants;

// ....................styles....................

const imageStyles = ({ theme }) => ({
  borderRadius: theme.borderRadius.alpha,
  width: '100%',
});

// ....................component....................

const ProjectMainImage = styled(Img)(imageStyles);

function ProjectPage({ project }) {
  const {
    title,
    mainImage,
    purpose,
    objective,
    approach,
    _rawTechstack,
    role,
    credits,
    repo,
    url,
  } = project;
  return (
    <Section>
      <article>
        <Grid>
          <Item gridColStart={[1]} gridColEnd={[6]}>
            <Heading as="h1" size={ECHO}>
              {title}
            </Heading>
            <Heading as="h2" size={DELTA}>
              Purpose.
            </Heading>
            <Text>{purpose}</Text>
            <Heading as="h2" size={DELTA}>
              Objective.
            </Heading>
            <Text>{objective}</Text>
            <Heading as="h2" size={DELTA}>
              Approach.
            </Heading>
            <Text>{approach}</Text>
          </Item>
          <Item gridColStart={[1]} gridColEnd={[6]}>
            <ButtonGroup>
              <Button
                buttonStyle={TERTIARY}
                buttonSize={BRAVO}
                internalLink="/projects/"
              >
                Back to Projects
              </Button>
              <Button
                buttonStyle={SECONDARY}
                buttonSize={BRAVO}
                externalLink={repo}
              >
                View Source
              </Button>
              <Button
                buttonStyle={PRIMARY}
                buttonSize={BRAVO}
                externalLink={url}
              >
                Launch App
              </Button>
            </ButtonGroup>
          </Item>
          <Item gridColStart={[7]} gridColEnd={[12]} gridRowStart={[1]}>
            {mainImage && mainImage.asset && (
              <ProjectMainImage
                alt={mainImage.alt}
                fluid={mainImage.asset.fluid}
              />
            )}
            <Heading as="h2" size={DELTA}>
              Tech stack.
            </Heading>
            <TechStack
              gridSize={ALPHA}
              stack={_rawTechstack.map(item => item.title)}
            />
            <Heading as="h2" size={DELTA}>
              Role.
            </Heading>
            <Text>{role}</Text>
            <Heading as="h2" size={DELTA}>
              Credits.
            </Heading>
            <Text>{credits}</Text>
          </Item>
        </Grid>
      </article>
    </Section>
  );
}

// ....................propTypes....................

ProjectPage.propTypes = {
  project: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  ),
};

ProjectPage.defaultProps = {
  project: null,
};

export default ProjectPage;
