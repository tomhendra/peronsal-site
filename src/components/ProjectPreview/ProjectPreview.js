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
  justifyContent: 'space-between',
  maxWidth: sizes.massive3,
};

/**
 * `....................component....................`
 */

const ProjectPreview = ({ project, ...props }) => (
  <div css={styles} {...props}>
    <Img fixed={project.image} alt={project.alt} />
    <div
      css={{
        padding: `${sizes.medium3} ${sizes.medium2}`,
        width: '60%',
      }}
    >
      <h2
        css={{
          marginBottom: sizes.medium1,
        }}
      >
        {project.title}
      </h2>
      <p
        css={{
          marginBottom: sizes.medium2,
        }}
      >
        {project.description}
      </p>
      <SkillGrid
        gridSize={'small'}
        skillsToBeDisplayed={project.stack}
        css={{
          marginBottom: sizes.medium3,
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
