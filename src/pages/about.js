import React from 'react';
import { css } from '@emotion/core';
import { Layout } from '../components/layout';
import { SEO } from '../components/utils/seo';
import { PageText } from '../components/page-text';
import { size } from '../assets/styles';
import { Card } from '../components/card';
import businessSVG from '../assets/images/icons/business.svg';
import codeSVG from '../assets/images/icons/code.svg';
import designSVG from '../assets/images/icons/design.svg';

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <PageText
      mainHeading={`About me.`}
      subHeading={`Hola, I'm Tom.`}
      paragraph={`I am a frontend web developer from the UK, living in Spain. 
      I am passionate about crafting beautiful user experiences. I take pride in
      continuously learning directly from the experts who shape the modern web.`}
    />
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        margin-top: ${size.large1};
      `}
    >
      <Card
        icon={businessSVG}
        title={`business`}
        text={`I was a procurement professional before a web developer, instilling transferable business acumen, commercial awareness and solid communication skills.`}
      />
      <Card
        icon={codeSVG}
        title={`code`}
        text={`My skillset is built upon the rich & diverse JavaScript ecosystem. My natural close attention to detail enhances my ability to write clean, maintainable code.`}
      />
      <Card
        icon={designSVG}
        title={`design`}
        text={`I have a keen eye for design and know my way around industry standard tools like Sketch &  Adobe Creative Suite. I am a developer who likes to design.`}
      />
    </div>
  </Layout>
);

export default AboutPage;
