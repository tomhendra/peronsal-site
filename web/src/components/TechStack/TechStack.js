import React from 'react';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

import useTechStack from '../../hooks/useTechStack';

import { sizes } from '../../assets/styles/constants';
import { withMediaQueries } from '../../assets/styles/style-helpers';

const { ALPHA, DELTA } = sizes;

// ....................styles....................

const containerStyles = ({ gridSize, theme }) => {
  const baseStyles = {
    display: 'grid',
    marginBottom: [theme.spacings.foxtrot, theme.spacings.charlie],
  };

  const gridStyles = {
    [ALPHA]: {
      gridTemplateColumns: 'repeat(8, 1fr)',
      gap: theme.spacings.charlie,
    },
    [DELTA]: {
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: `${theme.spacings.foxtrot} ${theme.spacings.juliett}`,
    },
  };

  const gridConfig = gridStyles[gridSize];

  return withMediaQueries(theme)({
    ...baseStyles,
    ...gridConfig,
  });
};

// ....................component....................

const TechStackContainer = styled.div(containerStyles);
// Component must be passed an array of strings which must match the title
// specified in Sanity studio desk exactly !!
// recommend to create enums if more manual use is required.
function TechStack({ gridSize, stack }) {
  const allTechStack = useTechStack();
  // if array is supplied to stack prop, perform filter.
  const filteredTechStack =
    stack && allTechStack.filter(tech => stack.includes(tech.title));
  // verify whether complete stack or filtered stack should be displayed
  const stackToDisplay = !stack ? allTechStack : filteredTechStack;
  // verify which size image to use from useTechStack() based on value of gridSize
  // moved here for better performance over being inside map() below
  // as to not check the value of gridSize on every iteration!
  const logoSize = gridSize === ALPHA ? 'logoMedium' : 'logoLarge';

  return (
    <TechStackContainer gridSize={gridSize}>
      {stackToDisplay.map(tech => (
        <Img fixed={tech[logoSize]} alt={tech.alt} key={tech.id} />
      ))}
    </TechStackContainer>
  );
}

// ....................propTypes....................

TechStack.propTypes = {
  stack: PropTypes.arrayOf(PropTypes.string),
  gridSize: PropTypes.oneOf([ALPHA, DELTA]),
};

TechStack.defaultProps = {
  stack: null,
  gridSize: ALPHA,
};

export default withTheme(TechStack);
