const getPost = async (slug: string) => {
  return new Promise(resolve =>
    resolve({ post: { title: slug, body: `hello from ${slug}` } }),
  );
};

export async function getData(slug: string) {
  const post = await getPost(slug);
  return post;
}

// TODO dynamic metadata
export const metadata = {
  title: 'Post title',
  description: 'About the post',
};

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getData(slug);

  return <h1>This is a post</h1>;
}
