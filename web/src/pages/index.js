import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import Graphic from '../components/Graphic';
import Grid from '../components/Grid';
import Item from '../components/Item';
import Heading from '../components/Heading';
import ButtonGroup from '../components/ButtonGroup';
import Button from '../components/Button';

import { buttons, sizes } from '../assets/styles/constants';

const { BRAVO, DELTA, GOLF, HOTEL, KILO, JULIETT } = sizes;
const { PRIMARY, SECONDARY } = buttons;

const IndexPage = () => (
  <Layout>
    <SEO title="Web Developer" />
    <Container>
      <Graphic>Hola.</Graphic>
      <Grid withoutBottomSpacing>
        <Item
          gridStart={[1, 2, 3, 2]}
          gridEnd={[9, 9, 11, 10]}
          spacingTop={[JULIETT, KILO]}
        >
          <Heading as="h1" size={HOTEL}>
            I am Tom.
          </Heading>
          <Heading sub as="h2" size={DELTA} noMargin>
            I’m a web developer from the UK living in Spain. I am passionate
            about coding, design & food!
          </Heading>
        </Item>
        <Item gridStart={[1, 2, 3, 2]} gridEnd={[9, 6, 8, 7]} spacingTop={GOLF}>
          <ButtonGroup>
            <Button
              internalLink="/projects"
              buttonStyle={SECONDARY}
              buttonSize={BRAVO}
            >
              Projects
            </Button>
            <Button
              internalLink="/contact"
              buttonStyle={PRIMARY}
              buttonSize={BRAVO}
            >
              Contact
            </Button>
          </ButtonGroup>
        </Item>
      </Grid>
    </Container>
  </Layout>
);

export default IndexPage;
