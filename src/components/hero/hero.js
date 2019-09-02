import React from 'react';
import { heroStyles } from './hero-styles';

export const Hero = ({ mainHeading, subHeading }) => (
  <div css={heroStyles}>
    <h1>{mainHeading}</h1>
    <h2>{subHeading}</h2>
  </div>
);
