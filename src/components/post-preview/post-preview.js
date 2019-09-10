import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { PostLink } from '../post-link';
import { ReadLink } from '../read-link';
import { postPreviewStyles } from './post-preview-styles';

export const PostPreview = ({ post }) => (
  <article css={postPreviewStyles}>
    <Link
      to={post.slug}
      css={css`
        width: 100px;
      `}
    >
      <Img fluid={post.featuredImage} alt={post.title} />
    </Link>
    <div>
      <h3>
        <PostLink to={post.slug}>{post.title}</PostLink>
      </h3>
      <p>{post.publishedDate}</p>
      <ReadLink to={post.slug}>read this post &rarr;</ReadLink>
    </div>
  </article>
);
