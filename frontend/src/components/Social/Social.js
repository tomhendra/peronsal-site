import React from 'react';
import { withTheme } from 'emotion-theming';

import githubSVG from '../../assets/icons/github.svg';
import linkedinSVG from '../../assets/icons/linkedin.svg';
import twitterSVG from '../../assets/icons/twitter.svg';

/**
 * `....................styles....................`
 */

const styles = theme => ({
  display: 'flex',
  flexDirection: 'column',
  minWidth: theme.spacings.hotel,

  '> *': {
    width: '1.8rem',
    ':not(:first-of-type)': {
      marginTop: theme.spacings.charlie,
    },
  },
});

/**
 * `....................component....................`
 */

const Social = ({ theme, ...props }) => (
  <div css={styles(theme)} {...props}>
    <a href="https://github.com/tomhendra" target="blank">
      <img src={githubSVG} alt="GitHub logo" />
    </a>
    <a href="https://twitter.com/TomHendra" target="blank">
      <img src={twitterSVG} alt="Twitter logo" />
    </a>
    <a href="https://www.linkedin.com/in/tom-hendra/" target="blank">
      <img src={linkedinSVG} alt="LinkedIn logo" />
    </a>
  </div>
);

export default withTheme(Social);
