import React from 'react';
import { usePosts } from '../../hooks/use-posts';
import { PostPreview } from '../post-preview';
import { postGridStyles } from './post-grid-styles';

export const PostGrid = () => {
  const posts = usePosts();

  return (
    <div css={postGridStyles}>
      {posts.map(post => (
        <PostPreview key={post.id} post={post} />
      ))}
    </div>
  );
};
