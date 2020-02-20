import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';
import Grid from '../components/Grid';
import Item from '../components/Item';
import Heading from '../components/Heading';
import Text from '../components/Text';
import InlineLink from '../components/InlineLink';

import { sizes } from '../assets/styles/style-enums';

const { FOXTROT, GOLF } = sizes;

export default () => (
  <Layout>
    <SEO title="404: Not found" />
    <Section fullViewportHeight>
      <Grid withoutBottomSpacing>
        <Item
          gridColStart={[1, 2, 3, 4, 4]}
          gridColEnd={[9, 8, 10, 10, 9]}
          spacingBottom={GOLF}
        >
          <Heading as="h1" size={FOXTROT}>
            404: Uh oh, something went wrong!
          </Heading>
          <Text size={FOXTROT} noMargin>
            The page you requested could not be found. Sorry about that! Nobody
            likes to be lost, but do not fear, there is&nbsp;
            <InlineLink internalLink="/">a way back home</InlineLink>
            ...
          </Text>
        </Item>
      </Grid>
    </Section>
  </Layout>
);
