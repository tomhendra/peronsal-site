import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { withMediaQueries } from '../../assets/styles/style-helpers';

// ....................styles....................

function styles({ direction, theme }) {
  const baseStyles = {
    display: 'flex',
    flexDirection: direction,
  };

  const COLUMN = 'column';
  const ROW = 'row';
  const COLUMN_REVERSE = 'column-reverse';
  const ROW_REVERSE = 'row-reverse';

  const directionMap = {
    [COLUMN]: {
      childNoMargin: 'last',
      childMarginDirection: 'marginBottom',
      childMarginValues: [
        theme.spacings.bravo,
        theme.spacings.charlie,
        theme.spacings.charlie,
        theme.spacings.charlie,
        theme.spacings.charlie,
      ],
    },

    [ROW]: {
      childNoMargin: 'last',
      childMarginDirection: 'marginRight',
      childMarginValues: [
        theme.spacings.bravo,
        theme.spacings.charlie,
        theme.spacings.charlie,
        theme.spacings.charlie,
        theme.spacings.charlie,
      ],
    },

    [COLUMN_REVERSE]: {
      childNoMargin: 'first',
      childMarginDirection: 'marginBottom',
      childMarginValues: [
        theme.spacings.bravo,
        theme.spacings.charlie,
        theme.spacings.charlie,
        theme.spacings.charlie,
        theme.spacings.charlie,
      ],
    },

    [ROW_REVERSE]: {
      childNoMargin: 'first',
      childMarginDirection: 'marginRight',
      childMarginValues: [
        theme.spacings.bravo,
        theme.spacings.charlie,
        theme.spacings.charlie,
        theme.spacings.charlie,
        theme.spacings.charlie,
      ],
    },
  };

  const {
    childNoMargin,
    childMarginDirection,
    childMarginValues,
  } = directionMap[direction];

  const noMarginSelector = `& > *:not(:${childNoMargin}-of-type)`;

  const marginStyles = {
    [noMarginSelector]: {
      [childMarginDirection]: childMarginValues,
    },
  };

  /*
  if (direction === column || row)
  '& > *:not(:last-of-type)': {
    marginBottom: [] // if direction === column
    marginRight: [] // if direction === row
  }

  if (direction === column-reverse || row-reverse)
  '& > *:not(:first-of-type)': {
    marginBottom: [] // if direction === column reverse
    marginRight: [] // if direction === row reverse
  }

// check if direction is an array
// - IF array, map over and generate object

// - if object key already exists, object entry becomes array and
//   - if direction match, another spacing value added
//   - else 0 added to array

*/
  return withMediaQueries(theme)({
    ...baseStyles,
    ...marginStyles,
  });
}

// ....................component....................

const ButtonGroup = styled.div(styles);

// ....................propTypes....................

const directionOptions = ['column', 'row', 'column-reverse', 'row-reverse'];
ButtonGroup.propTypes = {
  direction: PropTypes.oneOfType([
    PropTypes.oneOf(directionOptions),
    PropTypes.arrayOf(PropTypes.oneOf(directionOptions)),
  ]),
};

ButtonGroup.defaultProps = {
  direction: 'row',
};

export default ButtonGroup;
