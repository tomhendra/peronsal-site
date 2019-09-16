import React from 'react';
import { pageCounterStyles } from './page-counter-styles';
import mouseSVG from '../../assets/images/icons/mouse.svg';

export const PageCounter = ({ pageNumber, totalPages }) => (
  <div css={pageCounterStyles}>
    <div>
      <p>{pageNumber}</p>
      <p>/ {totalPages}</p>
    </div>
    <img src={mouseSVG} alt="Mouse icon" />
  </div>
);
