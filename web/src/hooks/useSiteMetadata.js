import { useStaticQuery, graphql } from 'gatsby';

function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  return data && data.site;
}

export default useSiteMetadata;
