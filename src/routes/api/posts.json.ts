export async function get() {
  const allPostFiles = import.meta.glob('../blog/*.md');
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const {metadata} = await resolver();
      const postPath = path.slice(2, -3);

      return {
        meta: metadata,
        path: postPath,
      };
    }),
  );

  const sortedPosts = allPosts.sort((a, b) => {
    // TODO: error boundary for date format
    return Date.parse(a.meta.date) - Date.parse(b.meta.date);
  });

  return {
    body: sortedPosts,
  };
}
