import React from 'react';

import { useTechStack } from '../../hooks';

import {
  StyledGrid,
  StyledContainer,
  StyledTooltip,
  StyledImg,
} from './components';
import { Tech } from '../../utils/types';

type Props = {
  gridSize: 'alpha' | 'delta';
  stack?: string[];
  noSpacingBottom?: boolean;
};

// Component must be passed an array of techstack titles
export const TechStack = ({ gridSize, stack, noSpacingBottom }: Props) => {
  const allStack = useTechStack();
  // if array is supplied to stack prop, perform filter.
  const filteredStack =
    stack && allStack.filter((tech: Tech) => stack.includes(tech.title));
  // verify whether complete stack or filtered stack should be displayed
  const stackToDisplay = !stack ? allStack : filteredStack;
  // specify order of categories MANUALLY(!!) to display techstack grouped by category
  const orderToDisplay = [
    'Languages',
    'Libraries',
    'Frameworks',
    'CSS',
    'Testing',
    'Tools',
    'CMS',
    'Databases',
    'Deployment',
  ];
  // sort stack based on category
  const stackGroupedByCategory = stackToDisplay.sort((a: Tech, b: Tech) => {
    const orderToDisplayA = orderToDisplay.indexOf(a.category);
    const orderToDisplayB = orderToDisplay.indexOf(b.category);

    return orderToDisplayA - orderToDisplayB;
  });
  // verify which size image to use from useTechStack() based on value of gridSize
  // moved here for better performance over being inside map() below
  // as to not check the value of gridSize on every iteration!
  const logoSize = gridSize === 'alpha' ? 'logoMedium' : 'logoLarge';

  return (
    <StyledGrid gridSize={gridSize} noSpacingBottom={noSpacingBottom}>
      {stackGroupedByCategory.map((tech: Tech) => (
        <StyledContainer key={tech.id}>
          <StyledTooltip>{tech.title}</StyledTooltip>
          <StyledImg fixed={tech[logoSize]} alt={tech.alt} />
        </StyledContainer>
      ))}
    </StyledGrid>
  );
};
