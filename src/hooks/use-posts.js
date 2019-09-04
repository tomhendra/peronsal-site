import { graphql, useStaticQuery } from 'gatsby';

export function usePosts() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            slug
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
        }
      }
    }
  `);

  return data.allMarkdownRemark.nodes.map(post => ({
    title: post.frontmatter.title,
    slug: post.frontmatter.slug,
    date: post.frontmatter.date,
    author: post.frontmatter.author,
    image: post.frontmatter.image,
    excerpt: post.excerpt,
  }));
}
