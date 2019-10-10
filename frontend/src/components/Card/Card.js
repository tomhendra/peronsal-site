import React from 'react';

import { colors, fontsizes, sizes } from '../../assets/styles';

/**
 * `....................styles....................`
 */

const styles = {
  alignItems: 'center',
  background: colors.neutral.dark2,
  border: `1px solid ${colors.neutral.dark4}`,
  borderRadius: '6px',
  display: 'flex',
  flexDirection: 'column',
  padding: `${sizes.large1} ${sizes.medium2} ${sizes.medium3} ${sizes.medium2}`,

  img: {
    marginBottom: sizes.medium1,
    width: sizes.large1,
  },

  h3: {
    color: colors.primary.light2,
    fontSize: fontsizes.medium2,
    marginBottom: sizes.medium2,
    textTransform: 'uppercase',
  },
};

/**
 * `....................component....................`
 */

const Card = ({ icon, title, text, ...props }) => (
  <div css={styles} {...props}>
    <img src={icon} alt={title} />
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);

export default Card;
