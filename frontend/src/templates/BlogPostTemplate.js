import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Container from '../components/Container';
import SEO from '../components/SEO';
import GraphQLErrorList from '../components/GraphQLErrorList';
import BlogPost from '../components/BlogPost';
import { toPlainText } from '../utils/helpers';

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

const BlogPostTemplate = props => {
  const { data, errors } = props;
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

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {post && (
        <Container>
          <BlogPost post={post} />
        </Container>
      )}
    </Layout>
  );
};

export default BlogPostTemplate;
