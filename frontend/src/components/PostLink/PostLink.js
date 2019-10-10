import React from 'react';
import { Link } from 'gatsby';

import { colors, fontsizes } from '../../assets/styles';

/**
 * `....................styles....................`
 */

const styles = {
  color: colors.neutral.light4,
  fontSize: fontsizes.large1,
  fontWeight: 'bold',
  lineHeight: 1.2,
  textDecoration: 'none',
};

/**
 * `....................component....................`
 */

const PostLink = props => <Link css={styles} {...props} />;

export default PostLink;
