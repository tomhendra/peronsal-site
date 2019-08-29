import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import useSiteMetadata from '../../hooks/use-site-metadata';

const Logo = () => {
  const { title } = useSiteMetadata();
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "tomhendra-icon.png" }) {
        childImageSharp {
          fixed(width: 125, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div>
      <Img fixed={data.placeholderImage.childImageSharp.fixed} />
      <p>{title}</p>
    </div>
  );
};

export default Logo;
