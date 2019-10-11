import React from 'react';

import { colors, fontsizes, sizes } from '../../assets/styles';
import mouseSVG from '../../assets/images/icons/mouse.svg';

/**
 * `....................styles....................`
 */

const styles = {
  alignItems: 'flex-end',
  alignSelf: 'flex-end',
  display: 'flex',
  fontFamily: 'Lato, sans-serif',
  flexDirection: 'column',
  fontSize: fontsizes.medium1,
  maxWidth: sizes.medium2,

  'div > *': {
    lineHeight: 1,
    textAlign: 'right',

    '&:first-of-type': {
      color: colors.primary.light3,
      fontSize: fontsizes.large1,
      lineHeight: 1.1,
      marginRight: -1,
    },
  },

  img: {
    marginTop: sizes.small2,
    width: sizes.medium1,
  },
};

/**
 * `....................component....................`
 */

const PageCounter = ({ pageNumber, totalPages, ...props }) => (
  <div css={styles} {...props}>
    <div>
      <p>{pageNumber}</p>
      <p>{totalPages}</p>
    </div>
    <img src={mouseSVG} alt="Mouse icon" />
  </div>
);

export default PageCounter;
