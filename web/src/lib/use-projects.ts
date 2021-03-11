import { graphql, useStaticQuery } from 'gatsby';
import { ProjectHookQuery, ProjectHookData } from '../types';

export function useProjects(): ProjectHookData[] {
  const data = useStaticQuery(graphql`
    query {
      projects: allSanityProject(sort: { fields: publishedAt, order: DESC }) {
        edges {
          node {
            _id
            title
            mainImage {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
              alt
            }
            slug {
              current
            }
            _rawDescription(resolveReferences: { maxDepth: 5 })
          }
        }
      }
    }
  `);

  return data.projects.edges.map(
    ({ node }: { node: ProjectHookQuery }) =>
      node && {
        id: node._id,
        title: node.title,
        mainImage: node.mainImage.asset.fluid,
        alt: node.mainImage.alt,
        slug: `/projects/${node.slug.current}`,
        description: node._rawDescription,
      },
  );
}
