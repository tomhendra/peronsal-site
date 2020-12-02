import { useStaticQuery, graphql } from 'gatsby';
import { SiteMetadata } from '../utils/types';

export function useSiteMetadata(): SiteMetadata {
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