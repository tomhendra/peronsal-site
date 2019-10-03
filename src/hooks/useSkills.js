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
              childImageSharp {
                fixed(width: 17) {
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
    image: node.image.childImageSharp.fixed,
    alt: node.alt,
  }));
}
