import React from 'react';
import { Layout } from '../components/layout';
import SEO from '../components/utils/seo';

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About me.</h1>
    <h2>Hola, I'm Tom.</h2>
    <p>
      I am a web developer from the UK, living in Spain. I come from a
      commercial background, am passionate about writing clean, well organised
      code, and have a bit of a thing for slick design & motion.
    </p>
    <div>1/3, 2/3, 3/3 indicator</div>
    <div>Card 1 - business</div>
    <div>Card 2 - coding</div>
    <div>Card 3 - design</div>

    <br />

    <h2>I get excited about the latest technologies.</h2>
    <p>
      I strive to build websites & applications that are accessible, performant,
      scalable and lightening fast. These are the technologies & tools I use to
      get the job done.
    </p>
    <div>1/3, 2/3, 3/3 indicator</div>
    <div>technologies list 1</div>
    <div>technologies list 2</div>
    <div>technologies list 3</div>
  </Layout>
);

export default AboutPage;
