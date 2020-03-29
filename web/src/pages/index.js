import React from 'react';
import { Button } from '../components';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';
import Grid from '../components/Grid';
import Item from '../components/Item';
import Heading from '../components/Heading';
import ButtonGroup from '../components/ButtonGroup';
import Text from '../components/Text';
import InlineLink from '../components/InlineLink';
import Card from '../components/Card';
import Icon from '../components/Icon';
import TechStack from '../components/TechStack';

import { colors, icons, sizes, variants } from '../assets/styles/style-enums';

const { ACCENT_ALPHA } = colors;
const { BRIEFCASE, CODE, PEN_TOOL } = icons;
const {
  BRAVO,
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
      <SEO title="Software Developer" />
      <Section fullViewportHeight centerContentVertically variant={PRIMARY}>
        <Grid>
          <Item
            gridColStart={[1, 2, 4, 4, 4]}
            gridColEnd={[9, 8, 11, 10, 9]}
            spacingBottom={[INDIA, GOLF]}
          >
            <Heading as="h1" size={FOXTROT} variant={PRIMARY}>
              Hola, I am Tom.
            </Heading>
            <Text noMargin size={FOXTROT} variant={PRIMARY}>
              I’m a software developer from the UK living in Spain. I am
              passionate about code, design &amp; food!
            </Text>
          </Item>
          <Item gridColStart={[2, 2, 4, 4, 4]} gridColEnd={[8, 8, 10, 10, 8]}>
            <ButtonGroup>
              <Button
                internalLink="/projects/"
                variant={SECONDARY}
                size={BRAVO}
                bodyBg
              >
                Projects
              </Button>
              <Button internalLink="/contact/" variant={PRIMARY} size={BRAVO}>
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
            gridColEnd={[9, 8, 9, 8, 6]}
            spacingBottom={HOTEL}
          >
            <Heading as="h2" size={ECHO} variant={SECONDARY}>
              About me.
            </Heading>
            <Text variant={SECONDARY}>
              I am at my happiest when crafting buttery smooth web experiences.
              I take pride in continuously learning new skills from the experts
              who shape the modern web.
            </Text>
            <Text noMargin variant={SECONDARY}>
              When I am not in the land of code, I am either immersing myself in
              the wonderful culture & cuisine of Spain or lifting heavy things
              at the gym.
            </Text>
          </Item>
          <Item
            gridColStart={[1, 2, 3, 4, 1]}
            gridColEnd={[9, 8, 11, 10, 5]}
            spacingBottom={[GOLF, GOLF, HOTEL, HOTEL, 0]}
          >
            <Card
              variant={PRIMARY}
              accent={ACCENT_ALPHA}
              padding={[FOXTROT, FOXTROT, GOLF, GOLF, GOLF]}
              paddingTop={[HOTEL, HOTEL, INDIA, HOTEL, INDIA]}
              paddingBottom={[FOXTROT, FOXTROT, GOLF, GOLF, HOTEL]}
            >
              <Icon
                type={CODE}
                color={ACCENT_ALPHA}
                size={INDIA}
                spacingBottom={DELTA}
              />
              <Heading
                as="h2"
                size={DELTA}
                spacingBottom={FOXTROT}
                variant={PRIMARY}
              >
                Code
              </Heading>
              <Text noMargin variant={PRIMARY}>
                My skill set is built upon the rich & diverse JavaScript
                ecosystem. My natural close attention to detail enhances my
                ability to write clean, well organized code.
              </Text>
            </Card>
          </Item>
          <Item
            gridColStart={[1, 2, 3, 4, 5]}
            gridColEnd={[9, 8, 11, 10, 9]}
            spacingBottom={[GOLF, GOLF, HOTEL, HOTEL, 0]}
          >
            <Card
              variant={PRIMARY}
              accent={ACCENT_ALPHA}
              padding={[FOXTROT, FOXTROT, GOLF, GOLF, GOLF]}
              paddingTop={[HOTEL, HOTEL, INDIA, HOTEL, INDIA]}
              paddingBottom={[FOXTROT, FOXTROT, GOLF, GOLF, HOTEL]}
            >
              <Icon
                type={PEN_TOOL}
                color={ACCENT_ALPHA}
                size={INDIA}
                spacingBottom={DELTA}
              />
              <Heading
                as="h2"
                size={DELTA}
                spacingBottom={FOXTROT}
                variant={PRIMARY}
              >
                Design
              </Heading>
              <Text noMargin variant={PRIMARY}>
                I have a keen eye for design and know my way around industry
                standard tools like Sketch & the Adobe Creative Suite. I am a
                coder who appreciates the designer things in life.
              </Text>
            </Card>
          </Item>
          <Item gridColStart={[1, 2, 3, 4, 9]} gridColEnd={[9, 8, 11, 10, 13]}>
            <Card
              variant={PRIMARY}
              accent={ACCENT_ALPHA}
              padding={[FOXTROT, FOXTROT, GOLF, GOLF, GOLF]}
              paddingTop={[HOTEL, HOTEL, INDIA, HOTEL, INDIA]}
              paddingBottom={[FOXTROT, FOXTROT, GOLF, GOLF, HOTEL]}
            >
              <Icon
                type={BRIEFCASE}
                color={ACCENT_ALPHA}
                size={INDIA}
                spacingBottom={DELTA}
              />
              <Heading
                as="h2"
                size={DELTA}
                spacingBottom={FOXTROT}
                variant={PRIMARY}
              >
                Business
              </Heading>
              <Text noMargin variant={PRIMARY}>
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
          <Item gridColStart={1} gridColEnd={[9, 8, 9, 8, 6]}>
            <Heading as="h1" size={FOXTROT} variant={TERTIARY}>
              My skills.
            </Heading>
            <Text variant={TERTIARY}>
              I get excited about using the latest technologies and strive to
              build websites & apps that are accessible, performant, scalable
              and lightning fast.
            </Text>
            <Text noMargin variant={TERTIARY}>
              I enjoy a modern tech stack based around React.js, and am
              continuously adding new skills to my toolbox. A committed
              developer never stops learning, a challenge I embrace
              wholeheartedly.
            </Text>
          </Item>
          <Item
            gridColStart={[1, 1, 1, 1, 1]}
            gridColEnd={[9, 9, 13, 13, 13]}
            spacingTop={[GOLF, GOLF, INDIA, INDIA, INDIA]}
          >
            <TechStack gridSize={DELTA} noMargin />
          </Item>
        </Grid>
      </Section>
      <Section
        centerContentVertically
        paddingTop={[JULIETT, JULIETT, LIMA, LIMA, LIMA]}
        paddingBottom={[JULIETT, JULIETT, LIMA, LIMA, MIKE]}
        variant={PRIMARY}
      >
        <Grid>
          <Item
            gridColStart={[1, 2, 3, 3, 4]}
            gridColEnd={[9, 8, 11, 10, 9]}
            spacingBottom={GOLF}
          >
            <Heading as="h2" size={ECHO} variant={PRIMARY}>
              Where to go from here?
            </Heading>
            <Text size={ECHO} noMargin variant={PRIMARY}>
              I’ve been building stuff. You can see what I have been up to on my
              &nbsp;
              <InlineLink internalLink="/projects/">projects page</InlineLink>
              &nbsp;Or&nbsp;
              <InlineLink internalLink="/contact/">let’s connect</InlineLink>
              &nbsp;if you have seen enough already!
            </Text>
          </Item>
          <Item gridColStart={[2, 2, 3, 3, 4]} gridColEnd={[8, 8, 9, 9, 8]}>
            <ButtonGroup>
              <Button
                internalLink="/projects/"
                variant={SECONDARY}
                size={BRAVO}
                bodyBg
              >
                Projects
              </Button>
              <Button internalLink="/contact/" variant={PRIMARY} size={BRAVO}>
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
