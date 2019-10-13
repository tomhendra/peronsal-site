import React from 'react';
import { withTheme } from 'emotion-theming';

import logoSVG from '../../assets/images/logo/tomhendra-logo-no-bg.svg';

/**
 * `....................styles....................`
 */

const styles = theme => ({
  img: {
    height: theme.spacings.foxtrot,
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
