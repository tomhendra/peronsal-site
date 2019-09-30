import React from 'react';
import Img from 'gatsby-image';
import { projectPreviewStyles } from './project-preview-styles';

export const ProjectPreview = ({ project }) => (
  <div css={projectPreviewStyles}>
    <Img fixed={project.image} alt={project.alt} />
    <div>
      <p>{project.title}</p>
      <p>{project.description}</p>
    </div>
  </div>
);
