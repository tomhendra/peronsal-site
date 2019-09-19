import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { PostLink } from '../post-link';
import { ReadLink } from '../read-link';
import { postPreviewStyles } from './post-preview-styles';
// import { color } from '../../assets/styles';

export const PostPreview = ({ post }) => (
  <article css={postPreviewStyles}>
    <div>
      <h3>
        <PostLink to={post.slug}>{post.title}</PostLink>
      </h3>
      <Link to={post.slug}>
        <Img
          alt={post.title}
          sizes={{
            ...post.featuredImage,
            aspectRatio: 9 / 6,
          }}
        />
      </Link>
    </div>
    <div>
      <p>{post.description}</p>
      <ReadLink to={post.slug}>Read post</ReadLink>
    </div>
  </article>
);
