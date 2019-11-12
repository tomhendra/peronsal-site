import { graphql, useStaticQuery } from 'gatsby';

function useTechStack() {
  const data = useStaticQuery(graphql`
    query {
      techStack: allSanityTechnology {
        edges {
          node {
            _id
            title
            logo {
              asset {
                small: fixed(width: 18) {
                  ...GatsbySanityImageFixed
                }
                medium: fixed(width: 28) {
                  ...GatsbySanityImageFixed
                }
                large: fixed(width: 64) {
                  ...GatsbySanityImageFixed
                }
              }
              alt
            }
          }
        }
      }
    }
  `);

  return data.techStack.edges.map(({ node }) => ({
    id: node._id,
    title: node.title,
    logoSmall: node.logo.asset.small,
    logoMedium: node.logo.asset.medium,
    logoLarge: node.logo.asset.large,
    alt: node.logo.alt,
  }));
}

export default useTechStack;
