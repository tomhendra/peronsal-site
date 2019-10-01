import React from 'react';
import { Link } from 'gatsby';

import { colors, fontsizes } from '../../assets/styles';

/**
 * `....................styles....................`
 */

const styles = {
  color: colors.primary.light3,
  fontSize: fontsizes.small,
  textDecoration: 'none',
  textTransform: 'uppercase',
};

/**
 * `....................component....................`
 */

const ReadLink = props => <Link css={styles} {...props} />;

export default ReadLink;
