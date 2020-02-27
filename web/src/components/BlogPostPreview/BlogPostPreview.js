import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

import Card from '../Card';
import Heading from '../Heading';

import { withMediaQueries } from '../../assets/styles/style-helpers';
import { colors, sizes, variants } from '../../assets/styles/style-enums';

const { ACCENT_CHARLIE } = colors;
const { FOXTROT, GOLF } = sizes;
const { PRIMARY } = variants;

// ....................styles....................

const Container = styled(Card)(({ theme }) => ({
  '&::after': {
    backgroundColor: 'transparent',
    borderColor: theme.colors.accentCharlie,
    borderRadius: theme.borderRadius.bravo,
    borderStyle: 'solid',
    borderWidth: theme.borderWidth.echo,
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
    transformOrigin: 'top right',
    transition: `transform ${theme.transitions.default}`,
    zIndex: theme.zIndex.behind,
  },
}));

const Image = styled(Img)(({ theme }) =>
  withMediaQueries(theme)({
    borderRadius: theme.borderRadius.charlie,
    filter: 'grayscale(100%)',
    marginBottom: [
      theme.spacings.echo,
      theme.spacings.echo,
      theme.spacings.echo,
      theme.spacings.foxtrot,
      theme.spacings.foxtrot,
    ],
    transition: `filter ${theme.transitions.slow}`,
  }),
);

const StyledLink = styled(Link)(({ theme }) =>
  withMediaQueries(theme)({
    height: '100%',
    minHeight: [
      theme.spacings.november,
      theme.spacings.mike,
      theme.spacings.oscar,
      theme.spacings.november,
      theme.spacings.papa,
    ],
    position: 'relative',
    textDecoration: 'none',

    '&:hover, &:focus': {
      [Image]: {
        filter: 'none',
      },

      [Container]: {
        '&::after': {
          transition: `transform ${theme.transitions.springDefault}`,
          transform: 'translate(-12px, 12px)',
        },
      },
    },

    '&:active': {
      [Container]: {
        '&::after': {
          transition: `transform ${theme.transitions.fast}`,
          transform: 'translate(0px, 0px)',
        },
      },
    },
  }),
);

// ....................component....................

function BlogPostPreview({ post }) {
  return (
    <StyledLink to={post.slug} aria-label={post.title}>
      <Container
        variant={PRIMARY}
        as="article"
        accent={ACCENT_CHARLIE}
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

        <Heading noMargin as="h3" variant={PRIMARY}>
          {post.title}
        </Heading>
      </Container>
    </StyledLink>
  );
}

export default BlogPostPreview;
