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
  const allStack = useTechStack();
  // if array is supplied to stack prop, perform filter.
  const filteredStack =
    stack && allStack.filter(tech => stack.includes(tech.title));
  // verify whether complete stack or filtered stack should be displayed
  const stackToDisplay = !stack ? allStack : filteredStack;

  // specify categories of technology to display grouped together
  const orderToDisplay = [
    'Languages',
    'Libraries',
    'Frameworks',
    'Testing',
    'Tools',
    'CMS',
    'Databases',
    'Deployment',
  ];
  // sort stack based on category
  const stackGroupedByCategory = stackToDisplay.sort((a, b) => {
    const orderToDisplayA = orderToDisplay.indexOf(a.category);
    const orderToDisplayB = orderToDisplay.indexOf(b.category);

    return orderToDisplayA - orderToDisplayB;
  });
  // verify which size image to use from useTechStack() based on value of gridSize
  // moved here for better performance over being inside map() below
  // as to not check the value of gridSize on every iteration!
  const logoSize = gridSize === ALPHA ? 'logoMedium' : 'logoLarge';

  return (
    <TechStackContainer gridSize={gridSize}>
      {stackGroupedByCategory.map(tech => (
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
