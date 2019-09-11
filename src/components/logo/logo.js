import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { useSiteMetadata } from '../../hooks/use-site-metadata';
import { logoStyles } from './logo-styles';

export const Logo = () => {
  const { siteMetadata } = useSiteMetadata();
  const data = useStaticQuery(graphql`
    query {
      imageFile: file(relativePath: { eq: "logo/tomhendra-logo.png" }) {
        childImageSharp {
          fixed(width: 48, height: 48) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  return (
    <div css={logoStyles}>
      <Img fixed={data.imageFile.childImageSharp.fixed} />
      <p>{siteMetadata.title}</p>
    </div>
  );
};
