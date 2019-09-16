import React from 'react';
import { useSkills } from '../../hooks/use-skills';
import { SkillItem } from '../skill-item';
import { skillGridStyles } from './skill-grid-styles';

export const SkillGrid = () => {
  const skills = useSkills();

  return (
    <div css={skillGridStyles}>
      {skills.map(skill => (
        <SkillItem key={skill.id} skill={skill} />
      ))}
    </div>
  );
};
