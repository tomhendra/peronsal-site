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
      childMargin: 'marginBottom',
      childNoMargin: 'last',
    },

    [ROW]: {
      childMargin: 'marginRight',
      childNoMargin: 'last',
    },

    [COLUMN_REVERSE]: {
      childMargin: 'marginBottom',
      childNoMargin: 'first',
    },

    [ROW_REVERSE]: {
      childMargin: 'marginRight',
      childNoMargin: 'first',
    },
  };

  const { childMargin, childNoMargin } = directionMap[direction];
  const noMarginSelector = `& > *:not(:${childNoMargin}-of-type)`;

  const marginStyles = {
    [noMarginSelector]: {
      [childMargin]: theme.spacings.charlie,
    },
  };

  return withMediaQueries(theme)({
    ...baseStyles,
    ...marginStyles,
  });
}

// const directionVariants = {
//   column: {
//     '& > *:not(:last-of-type)': {
//       marginBottom: theme.spacings.charlie,
//     },
//   },

//   row: {
//     '& > *:not(:last-of-type)': {
//       marginRight: theme.spacings.charlie,
//     },
//   },

//   'column-reverse': {
//     '& > *:not(:first-of-type)': {
//       marginBottom: theme.spacings.charlie,
//     },
//   },

//   'row-reverse': {
//     '& > *:not(:first-of-type)': {
//       marginRight: theme.spacings.charlie,
//     },
//   },
// };

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
