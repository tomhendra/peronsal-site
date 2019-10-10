import React from 'react';

import { colors, sizes } from '../../assets/styles';

/**
 * `....................styles....................`
 */

const styles = {
  maxWidth: '50%',

  h1: {
    marginBottom: sizes.medium2,
  },

  h2: {
    color: colors.primary.light3,
    marginBottom: sizes.small3,
  },
};

/**
 * `....................component....................`
 */

const PageText = ({ mainHeading, subHeading, paragraph, ...props }) => (
  <div css={styles} {...props}>
    <h1>{mainHeading}</h1>
    <h2>{subHeading}</h2>
    <p>{paragraph}</p>
  </div>
);

export default PageText;
