import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import {
  withMediaQueries,
  getSpacingValues,
} from '../../assets/styles/style-helpers';

import { sizes } from '../../assets/styles/style-enums';

const { BRAVO, CHARLIE } = sizes;

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
      childMarginValues: getSpacingValues([BRAVO, CHARLIE], theme),
    },

    [ROW]: {
      childNoMargin: 'last',
      childMarginDirection: 'marginRight',
      childMarginValues: getSpacingValues([BRAVO, CHARLIE], theme),
    },

    [COLUMN_REVERSE]: {
      childNoMargin: 'first',
      childMarginDirection: 'marginBottom',
      childMarginValues: getSpacingValues([BRAVO, CHARLIE], theme),
    },

    [ROW_REVERSE]: {
      childNoMargin: 'first',
      childMarginDirection: 'marginRight',
      childMarginValues: getSpacingValues([BRAVO, CHARLIE], theme),
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
