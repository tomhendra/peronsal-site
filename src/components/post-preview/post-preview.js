import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import { PostLink } from '../post-link';
import { ReadLink } from '../read-link';
import { postPreviewStyles } from './post-preview-styles';

export const PostPreview = ({ post }) => (
  <article css={postPreviewStyles}>
    <Link
      to={`/blog/${post.slug}`}
      css={css`
        width: 100px;
      `}
    >
      <Image fluid={post.image.sharp.fluid} alt={post.title} />
    </Link>
    <div>
      <h3>
        <PostLink to={`/blog/${post.slug}`}>{post.title}</PostLink>
      </h3>
      <p>{post.excerpt}</p>
      <ReadLink to={`/blog/${post.slug}`}>read this post &rarr;</ReadLink>
    </div>
  </article>
);
