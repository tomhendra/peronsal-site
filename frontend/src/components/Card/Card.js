import React from 'react';
import { withTheme } from 'emotion-theming';

/**
 * `....................styles....................`
 */

const styles = theme => ({
  alignItems: 'center',
  background: theme.colors.n100,
  border: `${theme.borderWidth.alpha} solid ${theme.colors.n300}`,
  borderRadius: theme.borderRadius.charlie,
  display: 'flex',
  flexDirection: 'column',
  // eslint-disable-next-line max-len
  padding: `${theme.spacings.hotel} ${theme.spacings.foxtrot} ${theme.spacings.golf} ${theme.spacings.echo}`,

  img: {
    marginBottom: theme.spacings.echo,
    width: theme.spacings.hotel,
  },

  h3: {
    color: theme.colors.p600,
    fontSize: theme.typography.headings.delta.fontSize,
    marginBottom: theme.spacings.foxtrot,
    textTransform: 'uppercase',
  },
});

/**
 * `....................component....................`
 */

const Card = ({ icon, title, text, theme, ...props }) => (
  <div css={styles(theme)} {...props}>
    <img src={icon} alt={title} />
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);

export default withTheme(Card);
