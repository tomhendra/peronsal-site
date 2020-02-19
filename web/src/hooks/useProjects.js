import { graphql, useStaticQuery } from 'gatsby';

function useProjects() {
  const data = useStaticQuery(graphql`
    query {
      projects: allSanityProject(sort: { fields: publishedAt, order: DESC }) {
        edges {
          node {
            _id
            title
            slug {
              current
            }
            publishedAt(formatString: "Do MMMM, YYYY")
            mainImage {
              alt
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
            _rawDescription(resolveReferences: { maxDepth: 5 })
            repo
            url
          }
        }
      }
    }
  `);

  return data.projects.edges.map(
    ({ node }) =>
      node && {
        id: node._id,
        title: node.title,
        slug: `/projects/${node.slug.current}`,
        publishedAt: node.publishedAt,
        mainImage: node.mainImage.asset.fluid,
        alt: node.mainImage.alt,
        description: node._rawDescription,
      },
  );
}

export default useProjects;
