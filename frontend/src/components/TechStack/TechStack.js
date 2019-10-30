import React from 'react';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import useTechStack from '../../hooks/useTechStack';

import { sizes } from '../../assets/styles/constants';

const { ALPHA, DELTA } = sizes;

/**
 * `....................styles....................`
 */

const logoStyles = {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
};

const containerStyles = ({ gridSize, theme }) => {
  const baseStyles = {
    display: 'grid',
    paddingTop: theme.spacings.charlie,
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

// In order to use this component it must be passed an array of
// strings which must match the title specified in Sanity studio desk
// exactly. !! could make this friendlier to typos later using RegEx ?

const TechStackContainer = styled.div(containerStyles);
const LogoContainer = styled.div(logoStyles);

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
          <LogoContainer key={tech.id}>
            <Img fixed={tech[logoSize]} alt={tech.alt} />
          </LogoContainer>
        ))}
    </TechStackContainer>
  );
};

/**
 * `....................propTypes....................`
 */

TechStack.defaultProps = {
  techStackToBeDisplayed: [],
  gridSize: ALPHA,
};

export default withTheme(TechStack);
