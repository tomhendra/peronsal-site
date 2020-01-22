import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import {
  withMediaQueries,
  shadowStandardCharlie,
} from '../../assets/styles/style-helpers';

import Heading from '../Heading';
import Text from '../Text';

// ....................styles....................

const elementStyles = ({ theme }) =>
  withMediaQueries(theme)({
    background: `linear-gradient(180deg, ${theme.colors.b500}, ${theme.colors.b300} 100%)`,
    borderRadius: theme.borderRadius.delta,
    display: 'flex',
    flexDirection: ['row', 'column'],
    justifyContent: 'space-between',
    minHeight: ['18rem', '46rem'],
    overflow: 'hidden',
    padding: [theme.spacings.echo, theme.spacings.foxtrot],
    ...shadowStandardCharlie(theme.colors.shadowNeutral),
  });

const linkStyles = ({ theme }) => ({
  textDecoration: 'none',
  '&:hover': {
    // eslint-disable-next-line no-use-before-define
    [PostHeading]: {
      transform: 'translateY(-4px)',
    },
    // eslint-disable-next-line no-use-before-define
    [PostText]: {
      color: theme.colors.p900,
      transform: 'translateY(-4px)',
    },
  },
});

const imageStyles = ({ theme }) =>
  withMediaQueries(theme)({
    height: ['100%', '50%'],
    width: ['50%', '100%'],
    mixBlendMode: 'luminosity',
    borderRadius: theme.borderRadius.delta,
    marginBottom: [0, theme.spacings.golf],
  });

const previewContentStyles = ({ theme }) =>
  withMediaQueries(theme)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: [theme.spacings.echo, 0],
    width: ['60%', '100%'],
  });

const headingStyles = ({ theme }) => ({
  color: theme.colors.n900,
  fontWeight: theme.fontWeight.regular,
  transition: `transform ${theme.transitions.slow}`,
});

const textStyles = ({ theme }) => ({
  color: theme.colors.n800,
  transition: `all ${theme.transitions.slow}`,
});

// ....................component....................

const PostElement = styled.article(elementStyles);
const PostLink = styled(Link)(linkStyles);
const PostImage = styled(Img)(imageStyles);
const PostPreviewContent = styled.div(previewContentStyles);
const PostHeading = styled(Heading)(headingStyles);
const PostText = styled(Text)(textStyles);

function BlogPostPreview({ post }) {
  return (
    <PostLink to={post.slug} aria-label={post.title}>
      <PostElement>
        <PostImage
          alt={post.alt}
          sizes={{
            ...post.mainImage,
            aspectRatio: 6 / 6,
          }}
        />
        <PostPreviewContent>
          <PostHeading as="h3">{post.title}</PostHeading>
          <PostText noMargin>Read post</PostText>
        </PostPreviewContent>
      </PostElement>
    </PostLink>
  );
}

// ....................propTypes....................

export default withTheme(BlogPostPreview);
