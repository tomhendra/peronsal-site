import { graphql, useStaticQuery } from 'gatsby'

export function usePosts () {
  const data = useStaticQuery(graphql`
    query {
      posts: allSanityPost {
        edges {
          node {
            id
            title
            slug {
              current
            }
            publishedAt(formatString: "Do MMMM, YYYY")
            mainImage {
              asset {
                fluid(maxWidth: 960) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            _rawExcerpt(resolveReferences: { maxDepth: 5 })
            _rawBody(resolveReferences: { maxDepth: 5 })
          }
        }
      }
    }
  `)

  return data.posts.edges.map(({ node }) => ({
    id: node.id,
    title: node.title,
    slug: `/blog/${node.slug.current}`,
    publishedAt: node.publishedAt,
    mainImage: node.mainImage.asset.fluid,
    excerpt: node._rawExcerpt,
    body: node._rawBody
  }))
}
