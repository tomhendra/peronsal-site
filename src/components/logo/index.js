import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import useSiteMetadata from '../../hooks/use-site-metadata';
import logoStyles from './logo-styles';

const Logo = () => {
  const { title } = useSiteMetadata();
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "tomhendra-logo.png" }) {
        childImageSharp {
          fixed(width: 48, height: 48) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div css={logoStyles}>
      <Img fixed={data.placeholderImage.childImageSharp.fixed} />
      <p>{title}</p>
    </div>
  );
};

export default Logo;
