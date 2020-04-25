import { graphql, useStaticQuery } from 'gatsby';

import { PostDataHook } from '../utils/types';

export function usePosts() {
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
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  return data.posts.edges.map(
    ({ node }: { node: PostDataHook }) =>
      node && {
        id: node._id,
        title: node.title,
        slug: `/blog/${node.slug.current}`,
        publishedAt: node.publishedAt,
        mainImage: node.mainImage.asset.fluid,
        alt: node.mainImage.alt,
      },
  );
}
