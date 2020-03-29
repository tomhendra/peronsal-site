import React from 'react';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { Button } from '../Button';
import Section from '../Section';
import Grid from '../Grid';
import Item from '../Item';
import Heading from '../Heading';
import PortableText from '../PortableText';
import ButtonGroup from '../ButtonGroup';
import TechStack from '../TechStack';

import { sizes, variants } from '../../assets/styles/style-enums';

const { ALPHA, CHARLIE, DELTA, ECHO, FOXTROT, GOLF, INDIA } = sizes;
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
    _rawPurpose,
    _rawObjective,
    _rawApproach,
    _rawTechstack,
    _rawRole,
    _rawCredits,
    repo,
    url,
  } = project;
  return (
    <Section variant={PRIMARY}>
      <article>
        <Grid>
          <Item
            gridColStart={[1, 1, 2, 1, 1]}
            gridColEnd={[9, 9, 12, 7, 6]}
            spacingBottom={[ECHO, GOLF]}
          >
            <Heading noMargin as="h1" size={FOXTROT} variant={PRIMARY}>
              {title}
            </Heading>
          </Item>
          <Item
            gridColStart={[1, 1, 2, 8, 7]}
            gridColEnd={[9, 8, 10, 13, 11]}
            gridRowStart={[2, 2, 2, 1, 1]}
            gridRowSpan={[1, 1, 1, 3, 3]}
            spacingBottom={[GOLF, GOLF, GOLF, 0, 0]}
          >
            {mainImage && mainImage.asset && (
              <ProjectMainImage
                alt={mainImage.alt}
                fluid={mainImage.asset.fluid}
              />
            )}
          </Item>
          <Item
            gridColStart={[1, 1, 2, 1, 1]}
            gridColEnd={[9, 8, 10, 7, 6]}
            spacingBottom={FOXTROT}
          >
            <Heading
              as="h2"
              size={DELTA}
              spacingBottom={CHARLIE}
              variant={PRIMARY}
            >
              Purpose.
            </Heading>
            {_rawPurpose && <PortableText blocks={_rawPurpose} />}
          </Item>
          <Item
            gridColStart={[1, 1, 2, 1, 1]}
            gridColEnd={[9, 8, 10, 7, 6]}
            spacingBottom={FOXTROT}
          >
            <Heading
              as="h2"
              size={DELTA}
              spacingBottom={CHARLIE}
              variant={PRIMARY}
            >
              Objective.
            </Heading>
            {_rawObjective && <PortableText blocks={_rawObjective} />}
          </Item>
          <Item
            gridColStart={[1, 1, 2, 1, 1]}
            gridColEnd={[9, 8, 10, 7, 6]}
            gridRowSpan={4}
            spacingBottom={[FOXTROT, FOXTROT, FOXTROT, INDIA, FOXTROT]}
          >
            <Heading
              as="h2"
              size={DELTA}
              spacingBottom={CHARLIE}
              variant={PRIMARY}
            >
              Approach.
            </Heading>
            {_rawApproach && <PortableText blocks={_rawApproach} />}
          </Item>
          <Item
            gridColStart={[1, 1, 2, 8, 7]}
            gridColEnd={[9, 8, 10, 13, 12]}
            spacingBottom={FOXTROT}
          >
            <Heading as="h2" size={DELTA} variant={PRIMARY}>
              Tech stack.
            </Heading>
            <TechStack
              gridSize={ALPHA}
              stack={_rawTechstack.map((item) => item.title)}
            />
          </Item>
          <Item
            gridColStart={[1, 1, 2, 8, 7]}
            gridColEnd={[9, 8, 10, 13, 12]}
            spacingBottom={FOXTROT}
          >
            <Heading
              as="h2"
              size={DELTA}
              spacingBottom={CHARLIE}
              variant={PRIMARY}
            >
              Role.
            </Heading>
            {_rawRole && <PortableText blocks={_rawRole} />}
          </Item>
          <Item
            gridColStart={[1, 1, 2, 8, 7]}
            gridColEnd={[9, 8, 10, 13, 12]}
            spacingBottom={FOXTROT}
          >
            <Heading
              as="h2"
              size={DELTA}
              spacingBottom={CHARLIE}
              variant={PRIMARY}
            >
              Credits.
            </Heading>
            {_rawCredits && <PortableText blocks={_rawCredits} />}
          </Item>
          <Item gridColStart={[2, 1, 2, 1, 1]} gridColEnd={[8, 10, 11, 8, 6]}>
            <ButtonGroup>
              <Button variant={TERTIARY} size={ALPHA} internalLink="/projects/">
                Back to Projects
              </Button>
              <Button variant={SECONDARY} size={ALPHA} externalLink={repo}>
                View Source
              </Button>
              <Button variant={PRIMARY} size={ALPHA} externalLink={url}>
                Launch App
              </Button>
            </ButtonGroup>
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
