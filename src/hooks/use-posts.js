import { graphql, useStaticQuery } from 'gatsby';

export function usePosts() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            author
            image {
              sharp: childImageSharp {
                fluid(maxWidth: 100, maxHeight: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  `);

  return data.allMarkdownRemark.nodes.map(post => ({
    id: post.id,
    title: post.frontmatter.title,
    date: post.frontmatter.date,
    author: post.frontmatter.author,
    image: post.frontmatter.image,
    excerpt: post.excerpt,
    slug: post.fields.slug,
  }));
}
