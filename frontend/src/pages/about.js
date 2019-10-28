/* eslint-disable max-len */
import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Item from '../components/Item';
import Heading from '../components/Heading';
import Text from '../components/Text';
import Card from '../components/Card';
import Icon from '../components/Icon';

import { colors, icons, sizes } from '../assets/styles/constants';

const { PRIMARY } = colors;
const { BRIEFCASE, CODE, PENTOOL } = icons;
const { BRAVO, FOXTROT, HOTEL, INDIA } = sizes;

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <section>
      <Container>
        <Grid>
          <Item gridStart={1} gridEnd={7} spacingTop={INDIA}>
            <Heading as="h1" size={FOXTROT}>
              About me.
            </Heading>
            <Text>
              I am passionate about crafting beautiful user experiences. I take
              pride in continuously learning new skills directly from the
              experts who shape the modern web.
            </Text>
            <Text noMargin>
              When I am not in the land of code, I am enjoying the wonderful
              Spanish cuisine & culture, appreciating my charming home city of
              Salamanca, or lifting heavy things at the gym.
            </Text>
          </Item>
          <Item gridStart={1} gridEnd={5} spacingTop={HOTEL}>
            <Card>
              <Icon
                type={CODE}
                color={PRIMARY}
                size={INDIA}
                alt="Icon symbolising code."
              />
              <Heading as="h2" size={BRAVO}>
                Code
              </Heading>
              <Text size={BRAVO} noMargin>
                My skill set is built upon the rich & diverse JavaScript
                ecosystem. My natural close attention to detail enhances my
                ability to write clean, maintainable code.
              </Text>
            </Card>
          </Item>
          <Item gridStart={5} gridEnd={9} spacingTop={HOTEL}>
            <Card>
              <Icon type={PENTOOL} color={PRIMARY} size={INDIA} />
              <Heading as="h2" size={BRAVO}>
                Design
              </Heading>
              <Text size={BRAVO} noMargin>
                I have a keen eye for design and know my way around industry
                standard tools like Sketch & Adobe Creative Suite. I am a
                developer who likes to design.
              </Text>
            </Card>
          </Item>
          <Item gridStart={9} gridEnd={13} spacingTop={HOTEL}>
            <Card>
              <Icon type={BRIEFCASE} color={PRIMARY} size={INDIA} />
              <Heading as="h2" size={BRAVO}>
                Business
              </Heading>
              <Text size={BRAVO} noMargin>
                I was a procurement professional before a web developer,
                instilling transferable business acumen, commercial awareness
                and solid communication skills.
              </Text>
            </Card>
          </Item>
        </Grid>
      </Container>
    </section>
  </Layout>
);

export default AboutPage;
