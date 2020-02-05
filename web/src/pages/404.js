import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';
import Graphic from '../components/Graphic';
import Grid from '../components/Grid';
import Item from '../components/Item';
import Heading from '../components/Heading';
import Text from '../components/Text';
import Button from '../components/Button';

import { variants, sizes } from '../assets/styles/style-enums';

const { BRAVO, FOXTROT, GOLF } = sizes;
const { PRIMARY } = variants;

export default () => (
  <Layout>
    <SEO title="404: Not found" />
    <Section center>
      <Graphic>404</Graphic>
      <Grid withoutBottomSpacing>
        <Item
          gridColStart={[1, 2, 3, 4, 4]}
          gridColEnd={[9, 8, 10, 10, 9]}
          spacingBottom={GOLF}
        >
          <Heading as="h1" size={FOXTROT}>
            Uh oh, something went wrong!
          </Heading>
          <Text size={FOXTROT} noMargin>
            The page you requested could not be found. Sorry about that. But do
            not fear, there is a way back home...
          </Text>
        </Item>
        <Item gridColStart={[1, 2, 3, 4, 4]} gridColEnd={[5, 5, 6, 7, 6]}>
          <Button internalLink="/" buttonStyle={PRIMARY} buttonSize={BRAVO}>
            Home
          </Button>
        </Item>
      </Grid>
    </Section>
  </Layout>
);
