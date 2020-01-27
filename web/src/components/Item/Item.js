// import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import {
  childrenPropType,
  gridPropType,
  sizePropType,
  flexDirectionPropType,
  justifyContentPropType,
  alignItemsPropType,
  alignContentPropType,
} from '../../utils/shared-prop-types';

import {
  getSpacingValues,
  withMediaQueries,
} from '../../assets/styles/style-helpers';

// ....................styles....................

function styles({
  gridStart,
  gridSpan,
  gridEnd,
  spacingTop,
  spacingRight,
  spacingBottom,
  spacingLeft,
  flexDirection,
  justifyContent,
  alignItems,
  alignContent,
  theme,
}) {
  const baseStyles = {
    label: 'item',
    display: 'flex',
    flexWrap: 'wrap',
    zIndex: theme.zIndex.default,
  };

  const gridStyles = {
    gridArea:
      gridSpan && Array.isArray(gridSpan)
        ? gridSpan.map(val => `span 1 / span ${val}`)
        : `span 1 / span ${gridSpan}`,
    gridColumnStart: gridStart && gridStart,
    gridColumnEnd: gridEnd && gridEnd,
  };

  const spacingStyles = {
    marginTop: spacingTop && getSpacingValues(spacingTop, theme),
    paddingRight: spacingRight && getSpacingValues(spacingRight, theme),
    marginBottom: spacingBottom && getSpacingValues(spacingBottom, theme),
    paddingLeft: spacingLeft && getSpacingValues(spacingLeft, theme),
  };

  const flexboxStyles = {
    flexDirection,
    justifyContent,
    alignItems,
    alignContent,
  };

  return withMediaQueries(theme)({
    ...baseStyles,
    ...gridStyles,
    ...spacingStyles,
    ...flexboxStyles,
  });
}

// ....................component....................

const Item = styled.div(styles);

// ....................propTypes....................

Item.propTypes = {
  gridStart: gridPropType,
  gridEnd: gridPropType,
  gridSpan: gridPropType,
  spacingTop: sizePropType,
  spacingRight: sizePropType,
  spacingBottom: sizePropType,
  spacingLeft: sizePropType,
  flexDirection: flexDirectionPropType,
  justifyContent: justifyContentPropType,
  alignItems: alignItemsPropType,
  alignContent: alignContentPropType,
  children: childrenPropType,
};

Item.defaultProps = {
  gridStart: null,
  gridSpan: null,
  gridEnd: null,
  spacingTop: null,
  spacingRight: null,
  spacingBottom: null,
  spacingLeft: null,
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  alignContent: 'stretch',
  children: null,
};

export default withTheme(Item);
