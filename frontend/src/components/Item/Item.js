import React from 'react';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

import { childrenPropType } from '../../utils/shared-prop-types';

import { sizes } from '../../assets/styles/constants';

/**
 * `....................styles....................`
 */

const styles = (
  gridStart,
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
) => ({
  label: 'Item',
  display: 'flex',
  flexWrap: 'wrap',
  gridColumnStart: gridStart,
  gridColumnEnd: gridEnd,
  marginTop: theme.spacings[spacingTop],
  paddingRight: theme.spacings[spacingRight],
  marginBottom: theme.spacings[spacingBottom],
  paddingLeft: theme.spacings[spacingLeft],
  flexDirection,
  justifyContent,
  alignItems,
  alignContent,
});

/**
 * `....................component....................`
 */

const Item = ({
  gridStart,
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
  children,
}) => (
  <div
    css={styles(
      gridStart,
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
    )}
  >
    {children}
  </div>
);

const spacingOptions = Object.values(sizes);

Item.propTypes = {
  gridStart: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'auto']),
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
  gridStart: 1,
  gridEnd: 13,
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
