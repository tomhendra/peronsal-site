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

function linkStyles({ theme }) {
  return withMediaQueries(theme)({
    overflow: 'hidden',
    height: '100%',
    minHeight: [
      theme.spacings.november,
      theme.spacings.mike,
      theme.spacings.november,
      theme.spacings.november,
      theme.spacings.oscar,
    ],
    textDecoration: 'none',
  });
}

function imageStyles({ theme }) {
  return withMediaQueries(theme)({
    borderRadius: theme.borderRadius.charlie,
    mixBlendMode: 'luminosity',
    marginBottom: [
      theme.spacings.echo,
      theme.spacings.echo,
      theme.spacings.echo,
      theme.spacings.foxtrot,
      theme.spacings.foxtrot,
    ],
  });
}

// ....................component....................

const Image = styled(Img)(imageStyles);
const StyledLink = styled(Link)(linkStyles);

function BlogPostPreview({ post }) {
  return (
    <StyledLink to={post.slug} aria-label={post.title}>
      <Card
        as="article"
        accentColor={ACCENT_CHARLIE}
        padding={[GOLF, FOXTROT, GOLF, FOXTROT, GOLF]}
        // justifyContent="space-between"
        alignItems="stretch"
      >
        <Image
          alt={post.alt}
          sizes={{
            ...post.mainImage,
            aspectRatio: 6 / 6,
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
