import React from 'react';

import { sizes } from '../../assets/styles';
import logoSVG from '../../assets/images/logo/tomhendra-logo-no-bg.svg';

/**
 * `....................styles....................`
 */

const styles = {
  img: {
    height: sizes.medium2,
  },
};

/**
 * `....................component....................`
 */

const Logo = () => (
  <div css={styles}>
    <img src={logoSVG} alt="Tom Hendra logo" />
  </div>
);

export default Logo;
