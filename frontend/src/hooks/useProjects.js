import { graphql, useStaticQuery } from 'gatsby';

export function useProjects() {
  const data = useStaticQuery(graphql`
    query {
      projects: allSanityProject {
        edges {
          node {
            id
            title
            description
            techstack {
              title
            }
            repo
            url
            mainImage {
              alt
              caption
              asset {
                fixed(width: 256) {
                  ...GatsbySanityImageFixed
                }
              }
            }
          }
        }
      }
    }
  `);

  return data.projects.edges.map(({ node }) => ({
    id: node.id,
    title: node.title,
    description: node.description,
    techstack: node.techstack.title,
    repo: node.repo,
    url: node.url,
    image: node.mainImage.asset.fixed,
    alt: node.mainImage.alt,
    caption: node.mainImage.caption,
  }));
}
