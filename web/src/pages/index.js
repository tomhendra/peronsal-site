import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';
import Grid from '../components/Grid';
import Item from '../components/Item';
import Heading from '../components/Heading';
import ButtonGroup from '../components/ButtonGroup';
import Button from '../components/Button';
import Text from '../components/Text';
import Card from '../components/Card';
import Icon from '../components/Icon';
import TechStack from '../components/TechStack';

import { colors, icons, sizes, variants } from '../assets/styles/style-enums';

const { ACCENT_ALPHA } = colors;
const { BRIEFCASE, CODE, PEN_TOOL } = icons;
const {
  CHARLIE,
  DELTA,
  ECHO,
  FOXTROT,
  GOLF,
  HOTEL,
  INDIA,
  JULIETT,
  LIMA,
  MIKE,
} = sizes;
const { PRIMARY, SECONDARY, TERTIARY } = variants;

function IndexPage() {
  return (
    <Layout>
      <SEO title="Web Developer" />
      <Section fullViewportHeight centerContentVertically variant={PRIMARY}>
        <Grid>
          <Item
            gridColStart={[1, 4, 4, 4]}
            gridColEnd={[9, 11, 11, 8]}
            spacingBottom={GOLF}
          >
            <Heading as="h1" size={FOXTROT}>
              Hola, I am Tom.
            </Heading>
            <Text size={ECHO} noMargin>
              I’m a web developer from the UK living in Spain. I am passionate
              about code, design & food!
            </Text>
          </Item>
          <Item gridColStart={[1, 4, 4, 4]} gridColEnd={[9, 10, 10, 8]}>
            <ButtonGroup>
              <Button
                internalLink="/projects/"
                buttonStyle={SECONDARY}
                buttonSize={CHARLIE}
                bodyBg
              >
                Projects
              </Button>
              <Button
                internalLink="/contact/"
                buttonStyle={PRIMARY}
                buttonSize={CHARLIE}
              >
                Contact
              </Button>
            </ButtonGroup>
          </Item>
        </Grid>
      </Section>
      <Section variant={SECONDARY}>
        <Grid>
          <Item
            gridColStart={1}
            gridColEnd={[9, 9, 9, 6]}
            spacingBottom={HOTEL}
          >
            <Heading as="h2" size={ECHO}>
              About me
            </Heading>
            <Text>
              I am at my happiest when crafting buttery smooth web experiences.
              I take pride in continuously learning new skills from the experts
              who shape the modern web.
            </Text>
            <Text noMargin>
              When I am not in the land of code, I am either immersing myself in
              the wonderful culture & cuisine of Spain or lifting heavy things
              at the gym.
            </Text>
          </Item>
          <Item
            gridColStart={[1, 3, 4, 1]}
            gridColEnd={[9, 11, 10, 5]}
            spacingBottom={[GOLF, HOTEL, HOTEL, 0]}
          >
            <Card
              padding={[FOXTROT, HOTEL, GOLF, GOLF]}
              paddingTop={[HOTEL, INDIA, HOTEL, INDIA]}
              paddingBottom={[FOXTROT, HOTEL, GOLF, HOTEL]}
              accentColor={ACCENT_ALPHA}
            >
              <Icon
                type={CODE}
                color={ACCENT_ALPHA}
                size={INDIA}
                spacingBottom={DELTA}
              />
              <Heading as="h2" size={DELTA} spacingBottom={FOXTROT}>
                Code
              </Heading>
              <Text noMargin>
                My skill set is built upon the rich & diverse JavaScript
                ecosystem. My natural close attention to detail enhances my
                ability to write clean, well organised code.
              </Text>
            </Card>
          </Item>
          <Item
            gridColStart={[1, 3, 4, 5]}
            gridColEnd={[9, 11, 10, 9]}
            spacingBottom={[GOLF, HOTEL, HOTEL, 0]}
          >
            <Card
              padding={[FOXTROT, HOTEL, GOLF, GOLF]}
              paddingTop={[HOTEL, INDIA, HOTEL, INDIA]}
              paddingBottom={[FOXTROT, HOTEL, GOLF, HOTEL]}
              accentColor={ACCENT_ALPHA}
            >
              <Icon
                type={PEN_TOOL}
                color={ACCENT_ALPHA}
                size={INDIA}
                spacingBottom={DELTA}
              />
              <Heading as="h2" size={DELTA} spacingBottom={FOXTROT}>
                Design
              </Heading>
              <Text noMargin>
                I have a keen eye for design and know my way around industry
                standard tools like Sketch & the Adobe Creative Suite. I am a
                coder who appreciates the designer things in life.
              </Text>
            </Card>
          </Item>
          <Item gridColStart={[1, 3, 4, 9]} gridColEnd={[9, 11, 10, 13]}>
            <Card
              padding={[FOXTROT, HOTEL, GOLF, GOLF]}
              paddingTop={[HOTEL, INDIA, HOTEL, INDIA]}
              paddingBottom={[FOXTROT, HOTEL, GOLF, HOTEL]}
              accentColor={ACCENT_ALPHA}
            >
              <Icon
                type={BRIEFCASE}
                color={ACCENT_ALPHA}
                size={INDIA}
                spacingBottom={DELTA}
              />
              <Heading as="h2" size={DELTA} spacingBottom={FOXTROT}>
                Business
              </Heading>
              <Text noMargin>
                I was a procurement professional before becoming a web
                developer, instilling transferable skills like business acumen,
                commercial awareness and project management prowess.
              </Text>
            </Card>
          </Item>
        </Grid>
      </Section>
      <Section variant={TERTIARY}>
        <Grid>
          <Item gridColStart={1} gridColEnd={[9, 9, 7, 6]}>
            <Heading as="h1" size={FOXTROT}>
              My skills.
            </Heading>
            <Text>
              I get excited about using the latest technologies and strive to
              build web apps & websites that are accessible, performant,
              scalable and lightning fast.
            </Text>
            <Text noMargin>
              I enjoy a modern tech stack based around React.js, and am
              continuously adding skills to my toolbox. A committed developer
              never stops learning, a challenge I embrace wholeheartedly.
            </Text>
          </Item>
          <Item
            gridColStart={[1, 1, 1, 1]}
            gridColEnd={[9, 13, 13, 13]}
            spacingTop={[GOLF, INDIA]}
          >
            <TechStack gridSize={DELTA} />
          </Item>
        </Grid>
      </Section>
      <Section
        centerContentVertically
        paddingTop={[JULIETT, LIMA]}
        paddingBottom={[JULIETT, LIMA, LIMA, MIKE]}
        variant={PRIMARY}
      >
        <Grid>
          <Item
            gridColStart={[1, 3, 3, 4]}
            gridColEnd={[9, 11, 11, 9]}
            spacingBottom={GOLF}
          >
            <Heading as="h2" size={ECHO}>
              Where to go from here?
            </Heading>
            <Text size={ECHO} noMargin>
              I’ve been building stuff! You can see what I have been up to on my
              projects page. Or let’s connect if you have seen enough already
              :-)
            </Text>
          </Item>
          <Item gridColStart={[1, 3, 3, 4]} gridColEnd={[9, 9, 8, 8]}>
            <ButtonGroup>
              <Button
                internalLink="/projects/"
                buttonStyle={SECONDARY}
                buttonSize={CHARLIE}
                bodyBg
              >
                Projects
              </Button>
              <Button
                internalLink="/contact/"
                buttonStyle={PRIMARY}
                buttonSize={CHARLIE}
              >
                Contact
              </Button>
            </ButtonGroup>
          </Item>
        </Grid>
      </Section>
    </Layout>
  );
}

export default IndexPage;
