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
            introduction
            purpose
            objective
            approach
            _rawTechstack(resolveReferences: { maxDepth: 5 })
            role
            credits
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
        date: node.publishedAt,
        title: node.title,
        slug: `/projects/${node.slug.current}`,
        publishedAt: node.publishedAt,
        image: node.mainImage.asset.fluid,
        alt: node.mainImage.alt,
        caption: node.mainImage.caption,
        introduction: node.introduction,
        purpose: node.purpose,
        objective: node.objective,
        approach: node.approach,
        techstack: node._rawTechstack,
        role: node.role,
        credits: node.credits,
        repo: node.repo,
        url: node.url,
      },
  );
}

export default useProjects;
