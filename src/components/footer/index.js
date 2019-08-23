import React from 'react';
import { css } from '@emotion/core';

const Footer = () => (
  <>
    <footer
      css={css`
        background-color: #eee;
        border-top: 1px solid #ddd;
        padding: 0.5rem calc((100vw - 550px - 0.5rem) / 2);
      `}
    >
      &copy; {new Date().getFullYear()} Tom Hendra. Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
      {` `}
      &amp; 💙
    </footer>
  </>
);

export default Footer;
