import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Layout } from '../components/layout';

export const query = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

const postTemplate = ({ data: { mdx } }) => (
  <Layout>
    <h1>{mdx.frontmatter.title}</h1>
    <p>
      Posted by {mdx.frontmatter.author} on {mdx.frontmatter.date}
    </p>
    <MDXRenderer>{mdx.body}</MDXRenderer>
  </Layout>
);

export default postTemplate;
