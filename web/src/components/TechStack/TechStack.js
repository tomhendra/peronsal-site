import React from 'react';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

import useTechStack from '../../hooks/useTechStack';

import { sizes } from '../../assets/styles/constants';

const { ALPHA, DELTA } = sizes;

/**
 * `....................styles....................`
 */

const containerStyles = ({ gridSize, theme }) => {
  const baseStyles = {
    display: 'grid',
    paddingBottom: theme.spacings.charlie,
  };

  const gridStyles = {
    [ALPHA]: {
      gridTemplateColumns: 'repeat(8, 1fr)',
      gap: theme.spacings.charlie,
    },
    [DELTA]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: `${theme.spacings.foxtrot} ${theme.spacings.kilo}`,
    },
  };

  const gridConfig = gridStyles[gridSize];

  return {
    ...baseStyles,
    ...gridConfig,
  };
};

/**
 * `....................component....................`
 */

const TechStackContainer = styled.div(containerStyles);

// Component must be passed an array of strings which must match the title
// specified in Sanity studio desk exactly !!
// recommend to create enums if more manual use is required.
const TechStack = ({ gridSize, techStackToDisplay }) => {
  const allTechStack = useTechStack();
  // verify which size image to use from useTechStack() based on value of gridSize
  // moved here for better performance over being inside map() below
  // as to not check the value of gridSize on every iteration!
  const logoSize = gridSize === ALPHA ? 'logoMedium' : 'logoLarge';

  return (
    <TechStackContainer gridSize={gridSize}>
      {allTechStack
        .filter(tech => techStackToDisplay.includes(tech.title))
        .map(tech => (
          <Img fixed={tech[logoSize]} alt={tech.alt} key={tech.id} />
        ))}
    </TechStackContainer>
  );
};

/**
 * `....................propTypes....................`
 */

TechStack.propTypes = {
  techStackToDisplay: PropTypes.arrayOf(PropTypes.string),
  gridSize: PropTypes.oneOf([ALPHA, DELTA]),
};

TechStack.defaultProps = {
  techStackToDisplay: [],
  gridSize: ALPHA,
};

export default withTheme(TechStack);
