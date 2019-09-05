import { graphql, useStaticQuery } from 'gatsby';

export function usePosts() {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            author
            featureImage {
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

  return data.allMdx.nodes.map(post => ({
    id: post.id,
    title: post.frontmatter.title,
    date: post.frontmatter.date,
    author: post.frontmatter.author,
    featureImage: post.frontmatter.featureImage,
    excerpt: post.excerpt,
    slug: post.fields.slug,
  }));
}
