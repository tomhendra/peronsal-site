import React from 'react';
import { withTheme } from 'emotion-theming';

import Icon from '../../../Icon';

import { colors, icons, sizes } from '../../../../assets/styles/constants';

const { NEUTRAL } = colors;
const { TOGGLELEFT } = icons;
const { GOLF } = sizes;

/**
 * `....................styles....................`
 */

/**
 * `....................component....................`
 */

const Switch = () => (
  <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
    <Icon type={TOGGLELEFT} color={NEUTRAL} size={GOLF} />
  </div>
);

export default withTheme(Switch);
