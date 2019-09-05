import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/layout';

export const query = graphql`
  query BlogPostQuery($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
      }
      html
    }
  }
`;

const postTemplate = ({ data: { markdownRemark } }) => (
  <Layout>
    <h1>{markdownRemark.frontmatter.title}</h1>
    <p>
      Posted by {markdownRemark.frontmatter.author} on{' '}
      {markdownRemark.frontmatter.date}
    </p>
    <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }}></div>
  </Layout>
);

export default postTemplate;
