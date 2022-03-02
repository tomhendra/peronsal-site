import {postsPerPage} from '$lib/config';
import type {PostMetadata} from '$lib/types';
import {getSlugFromPath} from '.';

export async function fetchPostsMetadata({
  offset = 0,
  limit = postsPerPage,
  category = '',
} = {}): Promise<{posts: PostMetadata[]}> {
  /*
    import.meta.glob is a Vite function. It imports any files that match the 
    glob (wildcard string).
    That function returns an object where each file’s relative path is the key, 
    and the value is a “resolver” function (not an official term) that loads the 
    file contents as a JavaScript promise.
  */
  const allPostFiles = import.meta.glob('../content/**/*.md');
  const iterablePostFiles = Object.entries(allPostFiles);
  /* 
    The map method is there to shape each file’s data, so it’s easier to work
    with on the front end. And since each item waits for a promise, we wrap
    it in an await Promise.all.
  */
  const posts = await Promise.all(
    iterablePostFiles.map(async function getMetadataAndSlug([path, resolver]) {
      const {metadata} = await resolver();
      const slug = getSlugFromPath(path);
      return {...metadata, slug};
    }),
  );

  let sortedPosts: PostMetadata[] = posts.sort((a, b) => {
    return Date.parse(a.date) - Date.parse(b.date);
  });

  if (category) {
    sortedPosts = sortedPosts.filter(post =>
      post.categories.includes(category),
    );
  }

  if (offset) {
    sortedPosts = sortedPosts.slice(offset);
  }

  if (limit && limit < sortedPosts.length && limit != -1) {
    sortedPosts = sortedPosts.slice(0, limit);
  }

  sortedPosts = sortedPosts.map(post => ({
    slug: post.slug,
    title: post.title,
    date: post.date,
    coverImage: post.coverImage,
    alt: post.alt,
    credit: post.credit,
    categories: post.categories,
    excerpt: post.excerpt,
  }));

  return {
    posts: sortedPosts,
  };
}
