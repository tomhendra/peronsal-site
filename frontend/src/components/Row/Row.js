import React from 'react';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

/**
 * `....................styles....................`
 */

const baseStyles = (
  start,
  end,
  topSpacing,
  rightSpacing,
  bottomSpacing,
  leftSpacing,
  theme,
) => ({
  label: 'Row',
  gridColumnStart: start,
  gridColumnEnd: end,
  marginTop: theme.spacings[topSpacing],
  paddingRight: theme.spacings[rightSpacing],
  marginBottom: theme.spacings[bottomSpacing],
  paddingLeft: theme.spacings[leftSpacing],
});

/**
 * `....................component....................`
 */

const Row = ({
  start,
  end,
  topSpacing,
  rightSpacing,
  bottomSpacing,
  leftSpacing,
  theme,
  ...props
}) => {
  return (
    <div
      css={baseStyles(
        start,
        end,
        topSpacing,
        rightSpacing,
        bottomSpacing,
        leftSpacing,
        theme,
      )}
      {...props}
    />
  );
};

Row.defaultProps = {
  start: 1,
  end: 12,
  topSpacing: null,
  rightSpacing: null,
  bottomSpacing: null,
  leftSpacing: null,
};

Row.propTypes = {
  children: PropTypes.node.isRequired,
  start: PropTypes.number,
  end: PropTypes.number,
  topSpacing: PropTypes.string,
  rightSpacing: PropTypes.string,
  bottomSpacing: PropTypes.string,
  leftSpacing: PropTypes.string,
};

export default withTheme(Row);
