import { format, distanceInWords, differenceInDays } from 'date-fns';
import React from 'react';
import Img from 'gatsby-image';

import PortableText from '../PortableText';

/**
 * `....................styles....................`
 */

const styles = {
  width: '100%',
};

/**
 * `....................component....................`
 */

const BlogPost = ({ post }) => {
  const { _rawBody, title, mainImage, publishedAt, categories } = post;
  return (
    <article css={styles}>
      {mainImage && mainImage.asset && (
        <Img
          sizes={{
            ...mainImage.asset.fluid,
            aspectRatio: 9 / 4,
          }}
          alt={mainImage.alt}
        />
      )}

      <h1>{title}</h1>
      {_rawBody && <PortableText blocks={_rawBody} />}
      <aside>
        {publishedAt && (
          <div>
            {differenceInDays(new Date(publishedAt), new Date()) > 3
              ? distanceInWords(new Date(publishedAt), new Date())
              : format(new Date(publishedAt), 'Do, MM, yyyy')}
          </div>
        )}
        {categories && (
          <div>
            <h3>Categories</h3>
            <ul>
              {categories.map(category => (
                <li key={category._id}>{category.title}</li>
              ))}
            </ul>
          </div>
        )}
      </aside>
    </article>
  );
};

export default BlogPost;
