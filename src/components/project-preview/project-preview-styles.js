import { css } from '@emotion/core';

export const projectPreviewStyles = () =>
  css({
    display: 'flex',

    '> *': {
      width: '50%',
    },
  });
