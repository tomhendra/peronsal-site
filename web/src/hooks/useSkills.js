import { graphql, useStaticQuery } from 'gatsby';

export function useSkills() {
  const data = useStaticQuery(graphql`
    query {
      skills: allSkillsYaml {
        edges {
          node {
            id
            title
            alt
            image {
              small: childImageSharp {
                fixed(width: 17) {
                  ...GatsbyImageSharpFixed
                }
              }
              medium: childImageSharp {
                fixed(width: 64) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `);

  return data.skills.edges.map(({ node }) => ({
    id: node.id,
    title: node.title,
    imageSmall: node.image.small.fixed,
    imageMedium: node.image.medium.fixed,
    alt: node.alt,
  }));
}
