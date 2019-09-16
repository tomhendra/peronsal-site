import { graphql, useStaticQuery } from 'gatsby';

export function usePosts() {
  const data = useStaticQuery(graphql`
    query {
      posts: allContentfulBlogPost(
        sort: { fields: publishedDate, order: DESC }
      ) {
        edges {
          node {
            id
            title
            slug
            publishedDate(formatString: "Do MMMM, YYYY")
            featuredImage {
              file {
                url
              }
              fluid {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  return data.posts.edges.map(({ node }) => ({
    id: node.id,
    title: node.title,
    slug: `/blog/${node.slug}`,
    publishedDate: node.publishedDate,
    featuredImage: node.featuredImage.fluid,
  }));
}
