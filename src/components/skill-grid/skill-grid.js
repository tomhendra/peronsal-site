// In order to use this component it must be passed an array of
// strings which must match the title specified in skills.yaml
// exactly.

import React from 'react';
import { useSkills } from '../../hooks/use-skills';
import { SkillItem } from '../skill-item';
import { skillGridStyles } from './skill-grid-styles';

export const SkillGrid = ({ skillsToBeDisplayed }) => {
  const skills = useSkills();

  return (
    <div css={skillGridStyles}>
      {skills
        .filter(skill => skillsToBeDisplayed.includes(skill.title))
        .map(skill => (
          <SkillItem key={skill.id} skill={skill} />
        ))}
    </div>
  );
};
