/** @jsxImportSource theme-ui */
import { Flex } from 'theme-ui';
import { POST_CONTENT_PATH, getMdxContent } from '@utils';
import { BlogPostPreview, Layout, SEO } from '@components';
import { MdxContent } from '@types';
import { GetStaticProps } from 'next';

interface BlogProps {
  posts: MdxContent[];
}

function Blog({ posts }: BlogProps) {
  return (
    <>
      <SEO title="Blog" description="Tom Hendra's blog." />
      <Layout>
        <Flex sx={{ flexDirection: 'column' }}>
          {posts.map(post => (
            <BlogPostPreview key={post.slug} blog={post} />
          ))}
        </Flex>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const mdxPostContent = await getMdxContent(POST_CONTENT_PATH);
  const posts = mdxPostContent.map(post => ({
    slug: post.slug,
    ...post.data,
  }));

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
