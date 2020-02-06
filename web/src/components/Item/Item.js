// import React from 'react';
import styled from '@emotion/styled';

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
  spacingTop,
  spacingRight,
  spacingBottom,
  spacingLeft,
  flexDirection,
  justifyContent,
  alignItems,
  alignContent,
  gridColStart,
  gridColEnd,
  gridColSpan,
  gridRowStart,
  gridRowEnd,
  gridRowSpan,
  theme,
}) {
  const baseStyles = {
    label: 'item',
    display: 'flex',
    flexWrap: 'wrap',
    zIndex: theme.zIndex.default,
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

  function getGridSpanValues(spanValue) {
    return Array.isArray(spanValue)
      ? spanValue.map(val => `span ${val}`)
      : `span ${spanValue}`;
  }

  const gridStyles = {
    gridColumnStart: gridColStart && gridColStart,
    gridRowStart: gridRowStart && gridRowStart,
    gridColumnEnd:
      gridColEnd || (gridColSpan && getGridSpanValues(gridColSpan)),
    gridRowEnd: gridRowEnd || (gridRowSpan && getGridSpanValues(gridRowSpan)),
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
  spacingTop: sizePropType,
  spacingRight: sizePropType,
  spacingBottom: sizePropType,
  spacingLeft: sizePropType,
  flexDirection: flexDirectionPropType,
  justifyContent: justifyContentPropType,
  alignItems: alignItemsPropType,
  alignContent: alignContentPropType,
  gridColStart: gridPropType,
  gridColEnd: gridPropType,
  gridColSpan: gridPropType,
  gridRowStart: gridPropType,
  gridRowEnd: gridPropType,
  gridRowSpan: gridPropType,
  children: childrenPropType,
};

Item.defaultProps = {
  spacingTop: null,
  spacingRight: null,
  spacingBottom: null,
  spacingLeft: null,
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  alignContent: 'stretch',
  gridColStart: null,
  gridColSpan: null,
  gridColEnd: null,
  gridRowStart: null,
  gridRowSpan: null,
  gridRowEnd: null,
  children: null,
};

export default Item;
