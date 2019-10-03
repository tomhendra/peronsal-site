import React from 'react';
import Img from 'gatsby-image';

import { useSkills } from '../../hooks/useSkills';
import { fontsizes, sizes } from '../../assets/styles';

/**
 * `....................constants....................`
 */

const small = 'small';
const large = 'large';

const gridSizes = {
  [small]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    fontSize: fontsizes.small,
    gap: sizes.medium1,
    marginLeft: sizes.small2,
  },
  [large]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    fontSize: fontsizes.base,
    gap: `${sizes.medium3} ${sizes.huge1}`,
    marginLeft: sizes.medium2,
  },
};

/**
 * `....................styles....................`
 */

const styles = gridSize => {
  const gridConfig =
    gridSizes[gridSize] || gridSizes[SkillGrid.defaultProps.gridSize];

  return {
    display: 'grid',
    gridTemplateColumns: gridConfig.gridTemplateColumns,
    gap: gridConfig.gap,

    div: {
      alignItems: 'center',
      display: 'flex',
    },

    p: {
      fontSize: gridConfig.fontSize,
      marginLeft: gridConfig.marginLeft,
    },
  };
};

/**
 * `....................component....................`
 */

// In order to use this component it must be passed an array of
// strings which must match the title specified in skills.yaml
// exactly. !! could make this friendlier to typos later using RegEx ?

const SkillGrid = ({ gridSize, skillsToBeDisplayed, ...props }) => {
  const skills = useSkills();
  // verify which size image to use from useSkills() based on value of gridSize
  // moved here for better performance over being inside map() below
  // as to not check the value of gridSize on every iteration!
  const imageSize = gridSize === 'small' ? 'imageSmall' : 'imageMedium';

  return (
    <div css={styles(gridSize)} {...props}>
      {skills
        .filter(skill => skillsToBeDisplayed.includes(skill.title))
        .map(skill => (
          <div key={skill.id}>
            <Img fixed={skill[imageSize]} alt={skill.alt} />
            <p>{skill.title}</p>
          </div>
        ))}
    </div>
  );
};

SkillGrid.defaultProps = {
  skillsToBeDisplayed: [],
  gridSize: 'small',
};

export default SkillGrid;
