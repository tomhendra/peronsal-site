import React from 'react';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

import Section from '../Section';
import Grid from '../Grid';
import Item from '../Item';
import PortableText from '../PortableText';
import Heading from '../Heading';
import PostedDate from './components/PostedDate';
import CategoryList from './components/CategoryList';

import { sizes } from '../../assets/styles/style-enums';

const { FOXTROT } = sizes;

// ....................styles....................

const imageStyles = ({ theme }) => ({
  borderRadius: theme.borderRadius.alpha,
  margin: `${theme.spacings.golf} 0`,
  width: '100%',
});

// ....................component....................

const PostMainImage = styled(Img)(imageStyles);

function BlogPost({ post }) {
  const { _rawBody, title, mainImage, publishedAt, categories } = post;
  return (
    <Section>
      <article>
        <Grid>
          <Item gridColStart={[1, 1, 1, 3, 3]} gridColEnd={[9, 9, 12, 11, 10]}>
            <Heading as="h1" size={FOXTROT}>
              {title}
            </Heading>
            {publishedAt && <PostedDate date={publishedAt} />}
            {mainImage && mainImage.asset && (
              <PostMainImage
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
}

// ....................propTypes....................

BlogPost.propTypes = {
  post: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  ),
};

BlogPost.defaultProps = {
  post: null,
};

export default withTheme(BlogPost);
