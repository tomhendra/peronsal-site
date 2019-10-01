import React from 'react';
import Img from 'gatsby-image';

/**
 * `....................styles....................`
 */

const styles = {
  display: 'flex',

  '> *': {
    width: '50%',
  },
};

/**
 * `....................component....................`
 */

const ProjectPreview = ({ project }) => (
  <div css={styles}>
    <Img fixed={project.image} alt={project.alt} />
    <div>
      <p>{project.title}</p>
      <p>{project.description}</p>
    </div>
  </div>
);

export default ProjectPreview;
