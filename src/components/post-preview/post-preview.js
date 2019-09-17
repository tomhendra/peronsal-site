import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { PostLink } from '../post-link';
import { ReadLink } from '../read-link';
import { postPreviewStyles } from './post-preview-styles';

export const PostPreview = ({ post }) => (
  <article css={postPreviewStyles}>
    <div>
      <Link to={post.slug}>
        <Img fluid={post.featuredImage} alt={post.title} />
      </Link>
    </div>
    <div>
      <PostLink to={post.slug}>
        <h3>{post.title}</h3>
      </PostLink>

      <p>{post.publishedDate}</p>
      <p>{post.description}</p>
      <ReadLink to={post.slug}>Read this post</ReadLink>
    </div>
  </article>
);
