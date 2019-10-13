import React from 'react';
import { withTheme } from 'emotion-theming';

import usePosts from '../../hooks/usePosts';
import PostPreview from '../PostPreview';

/**
 * `....................styles....................`
 */

const styles = theme => ({
  display: 'grid',
  gap: theme.spacings.foxtrot,
  gridTemplateColumns: 'repeat(3, 1fr)',
  paddingBottom: theme.spacings.juliett,
});

/**
 * `....................component....................`
 */

const PostGrid = ({ theme, ...props }) => {
  const posts = usePosts();

  return (
    <div css={styles(theme)} {...props}>
      {posts.map(post => (
        <PostPreview key={post.id} post={post} />
      ))}
    </div>
  );
};

export default withTheme(PostGrid);
