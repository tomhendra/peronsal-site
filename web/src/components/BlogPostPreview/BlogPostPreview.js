import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import Card from '../Card';
import Heading from '../Heading';
import Button from '../Button';

import { withMediaQueries } from '../../assets/styles/style-helpers';
import { colors, variants, sizes } from '../../assets/styles/style-enums';

const { ACCENT_CHARLIE } = colors;
const { TERTIARY } = variants;
const { BRAVO, FOXTROT, GOLF } = sizes;

// ....................styles....................

const PostLink = styled(Link)({
  overflow: 'hidden',
  height: '100%',
  textDecoration: 'none',
});

const Content = styled.div(({ theme }) =>
  withMediaQueries(theme)({
    marginBottom: [
      theme.spacings.foxtrot,
      theme.spacings.foxtrot,
      theme.spacings.foxtrot,
      theme.spacings.golf,
    ],
  }),
);

const Image = styled(Img)(({ theme }) =>
  withMediaQueries(theme)({
    borderRadius: theme.borderRadius.charlie,
    display: 'block',
    mixBlendMode: 'luminosity',
    marginBottom: [
      theme.spacings.echo,
      theme.spacings.echo,
      theme.spacings.echo,
      theme.spacings.foxtrot,
    ],
  }),
);

// ....................component....................

function BlogPostPreview({ post }) {
  return (
    <PostLink to={post.slug} aria-label={post.title}>
      <Card
        as="article"
        accentColor={ACCENT_CHARLIE}
        padding={[FOXTROT, FOXTROT, GOLF, GOLF]}
        alignItems="stretch"
      >
        <Image
          alt={post.alt}
          sizes={{
            ...post.mainImage,
            aspectRatio: 6 / 6,
          }}
        />
        <Content>
          <Heading as="h3">{post.title}</Heading>
        </Content>
        <Button buttonStyle={TERTIARY} buttonSize={BRAVO} to={post.slug}>
          Read Post
        </Button>
      </Card>
    </PostLink>
  );
}

// ....................propTypes....................

export default withTheme(BlogPostPreview);
