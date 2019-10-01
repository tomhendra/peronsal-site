import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import { colors, sizes } from '../../assets/styles';
import PostLink from '../post-link';
import ReadLink from '../read-link';

/**
 * `....................styles....................`
 */

const styles = {
  border: `1px solid ${colors.neutral.dark4}`,
  borderRadius: '6px',
  height: sizes.huge4,
  overflow: 'hidden',

  '& > div': {
    height: '50%',
    ':first-of-type': {
      background: colors.primary.dark1,
      isolation: 'isolate',
      overflow: 'hidden',
      position: 'relative',
    },
    ':last-of-type': {
      background: colors.neutral.dark2,
      justifyContent: 'space-between',
      flexDirection: 'column',
      display: 'flex',
      padding: sizes.medium2,
    },

    h3: {
      left: 0,
      margin: sizes.medium2,
      marginBottom: 0,
      position: 'absolute',
      top: 0,
      zIndex: 99999,
    },

    p: {
      marginBottom: sizes.medium1,
    },
  },
};

/**
 * `....................component....................`
 */

const PostPreview = ({ post }) => (
  <article css={styles}>
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

export default PostPreview;
