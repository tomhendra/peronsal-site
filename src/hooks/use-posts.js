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
    slug: `/blog/${node.slug}`,
    publishedDate: node.publishedDate,
  }));
}
