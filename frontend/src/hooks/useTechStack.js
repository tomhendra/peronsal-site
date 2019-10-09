import { graphql, useStaticQuery } from 'gatsby'

export function useTechStack () {
  const data = useStaticQuery(graphql`
    query {
      techStack: allSanityTechnology {
        edges {
          node {
            id
            title
            logo {
              asset {
                medium: fixed(width: 64) {
                  ...GatsbySanityImageFixed
                }
                small: fixed(width: 17) {
                  ...GatsbySanityImageFixed
                }
              }
              alt
            }
          }
        }
      }
    }
  `)

  return data.techStack.edges.map(({ node }) => ({
    id: node.id,
    title: node.title,
    logoSmall: node.logo.asset.small,
    logoMedium: node.logo.asset.medium,
    alt: node.logo.alt
  }))
}
