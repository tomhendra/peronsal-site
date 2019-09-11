import React from 'react';
import { pageTextStyles } from './page-text-styles';

export const PageText = ({ mainHeading, subHeading, paragraph }) => (
  <div css={pageTextStyles}>
    <h1>{mainHeading}</h1>
    <h2>{subHeading}</h2>
    <p>{paragraph}</p>
  </div>
);
