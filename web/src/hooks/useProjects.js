import { graphql, useStaticQuery } from 'gatsby';

function useProjects() {
  const data = useStaticQuery(graphql`
    query {
      projects: allSanityProject {
        edges {
          node {
            _id
            title
            description
            _rawTechstack(resolveReferences: { maxDepth: 5 })
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
    id: node._id,
    title: node.title,
    description: node.description,
    techstack: node._rawTechstack,
    repo: node.repo,
    url: node.url,
    image: node.mainImage.asset.fixed,
    alt: node.mainImage.alt,
    caption: node.mainImage.caption,
  }));
}

export default useProjects;
