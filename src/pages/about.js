import React from 'react';
import { css } from '@emotion/core';
import { Layout } from '../components/layout';
import { SEO } from '../components/utils/seo';
import { Container } from '../components/container';
import { PageHeading } from '../components/page-heading';
import { PageText } from '../components/page-text';
import { PageCounter } from '../components/page-counter';
import { Card } from '../components/card';
import { SkillGrid } from '../components/skill-grid';
import { size } from '../assets/styles';
import businessSVG from '../assets/images/icons/business.svg';
import codeSVG from '../assets/images/icons/code.svg';
import designSVG from '../assets/images/icons/design.svg';

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Container>
      <PageHeading>
        <PageText
          mainHeading={`About me.`}
          subHeading={`Hola, I'm Tom.`}
          paragraph={`I am a web developer from the UK, living in Spain. 
        I am passionate about crafting beautiful user experiences. I take pride in
        continuously learning new skills directly from the experts who shape the modern web.`}
        />
        <PageCounter pageNumber={`01`} totalPages={`03`} />
      </PageHeading>
      <div
        css={css`
          display: grid;
          gap: ${size.medium2};
          grid-template-columns: repeat(3, 1fr);
        `}
      >
        <Card
          icon={codeSVG}
          title={`code`}
          text={`My skill set is built upon the rich & diverse JavaScript ecosystem. My natural close attention to detail enhances my ability to write clean, maintainable code.`}
        />
        <Card
          icon={designSVG}
          title={`design`}
          text={`I have a keen eye for design and know my way around industry standard tools like Sketch &  Adobe Creative Suite. I am a developer who likes to design.`}
        />
        <Card
          icon={businessSVG}
          title={`business`}
          text={`I was a procurement professional before a web developer, instilling transferable business acumen, commercial awareness and solid communication skills.`}
        />
      </div>
    </Container>
    <Container>
      <PageHeading>
        <PageText
          mainHeading={`About me.`}
          subHeading={`I get excited about the latest technologies.`}
          paragraph={`I strive to build  web applications & websites that are accessible, performant, scalable and lightning fast.These are the technologies & tools of choice I use to get the job done.`}
        />
        <PageCounter pageNumber={`02`} totalPages={`03`} />
      </PageHeading>
      <SkillGrid
        skillsToBeDisplayed={[
          `JavaScript`,
          `CSS`,
          `HTML`,
          `React`,
          `Gatsby`,
          `Webpack`,
          `Emotion`,
          `Sass`,
          `CSS Modules`,
        ]}
      />
    </Container>
    <Container>
      <PageHeading>
        <PageText
          mainHeading={`About me.`}
          subHeading={`I get excited about the latest technologies.`}
          paragraph={`I strive to build  web applications & websites that are accessible, performant, scalable and lightning fast.These are the technologies & tools of choice I use to get the job done.`}
        />
        <PageCounter pageNumber={`03`} totalPages={`03`} />
      </PageHeading>
      <SkillGrid
        skillsToBeDisplayed={[
          `Jest`,
          `Testing Library`,
          `Cypress`,
          `GitHub`,
          `NPM`,
          `Yarn`,
          `Firebase`,
          `GraphQL`,
          `Netlify`,
        ]}
      />
    </Container>
  </Layout>
);

export default AboutPage;
