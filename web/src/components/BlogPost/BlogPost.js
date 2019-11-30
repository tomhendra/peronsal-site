import React from 'react';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

import Container from '../Container';
import Grid from '../Grid';
import Item from '../Item';
import PortableText from '../PortableText';
import Heading from '../Heading';
import PostedDate from './components/PostedDate';
import CategoryList from './components/CategoryList';

import { sizes } from '../../assets/styles/constants';

const { FOXTROT, GOLF, INDIA } = sizes;

/**
 * `....................styles....................`
 */

const imageStyles = ({ theme }) => ({
  borderRadius: theme.borderRadius.alpha,
  margin: `${theme.spacings.golf} 0`,
  width: '100%',
});

/**
 * `....................component....................`
 */

const PostMainImage = styled(Img)(imageStyles);

const BlogPost = ({ post }) => {
  const { _rawBody, title, mainImage, publishedAt, categories } = post;
  return (
    <Container>
      <article>
        <Grid>
          <Item
            gridStart={1}
            gridEnd={[9, 9, 11, 11]}
            spacingTop={[GOLF, INDIA]}
          >
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
            {_rawBody && <PortableText blocks={_rawBody} />}
            <aside>
              {categories && <CategoryList categories={categories} />}
            </aside>
          </Item>
        </Grid>
      </article>
    </Container>
  );
};

/**
 * `....................propTypes....................`
 */

BlogPost.propTypes = {
  post: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  ),
};

BlogPost.defaultProps = {
  post: null,
};

export default withTheme(BlogPost);
