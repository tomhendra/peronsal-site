import React from 'react';
import { graphql } from 'gatsby';

import { Layout, SEO, GraphQLErrors, BlogPost } from '../components';

import { toPlainText } from '../utils/helpers';
import { PostData } from '../utils/types';

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      title
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        asset {
          fluid(maxHeight: 512) {
            ...GatsbySanityImageFluid
          }
        }
        alt
        caption
      }
      _rawExcerpt(resolveReferences: { maxDepth: 5 })
      _rawBody(resolveReferences: { maxDepth: 5 })
    }
  }
`;

type Props = {
  data: {
    post: PostData;
  };
  errors: { message: string }[];
};

export const BlogPostTemplate = ({ data, errors }: Props) => {
  const post = data && data.post;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {post && (
        <SEO
          title={post.title || 'Untitled'}
          description={toPlainText(post._rawExcerpt)}
          // image={post.mainImage}
        />
      )}
      {errors && <GraphQLErrors errors={errors} />}
      {post && <BlogPost post={post} />}
    </Layout>
  );
};
