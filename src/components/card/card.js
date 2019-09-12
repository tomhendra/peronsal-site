import React from 'react';
import { cardStyles } from './card-styles';

export const Card = ({ icon, title, text }) => (
  <div css={cardStyles}>
    <img src={icon} alt={title} />
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);
