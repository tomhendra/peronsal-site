import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import Graphic from '../components/Graphic';
import Grid from '../components/Grid';
import Item from '../components/Item';
import Heading from '../components/Heading';
import Button from '../components/Button';

import { buttons, sizes } from '../assets/styles/constants';

const { BRAVO, DELTA, GOLF, HOTEL } = sizes;
const { PRIMARY } = buttons;

export default () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container center>
      <Graphic>404</Graphic>
      <Grid withoutBottomSpacing>
        <Item gridStart={[1, 2, 3, 1]} gridEnd={[6, 9, 11, 9]}>
          <Heading as="h1" size={HOTEL}>
            Uh oh!
          </Heading>
          <Heading sub as="h2" size={DELTA} noMargin>
            The page you requested could not be found. But do not fear, there is
            a way back...
          </Heading>
        </Item>
        <Item gridStart={[1, 2, 3, 1]} gridEnd={[6, 4, 4, 4]} spacingTop={GOLF}>
          <Button internalLink="/" buttonStyle={PRIMARY} buttonSize={BRAVO}>
            Home
          </Button>
        </Item>
      </Grid>
    </Container>
  </Layout>
);
