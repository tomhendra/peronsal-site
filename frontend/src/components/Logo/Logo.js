import React from 'react';
import { withTheme } from 'emotion-theming';

import logoSVG from '../../assets/icons/tomhendra-no-bg.svg';

/**
 * `....................styles....................`
 */

const styles = theme => ({
  label: 'Logo',
  img: {
    height: theme.iconSizes.foxtrot,
  },
});

/**
 * `....................component....................`
 */

const Logo = ({ theme, ...props }) => (
  <div css={styles(theme)} {...props}>
    <img src={logoSVG} alt="Tom Hendra logo" />
  </div>
);

export default withTheme(Logo);
