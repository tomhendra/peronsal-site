import hydrate from 'next-mdx-remote/hydrate';
import { BLOG_CONTENT_PATH, getMdxContent, MdxComponents } from '@utils';
import { Box, Text } from 'theme-ui';
import { Layout } from '@components';

// TODO ---> MDX Types
interface Props {
  mdxSource: any;
  frontMatter: any;
}

function BlogPost({ mdxSource, frontMatter }: Props): React.ReactElement {
  const content = hydrate(mdxSource, { MdxComponents });

  return (
    <Layout>
      <Box>
        <Text as="h1">{frontMatter.title}</Text>
        {content}
      </Box>
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = await getMdxContent(BLOG_CONTENT_PATH);
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
  const posts = await getMdxContent(BLOG_CONTENT_PATH);
  const postSlug = slug.join('/');
  const [post] = posts.filter(post => post.slug === postSlug);

  if (!post) {
    console.warn(`No content found for slug ${postSlug}`);
  }

  return {
    props: {
      mdxSource: post.mdx,
      frontMatter: post.data,
    },
  };
}

export default BlogPost;
