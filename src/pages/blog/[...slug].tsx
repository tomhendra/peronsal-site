import hydrate from 'next-mdx-remote/hydrate';
import { POST_CONTENT_PATH, getMdxContent } from '@utils';
import { Box, Text } from 'theme-ui';
import { Layout, MdxComponents } from '@components';

// TODO ---> MDX Types
interface Props {
  mdx: any;
  data: any;
}

function BlogPost({ mdx, data }: Props): React.ReactElement {
  const content = hydrate(mdx, { MdxComponents });

  return (
    <Layout>
      <Box>
        <Text as="h1">{data.title}</Text>
        {content}
      </Box>
    </Layout>
  );
}

export async function getStaticPaths() {
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
}

export async function getStaticProps({ params: { slug } }) {
  const posts = await getMdxContent(POST_CONTENT_PATH);
  const postSlug = slug.join('/');
  const [post] = posts.filter(post => post.slug === postSlug);

  if (!post) {
    console.warn(`No content found for slug ${postSlug}`);
  }

  const { mdx, data } = post;

  return {
    props: {
      mdx,
      data,
    },
  };
}

export default BlogPost;
