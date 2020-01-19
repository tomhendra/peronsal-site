import { graphql, useStaticQuery } from 'gatsby';

function usePosts() {
  const data = useStaticQuery(graphql`
    query {
      posts: allSanityPost(sort: { fields: publishedAt, order: DESC }) {
        edges {
          node {
            _id
            title
            slug {
              current
            }
            publishedAt(formatString: "Do MMMM, YYYY")
            mainImage {
              alt
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
  `);

  return data.posts.edges.map(
    ({ node }) =>
      node && {
        id: node._id,
        title: node.title,
        slug: `/blog/${node.slug.current}`,
        publishedAt: node.publishedAt,
        mainImage: node.mainImage.asset.fluid,
        alt: node.mainImage.alt,
        excerpt: node._rawExcerpt,
        body: node._rawBody,
      },
  );
}

export default usePosts;
