import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Img from 'gatsby-image';
import { Layout } from '../components/layout';

export const query = graphql`
  query ContentfulBlogPostQuery($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      title
      publishedDate(formatString: "Do MMMM YYYY")
      featuredImage {
        file {
          url
        }
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
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
        return <img src={url} alt={alt} />;
      },
    },
  };

  return (
    <Layout>
      <h1>{contentfulBlogPost.title}</h1>
      <p>Posted on {contentfulBlogPost.publishedDate}</p>
      <Img
        fluid={contentfulBlogPost.featuredImage.fluid}
        alt={contentfulBlogPost.title}
      />
      {documentToReactComponents(contentfulBlogPost.body.json, options)}
    </Layout>
  );
};

export default postTemplate;
