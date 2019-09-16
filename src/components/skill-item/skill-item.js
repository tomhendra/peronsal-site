import React from 'react';
import Img from 'gatsby-image';
import { skillItemStyles } from './skill-item-styles';

export const SkillItem = ({ skill }) => (
  <div css={skillItemStyles}>
    <Img fixed={skill.image} alt={skill.alt} />
    <p>{skill.title}</p>
  </div>
);
