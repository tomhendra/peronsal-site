import hydrate from 'next-mdx-remote/hydrate';
import { POST_CONTENT_PATH, getMdxContent } from '@utils';
import { Box, Text } from 'theme-ui';
import { Layout, components } from '@components';
import { MdxSource, PostData } from '@types';
import { GetStaticPaths, GetStaticProps } from 'next';

interface BlogPostProps {
  mdx: MdxSource;
  data: PostData;
}

function BlogPost({ mdx, data }: BlogPostProps): React.ReactElement {
  const content = hydrate(mdx, { components });

  return (
    <Layout>
      <Box>
        <Text as="h1">{data.title}</Text>
        {content}
      </Box>
    </Layout>
  );
}

export default BlogPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getMdxContent(POST_CONTENT_PATH);
  const paths = posts.map(({ slug }) => ({
    params: {
      slug: slug.split('/'),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    throw new Error('Static page rendering requested without path parameters.');
  }

  const { slug } = params;
  const postSlug = Array.isArray(slug) ? slug.join('/') : '';
  const posts = await getMdxContent(POST_CONTENT_PATH);
  const [post] = posts.filter(post => post.slug === postSlug);

  if (!post) {
    throw new Error(`No content found for slug ${postSlug}`);
  }

  const { mdx, data } = post;

  return {
    props: {
      mdx,
      data,
    },
  };
};
