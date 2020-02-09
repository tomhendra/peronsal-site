import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

import Card from '../Card';
import Heading from '../Heading';

import { withMediaQueries } from '../../assets/styles/style-helpers';
import { colors, sizes } from '../../assets/styles/style-enums';

const { ACCENT_CHARLIE } = colors;
const { FOXTROT, GOLF } = sizes;

// ....................styles....................

const Image = styled(Img)(({ theme }) =>
  withMediaQueries(theme)({
    borderRadius: theme.borderRadius.charlie,
    marginBottom: [
      theme.spacings.echo,
      theme.spacings.echo,
      theme.spacings.echo,
      theme.spacings.foxtrot,
      theme.spacings.foxtrot,
    ],
    position: 'relative',

    '&::after': {
      backgroundColor: theme.colors.white,
      borderRadius: theme.borderRadius.charlie,
      content: '""',
      opacity: '1',
      position: 'absolute',
      top: '0',
      left: '0',
      bottom: '0',
      right: '0',
      mixBlendMode: 'hue',
      transition: `opacity ${theme.transitions.slow}`,
    },
  }),
);

const StyledLink = styled(Link)(({ theme }) =>
  withMediaQueries(theme)({
    overflow: 'hidden',
    height: '100%',
    minHeight: [
      theme.spacings.november,
      theme.spacings.mike,
      theme.spacings.oscar,
      theme.spacings.november,
      theme.spacings.papa,
    ],
    textDecoration: 'none',

    '&:hover': {
      [Image]: {
        '&::after': {
          opacity: 0,
        },
      },
    },
  }),
);

// ....................component....................

function BlogPostPreview({ post }) {
  return (
    <StyledLink to={post.slug} aria-label={post.title}>
      <Card
        as="article"
        accentColor={ACCENT_CHARLIE}
        padding={[FOXTROT, FOXTROT, GOLF, FOXTROT, GOLF]}
        // justifyContent="space-between"
        alignItems="stretch"
      >
        <Image
          alt={post.alt}
          sizes={{
            ...post.mainImage,
            aspectRatio: 4 / 3,
          }}
        />

        <Heading noMargin as="h3">
          {post.title}
        </Heading>
      </Card>
    </StyledLink>
  );
}

export default BlogPostPreview;
