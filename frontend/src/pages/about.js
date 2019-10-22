/* eslint-disable max-len */
import React from 'react';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Row from '../components/Row';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Text from '../components/Text';

// import Card from '../components/Card';
// import TechStackGrid from '../components/TechStackGrid';
// import businessSVG from '../assets/icons/business.svg';
// import codeSVG from '../assets/icons/code.svg';
// import designSVG from '../assets/icons/design.svg';

import { sizes } from '../assets/styles/constants';

const { FOXTROT, INDIA } = sizes;

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Container devMode>
      <Row start={1} end={7} topSpacing={INDIA}>
        <Heading as="h1" size={FOXTROT}>
          About me.
        </Heading>
        <Text>
          I am passionate about crafting beautiful user experiences. I take
          pride in continuously learning new skills directly from the experts
          who shape the modern web.
        </Text>
      </Row>

      {/*
      <div
        css={theme => ({
          display: 'grid',
          gap: theme.spacings.foxtrot,
          gridTemplateColumns: 'repeat(3, 1fr)',
        })}
      >
        <Card
          icon={codeSVG}
          title="code"
          text="My skill set is built upon the rich & diverse JavaScript ecosystem. My natural close attention to detail enhances my ability to write clean, maintainable code."
        />
        <Card
          icon={designSVG}
          title="design"
          text="I have a keen eye for design and know my way around industry standard tools like Sketch &  Adobe Creative Suite. I am a developer who likes to design."
        />
        <Card
          icon={businessSVG}
          title="business"
          text="I was a procurement professional before a web developer, instilling transferable business acumen, commercial awareness and solid communication skills."
        />
      </div>
    </Container>
    <Container>
      <PageHeading>
        <PageText
          mainHeading="About me."
          subHeading="I get excited about the latest technologies."
          paragraph="I strive to build  web applications & websites that are accessible, performant, scalable and lightning fast.These are the technologies & tools of choice I use to get the job done."
        />
        <PageCounter pageNumber="02" totalPages="03" />
      </PageHeading>
      <TechStackGrid
        gridSize="large"
        techStackToBeDisplayed={[
          'JavaScript',
          'CSS',
          'HTML',
          'React',
          'Gatsby',
          'Framer Motion',
          'Emotion',
          'Sass',
          'CSS Modules',
        ]}
      />
    </Container>
    <Container>
      <PageHeading>
        <PageText
          mainHeading="About me."
          subHeading="I get excited about the latest technologies."
          paragraph="I strive to build  web applications & websites that are accessible, performant, scalable and lightning fast.These are the technologies & tools of choice I use to get the job done."
        />
        <PageCounter pageNumber="03" totalPages="03" />
      </PageHeading>
      <TechStackGrid
        gridSize="large"
        techStackToBeDisplayed={[
          'Jest',
          'Testing Library',
          'Cypress',
          'Webpack',
          'NPM',
          'Yarn',
          'Firebase',
          'GraphQL',
          'Netlify',
        ]}
      /> */}
    </Container>
  </Layout>
);

export default AboutPage;
