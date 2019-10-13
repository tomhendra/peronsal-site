import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { withTheme } from 'emotion-theming';

import PostLink from '../PostLink';
import ReadLink from '../ReadLink';

/**
 * `....................styles....................`
 */

const styles = theme => ({
  border: `${theme.borderWidth.alpha} solid ${theme.colors.n300}`,
  borderRadius: theme.borderRadius.charlie,
  height: theme.spacings.november,
  overflow: 'hidden',

  '& > div': {
    height: '50%',
    ':first-of-type': {
      background: theme.colors.p000,
      isolation: 'isolate',
      overflow: 'hidden',
      position: 'relative',
    },
    ':last-of-type': {
      background: theme.colors.n100,
      justifyContent: 'space-between',
      flexDirection: 'column',
      display: 'flex',
      padding: theme.spacings.foxtrot,
    },

    h3: {
      left: 0,
      margin: theme.spacings.foxtrot,
      marginBottom: 0,
      position: 'absolute',
      top: 0,
      zIndex: 99999,
    },

    p: {
      marginBottom: theme.spacings.echo,
    },
  },
});

/**
 * `....................component....................`
 */

const PostPreview = ({ post, theme, ...props }) => (
  <article css={styles(theme)} {...props}>
    <div>
      <h3>
        <PostLink to={post.slug}>{post.title}</PostLink>
      </h3>
      <Link to={post.slug}>
        <Img
          alt={post.title}
          sizes={{
            ...post.featuredImage,
            aspectRatio: 9 / 6,
          }}
          style={{
            mixBlendMode: 'soft-light',
          }}
        />
      </Link>
    </div>
    <div>
      <p>{post.description}</p>
      <ReadLink to={post.slug}>Read post</ReadLink>
    </div>
  </article>
);

export default withTheme(PostPreview);
