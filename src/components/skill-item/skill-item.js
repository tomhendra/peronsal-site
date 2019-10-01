import React from 'react';
import Img from 'gatsby-image';

import { sizes } from '../../assets/styles';

/**
 * `....................styles....................`
 */

const styles = {
  alignItems: 'center',
  display: 'flex',
  minHeight: sizes.large1,

  p: {
    marginLeft: sizes.small4,
  },
};

/**
 * `....................component....................`
 */

const SkillItem = ({ skill }) => (
  <div css={styles}>
    <Img fixed={skill.image} alt={skill.alt} />
    <p>{skill.title}</p>
  </div>
);

export default SkillItem;
