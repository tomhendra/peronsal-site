// TLDR: endpoint to provide meta & paths for posts
export async function get() {
  // import.meta.glob is a Vite function. It imports any files that match
  // the glob (wildcard string)
  // That function returns an object where each file’s relative path is the key,
  // and the value is a “resolver” function (not an official term) that loads
  // the file contents as a JavaScript promise.
  const allPostFiles = import.meta.glob('../blog/*.md');
  const iterablePostFiles = Object.entries(allPostFiles);
  // The map method is there to shape each file’s data, so it’s easier to work
  // with on the front end. And since each item waits for a promise, we wrap
  // it in an await Promise.all.
  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const {metadata} = await resolver();
      // Since we know the path will begin with .. and end with .md, we can
      // safely use .slice(2, -3) to end up with the route.
      const postPath = path.slice(2, -3);

      return {
        meta: metadata,
        path: postPath,
      };
    }),
  );
  // Next, we sort the posts by descending date (since this is a blog, of
  // course, and we’ll want our newest posts showing first).
  const sortedPosts = allPosts.sort((a, b) => {
    // TODO: error boundary for date format
    return Date.parse(a.meta.date) - Date.parse(b.meta.date);
  });
  // Finally, we return the finished product as the body of our API response.
  // (The 200 status code is implicit here, since we’re successfully returning
  // a body.) SvelteKit handles the conversion to JSON
  return {
    body: sortedPosts,
  };
}
