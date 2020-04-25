import React from 'react';

import { PostData } from '../../utils/types';

import { Heading } from '..';

import { StyledCard, StyledImg, StyledLink } from './components';

type Props = {
  post: PostData;
};

export const BlogPostPreview = ({ post }: Props) => (
  <StyledLink to={post.slug} aria-label={post.title}>
    <StyledCard>
      <StyledImg
        alt={post.alt}
        sizes={{
          aspectRatio: 4 / 3,
          base64: post.mainImage.base64,
          sizes: post.mainImage.sizes,
          src: post.mainImage.src,
          srcWebp: post.mainImage.srcWebp,
          srcSet: post.mainImage.srcSet,
          srcSetWebp: post.mainImage.srcSetWebp,
        }}
      />

      <Heading noSpacingBottom as="h3" variant="primary">
        {post.title}
      </Heading>
    </StyledCard>
  </StyledLink>
);
