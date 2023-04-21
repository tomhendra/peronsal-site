// TODO dynamic metadata
export const metadata = {
  title: 'Post title',
  description: 'About the post',
};

export default async function Post({ params }: { params: { slug: string } }) {
  // const { slug } = params;

  return <h1>This is a post</h1>;
}
