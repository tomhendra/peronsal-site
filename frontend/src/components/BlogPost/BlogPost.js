import { format, distanceInWords, differenceInDays } from 'date-fns';
import React from 'react';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import Container from '../Container';
import Grid from '../Grid';
import Item from '../Item';
import PortableText from '../PortableText';
import Heading from '../Heading';

import { sizes } from '../../assets/styles/constants';

const { ALPHA, FOXTROT, INDIA } = sizes;

/**
 * `....................styles....................`
 */

const imageStyles = ({ theme }) => ({
  margin: `${theme.spacings.golf} 0`,
  width: '100%',
});

/**
 * `....................component....................`
 */

const PostImage = styled(Img)(imageStyles);

const BlogPost = ({ post }) => {
  const { _rawBody, title, mainImage, publishedAt, categories } = post;
  return (
    <Container>
      <article>
        <Grid>
          <Item gridStart={1} gridEnd={10} spacingTop={INDIA}>
            <Heading as="h1" size={FOXTROT}>
              {title}
            </Heading>
            {publishedAt && (
              <Heading sub as="h2" size={ALPHA}>
                Posted on&nbsp;
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'Do, MM, yyyy')}
              </Heading>
            )}
            {mainImage && mainImage.asset && (
              <PostImage
                sizes={{
                  ...mainImage.asset.fluid,
                  aspectRatio: 9 / 6,
                }}
                alt={mainImage.alt}
              />
            )}

            {_rawBody && <PortableText blocks={_rawBody} />}
            <aside>
              {categories && (
                <div>
                  <ul>
                    {categories.map(category => (
                      <li key={category._id}>{category.title}</li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </Item>
        </Grid>
      </article>
    </Container>
  );
};

export default withTheme(BlogPost);
