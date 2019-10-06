import { graphql, useStaticQuery } from 'gatsby'

export function useProjects () {
  const data = useStaticQuery(graphql`
    query {
      projects: allProjectsYaml {
        edges {
          node {
            id
            title
            description
            stack
            repo
            url
            alt
            image {
              childImageSharp {
                fixed(width: 256) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.projects.edges.map(({ node }) => ({
    id: node.id,
    title: node.title,
    description: node.description,
    // create array from Yaml list of stack items
    // to be passed to skillGrid for use with
    // ProjectPreview component. Can't seem to
    // query array from yaml file via graphQL :(
    // revisit later with better understanding.
    stack: [...node.stack.split(', ')],
    repo: node.repo,
    url: node.url,
    image: node.image.childImageSharp.fixed,
    alt: node.alt
  }))
}
