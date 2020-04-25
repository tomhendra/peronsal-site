import React from 'react';

import { Section, Grid, Item, PortableText, Heading } from '..';
import { StyledImg, PostedDate, CategoryList } from './components';

import { PostData } from '../../utils/types';

type Props = {
  post: PostData;
};

export const BlogPost = ({ post }: Props) => {
  const { _rawBody, title, mainImage, publishedAt, categories } = post;
  return (
    <Section variant="primary">
      <article>
        <Grid>
          <Item gridColStart={[1, 1, 1, 3, 3]} gridColEnd={[9, 9, 12, 11, 10]}>
            <Heading as="h1" variant="primary">
              {title}
            </Heading>
            {publishedAt && <PostedDate date={publishedAt} />}
            {mainImage && mainImage.asset && (
              <StyledImg
                alt={mainImage.alt}
                sizes={{
                  ...mainImage.asset.fluid,
                  aspectRatio: 9 / 5,
                }}
              />
            )}
          </Item>
          <Item gridColStart={[1, 1, 1, 3, 3]} gridColEnd={[9, 9, 11, 11, 10]}>
            {_rawBody && <PortableText blocks={_rawBody} />}
          </Item>
          <Item gridColStart={[1, 1, 1, 3, 3]} gridColEnd={[9, 9, 11, 11, 10]}>
            <aside>
              {categories && <CategoryList categories={categories} />}
            </aside>
          </Item>
        </Grid>
      </article>
    </Section>
  );
};
