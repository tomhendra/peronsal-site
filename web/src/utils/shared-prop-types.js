import PropTypes from 'prop-types';

import { sizes } from '../assets/styles/constants';

// children propType
export const childrenPropType = PropTypes.oneOfType([
  PropTypes.node,
  PropTypes.arrayOf(PropTypes.node),
]);

// grid propType
const gridOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 'auto'];
export const gridPropType = PropTypes.oneOfType([
  PropTypes.oneOf(gridOptions),
  PropTypes.arrayOf(PropTypes.oneOf(gridOptions)),
]);

// spacing propType
const spacingOptions = Object.values(sizes);
export const spacingPropType = PropTypes.oneOfType([
  PropTypes.oneOf([...spacingOptions, 0]),
  PropTypes.arrayOf(PropTypes.oneOf([...spacingOptions, 0])),
]);

// flexbox propTypes
// flex direction
const flexDirectionOptions = ['column', 'row'];
export const flexDirectionPropType = PropTypes.oneOfType([
  PropTypes.oneOf(flexDirectionOptions),
  PropTypes.arrayOf(PropTypes.oneOf(flexDirectionOptions)),
]);

// justify content
const justifyContentOptions = [
  'flex-start', // default
  'flex-end',
  'center',
  'space-around',
  'space-between',
];
export const justifyContentPropType = PropTypes.oneOfType([
  PropTypes.oneOf(justifyContentOptions),
  PropTypes.arrayOf(PropTypes.oneOf(justifyContentOptions)),
]);

// align items
const alignItemsOptions = [
  'flex-start',
  'flex-end',
  'center',
  'stretch', // default
  'baseline',
];
export const alignItemsPropType = PropTypes.oneOfType([
  PropTypes.oneOf(alignItemsOptions),
  PropTypes.arrayOf(PropTypes.oneOf(alignItemsOptions)),
]);

// align content
const alignContentOptions = [
  'flex-start',
  'flex-end',
  'center',
  'stretch', // default
  'space-around',
  'space-between',
];
export const alignContentPropType = PropTypes.oneOfType([
  PropTypes.oneOf(alignContentOptions),
  PropTypes.arrayOf(PropTypes.oneOf(alignContentOptions)),
]);
