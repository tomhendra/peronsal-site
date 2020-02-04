import { graphql, useStaticQuery } from 'gatsby';

function useProjects() {
  const data = useStaticQuery(graphql`
    query {
      projects: allSanityProject(sort: { fields: publishedAt, order: DESC }) {
        edges {
          node {
            _id
            title
            publishedAt
            description
            _rawTechstack(resolveReferences: { maxDepth: 5 })
            repo
            url
            mainImage {
              alt
              caption
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  return data.projects.edges.map(
    ({ node }) =>
      node && {
        id: node._id,
        date: node.publishedAt,
        title: node.title,
        description: node.description,
        techstack: node._rawTechstack,
        repo: node.repo,
        url: node.url,
        image: node.mainImage.asset.fluid,
        alt: node.mainImage.alt,
        caption: node.mainImage.caption,
      },
  );
}

export default useProjects;
