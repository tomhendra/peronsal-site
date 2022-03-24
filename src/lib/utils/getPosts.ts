import type {Post, PostsEndpointOptions} from '$lib/types';
import {getSlugFromPath} from '.';

export async function getPosts({
  offset = 0,
  limit = 4,
  tag = '',
}: PostsEndpointOptions = {}): Promise<Post[]> {
  /*
    import.meta.glob is a Vite function which returns an object where each 
    file’s relative path is the key, and the value is a “resolver” function 
    (not an official term) that loads the file contents as a JavaScript promise.
  */
  const posts: Post[] = await Promise.all(
    Object.entries(import.meta.glob('../content/**/*.md')).map(
      /* 
        The map method is there to shape each file’s data, so it’s easier to work
        with on the front end. And since each item waits for a promise, we wrap
        it in an await Promise.all.
      */
      async ([path, resolver]) => {
        const {metadata} = await resolver();
        const slug = getSlugFromPath(path);
        return {...metadata, slug};
      },
    ),
  );

  let sortedPosts = posts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date)),
  );

  if (tag) {
    sortedPosts = sortedPosts.filter(post => post.tags.includes(tag));
  }

  if (offset) {
    sortedPosts = sortedPosts.slice(offset);
  }

  if (limit && limit < sortedPosts.length) {
    sortedPosts = sortedPosts.slice(0, limit);
  }

  const finalPosts = sortedPosts.map(post => ({
    slug: post.slug,
    date: post.date,
    title: post.title,
    subtitle: post.subtitle,
    tags: post.tags,
    coverImage: post.coverImage,
    alt: post.alt,
    caption: post.caption,
    description: post.description,
  }));

  return finalPosts;
}
