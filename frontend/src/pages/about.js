/* eslint-disable max-len */
import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import Graphic from '../components/Graphic';
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
        <Graphic>About</Graphic>
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
                spacing={BRAVO}
                alt="Icon symbolising code."
              />
              <Heading as="h2" size={BRAVO}>
                Code
              </Heading>
              <Text size={BRAVO}>
                My skill set is built upon the rich & diverse JavaScript
                ecosystem. My natural close attention to detail enhances my
                ability to write clean, maintainable code.
              </Text>
            </Card>
          </Item>
          <Item gridStart={5} gridEnd={9} spacingTop={HOTEL}>
            <Card>
              <Icon
                type={PENTOOL}
                color={PRIMARY}
                size={INDIA}
                spacing={BRAVO}
                alt="Icon symbolising design."
              />
              <Heading as="h2" size={BRAVO}>
                Design
              </Heading>
              <Text size={BRAVO}>
                I have a keen eye for design and know my way around industry
                standard tools like Sketch & Adobe Creative Suite. I am a
                developer who likes to design.
              </Text>
            </Card>
          </Item>
          <Item gridStart={9} gridEnd={13} spacingTop={HOTEL}>
            <Card>
              <Icon
                type={BRIEFCASE}
                color={PRIMARY}
                size={INDIA}
                spacing={BRAVO}
                alt="Icon symbolising business."
              />
              <Heading as="h2" size={BRAVO}>
                Business
              </Heading>
              <Text size={BRAVO}>
                I was a procurement professional before a web developer,
                instilling transferable business acumen, commercial awareness
                and solid communication skills.
              </Text>
            </Card>
          </Item>
        </Grid>
      </Container>
    </section>
    <section>
      <Container>
        <Graphic>Skills</Graphic>
        <Grid>
          <Item gridStart={1} gridEnd={7} spacingTop={INDIA}>
            <Heading as="h1" size={FOXTROT}>
              My skills.
            </Heading>
            <Text>
              I get excited about the latest technologies.I strive to build web
              applications & websites that are accessible, performant, scalable
              and lightning fast.
            </Text>
            <Text noMargin>
              I use a modern techstack based around React, and am continuously
              adding skills to my toolbox. A web developer never stops learning,
              a challenge I embrace wholeheartedly.
            </Text>
          </Item>
        </Grid>
      </Container>
    </section>
  </Layout>
);

export default AboutPage;
