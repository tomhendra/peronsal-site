import React from 'react';
import { css } from '@emotion/core';
import { Social } from '../social';
import { footerStyles } from './footer-styles';

export const Footer = () => {
  return (
    <footer css={footerStyles}>
      <p>Web developer</p>
      <Social />
    </footer>
  );
};
