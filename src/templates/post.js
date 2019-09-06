import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Layout } from '../components/layout';

export const query = graphql`
  query ContentfulBlogPostQuery($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      title
      publishedDate(formatString: "Do MMMM YYYY")
      body {
        json
      }
    }
  }
`;

const postTemplate = ({ data: { contentfulBlogPost } }) => {
  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        const alt = node.data.target.fields.title['en-US'];
        const url = node.data.target.fields.file['en-US'].url;
        return <img alt={alt} url={url} />;
      },
    },
  };
  return (
    <Layout>
      <h1>{contentfulBlogPost.title}</h1>
      <p>Posted on {contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(contentfulBlogPost.body.json, options)}
    </Layout>
  );
};

export default postTemplate;

// OLD MDX QUERY...................................
// export const query = graphql`
//   query BlogPostQuery($id: String!) {
//     mdx(id: { eq: $id }) {
//       id
//       body
//       frontmatter {
//         title
//         author
//         date(formatString: "MMMM DD, YYYY")
//       }
//     }
//   }
// `;
