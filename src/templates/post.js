import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Img from 'gatsby-image';
import { css } from '@emotion/core';
import { sizes } from '../assets/styles';
import { Layout } from '../components/layout';
import { Container } from '../components/container';

export const query = graphql`
  query ContentfulBlogPostQuery($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      title
      publishedDate(formatString: "Do MMMM YYYY")
      featuredImage {
        file {
          url
        }
        fluid(maxHeight: 512) {
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
        return (
          <img
            src={url}
            alt={alt}
            css={css`
              max-width: ${sizes.massive2};
            `}
          />
        );
      },
    },
  };

  return (
    <Layout>
      <Container>
        <h1>{contentfulBlogPost.title}</h1>
        <p>Posted on {contentfulBlogPost.publishedDate}</p>
        <Img
          sizes={{
            ...contentfulBlogPost.featuredImage.fluid,
            aspectRatio: 9 / 4,
          }}
          alt={contentfulBlogPost.title}
        />
        {documentToReactComponents(contentfulBlogPost.body.json, options)}
      </Container>
    </Layout>
  );
};

export default postTemplate;
