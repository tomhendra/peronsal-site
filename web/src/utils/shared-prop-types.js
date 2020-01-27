import PropTypes from 'prop-types';

import {
  positions,
  sizes,
  colors,
  shadows,
  variants,
  icons,
} from '../assets/styles/constants';

// positions propType
const positionOptions = Object.values(positions);
export const positionPropType = PropTypes.oneOfType([
  PropTypes.oneOf([...positionOptions]),
  PropTypes.arrayOf(PropTypes.oneOf([...positionOptions])),
]);

// size propType
const sizeOptions = Object.values(sizes);
export const sizePropType = PropTypes.oneOfType([
  PropTypes.oneOf([...sizeOptions, 0]),
  PropTypes.arrayOf(PropTypes.oneOf([...sizeOptions, 0])),
]);

// colour propType
const colorOptions = Object.values(colors);
export const colorPropType = PropTypes.oneOfType([
  PropTypes.oneOf([...colorOptions]),
  PropTypes.arrayOf(PropTypes.oneOf([...colorOptions])),
]);

// shadow propType
const shadowOptions = Object.values(shadows);
export const shadowPropType = PropTypes.oneOfType([
  PropTypes.oneOf([...shadowOptions]),
  PropTypes.arrayOf(PropTypes.oneOf([...shadowOptions])),
]);

// variant propType
const variantOptions = Object.values(variants);
export const variantPropType = PropTypes.oneOfType([
  PropTypes.oneOf([...variantOptions]),
  PropTypes.arrayOf(PropTypes.oneOf([...variantOptions])),
]);

// icon propType
const iconOptions = Object.values(icons);
export const iconPropType = PropTypes.oneOfType([
  PropTypes.oneOf([...iconOptions]),
  PropTypes.arrayOf(PropTypes.oneOf([...iconOptions])),
]);

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
