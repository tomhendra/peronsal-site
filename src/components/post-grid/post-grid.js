import React from 'react';

import { usePosts } from '../../hooks/use-posts';
import { sizes } from '../../assets/styles';
import PostPreview from '../post-preview';

/**
 * `....................styles....................`
 */

const styles = {
  display: 'grid',
  gap: sizes.medium2,
  gridTemplateColumns: 'repeat(3, 1fr)',
  paddingBottom: sizes.large3,
};

/**
 * `....................component....................`
 */

const PostGrid = props => {
  const posts = usePosts();

  return (
    <div css={styles} {...props}>
      {posts.map(post => (
        <PostPreview key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostGrid;
