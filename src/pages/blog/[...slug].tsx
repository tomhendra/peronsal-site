import hydrate from 'next-mdx-remote/hydrate';
import { POST_CONTENT_PATH, getMdxContent } from '@utils';
import { Layout, components } from '@components';
import { MdxSource, PostData } from '@types';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Styled } from 'theme-ui';
import Image from 'next/image';

interface BlogPostProps {
  mdx: MdxSource;
  data: PostData;
}

function BlogPost({ mdx, data }: BlogPostProps) {
  const content = hydrate(mdx, { components });
  const { title, image, caption } = data;

  return (
    <Layout>
      <Styled.h1>{title ? title : 'Untitled'}</Styled.h1>
      <Image
        src={image ? image : '/public/images/camera.jpg'}
        alt={caption}
        height={500}
        width={768}
        layout="responsive"
      />
      <Styled.p>{caption}</Styled.p>
      {content}
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
