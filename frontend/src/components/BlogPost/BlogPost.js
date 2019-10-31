import { format, formatDistance, differenceInDays } from 'date-fns';
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

const listStyles = ({ theme }) => ({
  display: 'flex',
  listStyle: 'none',

  '& > *': {
    background: theme.colors.p800,
    borderRadius: theme.borderRadius.bravo,
    color: theme.colors.p300,
    fontSize: theme.typography.text.bravo.fontSize,
    padding: `${theme.spacings.bravo} ${theme.spacings.charlie}`,
    ':not(:first-of-type)': {
      marginLeft: theme.spacings.charlie,
    },
  },
});

/**
 * `....................component....................`
 */

const PostImage = styled(Img)(imageStyles);
const CategoryList = styled.ul(listStyles);

const BlogPost = ({ post }) => {
  const { _rawBody, title, mainImage, publishedAt, categories } = post;
  return (
    <Container>
      <article>
        <Grid>
          <Item gridStart={1} gridEnd={11} spacingTop={INDIA}>
            <Heading as="h1" size={FOXTROT}>
              {title}
            </Heading>
            {publishedAt && (
              <Heading sub as="h2" size={ALPHA}>
                Posted&nbsp;
                {differenceInDays(new Date(), new Date(publishedAt)) > 5
                  ? format(new Date(publishedAt), 'do MMMM, yyyy')
                  : formatDistance(new Date(publishedAt), new Date(), {
                      addSuffix: true,
                    })}
              </Heading>
            )}
            {mainImage && mainImage.asset && (
              <PostImage
                alt={mainImage.alt}
                sizes={{
                  ...mainImage.asset.fluid,
                  aspectRatio: 9 / 5,
                }}
              />
            )}

            {_rawBody && <PortableText blocks={_rawBody} />}
            <aside>
              {categories && (
                <CategoryList>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </CategoryList>
              )}
            </aside>
          </Item>
        </Grid>
      </article>
    </Container>
  );
};

export default withTheme(BlogPost);
