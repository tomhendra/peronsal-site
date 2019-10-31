// import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

import { childrenPropType } from '../../utils/shared-prop-types';

import { sizes } from '../../assets/styles/constants';

/**
 * `....................styles....................`
 */

const styles = ({
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
}) => {
  const baseStyles = {
    label: 'item',
    display: 'flex',
    flexWrap: 'wrap',
  };

  const gridStyles = {
    gridArea: gridSpan && `span 1 / span ${gridSpan}`,
    gridColumnStart: gridStart && gridStart,
    gridColumnEnd: gridEnd && gridEnd,
  };

  const spacingStyles = {
    marginTop: theme.spacings[spacingTop],
    paddingRight: theme.spacings[spacingRight],
    marginBottom: theme.spacings[spacingBottom],
    paddingLeft: theme.spacings[spacingLeft],
  };

  const flexboxStyles = {
    flexDirection,
    justifyContent,
    alignItems,
    alignContent,
  };

  return {
    ...baseStyles,
    ...gridStyles,
    ...spacingStyles,
    ...flexboxStyles,
  };
};

/**
 * `....................component....................`
 */

const Item = styled.div(styles);

/**
 * `....................propTypes....................`
 */

const spacingOptions = Object.values(sizes);

Item.propTypes = {
  gridStart: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'auto']),
  gridSpan: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]),
  gridEnd: PropTypes.oneOf([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 'auto']),
  spacingTop: PropTypes.oneOf([...spacingOptions]),
  spacingRight: PropTypes.oneOf([...spacingOptions]),
  spacingBottom: PropTypes.oneOf([...spacingOptions]),
  spacingLeft: PropTypes.oneOf([...spacingOptions]),
  flexDirection: PropTypes.oneOf(['column', 'row']),
  justifyContent: PropTypes.oneOf([
    'flex-start', // default
    'flex-end',
    'center',
    'space-around',
    'space-between',
  ]),
  alignItems: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'stretch', // default
    'baseline',
  ]),
  alignContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'stretch', // default
    'space-around',
    'space-between',
  ]),
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
