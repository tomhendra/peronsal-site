import { graphql, useStaticQuery } from 'gatsby';

export function usePosts() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            id
            title
            slug
            publishedDate(formatString: "Do MMMM, YYYY")
          }
        }
      }
    }
  `);

  return data.allContentfulBlogPost.edges.map(({ node }) => ({
    id: node.id,
    title: node.title,
    slug: node.slug,
    publishedDate: node.publishedDate,
  }));
}

// OLD MDX HOOK.......................................
// export function usePosts() {
//   const data = useStaticQuery(graphql`
//     query {
//       allMdx {
//         nodes {
//           id
//           frontmatter {
//             title
//             date(formatString: "MMMM DD, YYYY")
//             author
//             featureImage {
//               sharp: childImageSharp {
//                 fluid(maxWidth: 100, maxHeight: 100) {
//                   ...GatsbyImageSharpFluid_withWebp
//                 }
//               }
//             }
//           }
//           excerpt
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   `);

//   return data.allMdx.nodes.map(post => ({
//     id: post.id,
//     title: post.frontmatter.title,
//     date: post.frontmatter.date,
//     author: post.frontmatter.author,
//     featureImage: post.frontmatter.featureImage,
//     excerpt: post.excerpt,
//     slug: post.fields.slug,
//   }));
// }
