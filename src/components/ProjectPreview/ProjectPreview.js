import React from 'react';
import Img from 'gatsby-image';

import { colors, sizes } from '../../assets/styles';
import SkillGrid from '../SkillGrid';
import Button from '../button';

/**
 * `....................styles....................`
 */

const styles = {
  background: colors.neutral.dark2,
  border: `1px solid ${colors.neutral.dark4}`,
  borderRadius: '6px',
  display: 'flex',
  margin: '0 auto',
  minWidth: sizes.massive3,

  '> *': {
    width: '50%',
    ':last-of-type': {
      padding: sizes.medium3,

      h2: {
        marginBottom: sizes.medium1,
      },

      p: {
        marginBottom: sizes.medium2,
      },
    },
  },
};

/**
 * `....................component....................`
 */

const ProjectPreview = ({ project, ...props }) => (
  <div css={styles} {...props}>
    <Img fixed={project.image} alt={project.alt} />
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <SkillGrid
        skillsToBeDisplayed={project.stack}
        css={{
          marginBottom: sizes.medium2,
        }}
      />
      <Button
        buttonStyle={'primary'}
        buttonSize={'small'}
        externalLink={project.url}
        css={{
          marginRight: sizes.medium1,
        }}
      >
        Launch App
      </Button>
      <Button
        buttonStyle={'secondary'}
        buttonSize={'small'}
        externalLink={project.repo}
      >
        View Code
      </Button>
    </div>
  </div>
);

export default ProjectPreview;
