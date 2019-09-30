import React from 'react';
import { tooltipStyles } from './tooltip-styles';

export const Tooltip = ({ type, ...rest }) => {
  const styleProps = { type, defaultProps };

  return (
    <div css={tooltipStyles({ ...styleProps })}>
      <div {...rest} />
    </div>
  );
};

const defaultProps = (Tooltip.defaultProps = {
  type: 'alert',
});
