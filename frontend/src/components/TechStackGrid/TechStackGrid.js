import React from 'react';
import Img from 'gatsby-image';

import useTechStack from '../../hooks/useTechStack';
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
  const gridConfig = gridSizes[gridSize];

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
// strings which must match the title specified in Sanity studio desk
// exactly. !! could make this friendlier to typos later using RegEx ?

const TechStackGrid = ({ gridSize, techStackToBeDisplayed, ...props }) => {
  const techStack = useTechStack();
  // verify which size image to use from useTechStack() based on value of gridSize
  // moved here for better performance over being inside map() below
  // as to not check the value of gridSize on every iteration!
  const logoSize = gridSize === 'small' ? 'logoSmall' : 'logoMedium';

  return (
    <div css={styles(gridSize)} {...props}>
      {techStack
        .filter(tech => techStackToBeDisplayed.includes(tech.title))
        .map(tech => (
          <div key={tech.id}>
            <Img fixed={tech[logoSize]} alt={tech.alt} />
            <p>{tech.title}</p>
          </div>
        ))}
    </div>
  );
};

TechStackGrid.defaultProps = {
  techStackToBeDisplayed: [],
  gridSize: 'small',
};

export default TechStackGrid;
