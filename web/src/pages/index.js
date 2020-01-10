import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import Parallax from '../components/Parallax';
import Graphic from '../components/Graphic';
import Grid from '../components/Grid';
import Item from '../components/Item';
import Heading from '../components/Heading';
import ButtonGroup from '../components/ButtonGroup';
import Button from '../components/Button';
import Text from '../components/Text';
import Card from '../components/Card';
import Icon from '../components/Icon';

import { buttons, icons, sizes } from '../assets/styles/constants';

const {
  BRAVO,
  DELTA,
  ECHO,
  FOXTROT,
  GOLF,
  HOTEL,
  JULIETT,
  INDIA,
  LIMA,
} = sizes;
const { PRIMARY, SECONDARY } = buttons;
const { BRIEFCASE, CODE, PEN_TOOL } = icons;

const IndexPage = () => (
  <Layout>
    <SEO title="Web Developer" />
    <section>
      <Container>
        <Parallax>
          <Graphic>Hola.</Graphic>
        </Parallax>
        <Grid withoutBottomSpacing>
          <Item
            gridStart={[1, 2, 3, 2]}
            gridEnd={[9, 9, 11, 10]}
            spacingTop={[JULIETT, LIMA]}
          >
            <Heading as="h1" size={HOTEL}>
              I am Tom.
            </Heading>
            <Heading sub as="h2" size={DELTA} noMargin>
              I’m a web developer from the UK living in Spain. I am passionate
              about coding, design & food!
            </Heading>
          </Item>
          <Item
            gridStart={[1, 2, 3, 2]}
            gridEnd={[9, 6, 8, 7]}
            spacingTop={GOLF}
          >
            <ButtonGroup>
              <Button
                internalLink="/projects/"
                buttonStyle={SECONDARY}
                buttonSize={BRAVO}
              >
                Projects
              </Button>
              <Button
                internalLink="/contact/"
                buttonStyle={PRIMARY}
                buttonSize={BRAVO}
              >
                Contact
              </Button>
            </ButtonGroup>
          </Item>
        </Grid>
      </Container>
    </section>
    <section>
      <Container>
        <Parallax>
          <Graphic noMargin>About</Graphic>
        </Parallax>
        <Grid withoutBottomSpacing>
          <Item
            gridStart={1}
            gridEnd={[8, 6, 7, 7]}
            spacingTop={[GOLF, INDIA]}
            spacingBottom={[GOLF, HOTEL]}
          >
            <Heading as="h1" size={FOXTROT}>
              About me.
            </Heading>
            <Text>
              I am at my happiest when crafting buttery smooth user interfaces.
              I take pride in continuously learning new skills directly from the
              experts who shape the modern web.
            </Text>
            <Text noMargin>
              When I am not in the land of code, I am either immersing myself in
              the wonderful culture & cuisine of Salamanca or lifting heavy
              things at the gym.
            </Text>
          </Item>
          <Item
            gridStart={[2, 3, 1, 1]}
            gridEnd={[8, 7, 5, 5]}
            spacingBottom={[HOTEL, HOTEL, 0, 0]}
          >
            <Card
              padding={[ECHO, GOLF, FOXTROT, FOXTROT]}
              paddingTop={[FOXTROT, GOLF, HOTEL, HOTEL]}
            >
              <Icon
                type={CODE}
                color={PRIMARY}
                size={INDIA}
                spacing={BRAVO}
                alt="Icon symbolising code."
              />
              <Heading as="h2" size={BRAVO} spacingBottom={ECHO}>
                Code
              </Heading>
              <Text noMargin size={BRAVO}>
                My skill set is built upon the rich & diverse JavaScript
                ecosystem. My natural close attention to detail enhances my
                ability to write clean, maintainable code.
              </Text>
            </Card>
          </Item>
          <Item
            gridStart={[2, 3, 5, 5]}
            gridEnd={[8, 7, 9, 9]}
            spacingBottom={[HOTEL, HOTEL, 0, 0]}
          >
            <Card
              padding={[ECHO, GOLF, FOXTROT, FOXTROT]}
              paddingTop={[FOXTROT, GOLF, HOTEL, HOTEL]}
            >
              <Icon
                type={PEN_TOOL}
                color={PRIMARY}
                size={INDIA}
                spacing={BRAVO}
                alt="Icon symbolising design."
              />
              <Heading as="h2" size={BRAVO} spacingBottom={ECHO}>
                Design
              </Heading>
              <Text noMargin size={BRAVO}>
                I have a keen eye for design and know my way around industry
                standard tools like Sketch & Adobe Creative Suite. I am a
                developer who appreciates design.
              </Text>
            </Card>
          </Item>
          <Item gridStart={[2, 3, 9, 9]} gridEnd={[8, 7, 13, 13]}>
            <Card
              padding={[ECHO, GOLF, FOXTROT, FOXTROT]}
              paddingTop={[FOXTROT, GOLF, HOTEL, HOTEL]}
            >
              <Icon
                type={BRIEFCASE}
                color={PRIMARY}
                size={INDIA}
                spacing={BRAVO}
                alt="Icon symbolising business."
              />
              <Heading as="h2" size={BRAVO} spacingBottom={ECHO}>
                Business
              </Heading>
              <Text noMargin size={BRAVO}>
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
        <Parallax>
          <Graphic noMargin>Skills</Graphic>
        </Parallax>
        <Grid>
          <Item gridStart={1} gridEnd={[8, 6, 7, 7]} spacingTop={[GOLF, INDIA]}>
            <Heading as="h1" size={FOXTROT}>
              My skills.
            </Heading>
            <Text>
              I get excited about using the latest technologies and strive to
              build web apps & websites that are accessible, performant,
              scalable and lightning fast.
            </Text>
            <Text noMargin>
              I enjoy a modern techstack based around React, and am continuously
              adding skills to my toolbox. A developer never stops learning, a
              challenge I embrace wholeheartedly.
            </Text>
          </Item>
        </Grid>
      </Container>
    </section>
  </Layout>
);

export default IndexPage;
