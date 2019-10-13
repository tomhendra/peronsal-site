import React from 'react';
import { withTheme } from 'emotion-theming';

import mouseSVG from '../../assets/icons/mouse.svg';

/**
 * `....................styles....................`
 */

const styles = theme => ({
  alignItems: 'flex-end',
  alignSelf: 'flex-end',
  display: 'flex',
  fontFamily: theme.fontStack.default,
  flexDirection: 'column',
  fontSize: theme.typography.text.bravo.fontSize,
  maxWidth: theme.spacings.foxtrot,

  'div > *': {
    lineHeight: 1,
    textAlign: 'right',

    '&:first-of-type': {
      color: theme.colors.p700,
      fontSize: theme.typography.headings.delta.fontSize,
      lineHeight: 1.1,
      marginRight: -1,
    },
  },

  img: {
    marginTop: theme.spacings.bravo,
    width: theme.spacings.echo,
  },
});

/**
 * `....................component....................`
 */

const PageCounter = ({ pageNumber, totalPages, theme, ...props }) => (
  <div css={styles(theme)} {...props}>
    <div>
      <p>{pageNumber}</p>
      <p>{totalPages}</p>
    </div>
    <img src={mouseSVG} alt="Mouse icon" />
  </div>
);

export default withTheme(PageCounter);
