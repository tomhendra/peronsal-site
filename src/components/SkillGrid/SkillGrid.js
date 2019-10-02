import React from 'react';

import { useSkills } from '../../hooks/useSkills';
import { sizes } from '../../assets/styles';
import SkillItem from '../SkillItem';

/**
 * `....................styles....................`
 */

const styles = {
  display: 'grid',
  gap: `${sizes.medium3} ${sizes.huge1}`,
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateRows: 'auto',
};

/**
 * `....................component....................`
 */

// In order to use this component it must be passed an array of
// strings which must match the title specified in skills.yaml
// exactly.

const SkillGrid = ({ skillsToBeDisplayed, ...props }) => {
  const skills = useSkills();

  return (
    <div css={styles} {...props}>
      {skills
        .filter(skill => skillsToBeDisplayed.includes(skill.title))
        .map(skill => (
          <SkillItem key={skill.id} skill={skill} />
        ))}
    </div>
  );
};

export default SkillGrid;
