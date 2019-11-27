import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import Heading from '../Heading';
import Text from '../Text';

/**
 * `....................styles....................`
 */

const elementStyles = ({ theme }) => ({
  background: `linear-gradient(180deg, ${theme.colors.p400}, ${theme.colors.p300} 100%)`,
  borderRadius: theme.borderRadius.delta,
  display: 'flex',
  flexDirection: 'column',
  minHeight: '48rem',
  justifyContent: 'space-between',
  overflow: 'hidden',
  padding: theme.spacings.foxtrot,
});

const linkStyles = ({ theme }) => ({
  color: theme.colors.n000,
  textDecoration: 'none',
  '&:hover': {
    // eslint-disable-next-line no-use-before-define
    [PostText]: {
      color: theme.colors.p700,
    },
  },
});

const imageStyles = ({ theme }) => ({
  mixBlendMode: 'luminosity',
  borderRadius: theme.borderRadius.delta,
  marginBottom: theme.spacings.golf,
});

const headingStyles = ({ theme }) => ({
  color: theme.colors.n900,
  fontWeight: theme.fontWeight.regular,
});

const textStyles = ({ theme }) => ({
  color: theme.colors.n600,
  transition: `color ${theme.transitions.default}`,
});

/**
 * `....................component....................`
 */

const PostElement = styled.article(elementStyles);
const PostLink = styled(Link)(linkStyles);
const PostImage = styled(Img)(imageStyles);
const PostHeading = styled(Heading)(headingStyles);
const PostText = styled(Text)(textStyles);

const PostPreview = ({ post }) => (
  <PostLink to={post.slug}>
    <PostElement>
      <div>
        <PostImage
          alt={post.alt}
          sizes={{
            ...post.mainImage,
            aspectRatio: 6 / 6,
          }}
        />

        <PostHeading as="h3">{post.title}</PostHeading>
      </div>
      <PostText noMargin>Read post</PostText>
    </PostElement>
  </PostLink>
);

/**
 * `....................propTypes....................`
 */

export default withTheme(PostPreview);
