import { MapPin, Twitter, Linkedin, GitHub, Codepen } from "react-feather";
import IconWrapper from "~/components/IconWrapper";
import Button from "~/components/Button";
import Image from "~/components/Image";
import SocialCard from "~/components/SocialCard";
import MaxWidthContainer from "~/components/MaxWidthContainer";
import {
  Tabs,
  TabsList,
  Tab,
  TabHeading,
  TabSubheading,
  TabLink,
  TabContent,
} from "~/components/TabNav";
import {
  Section,
  SectionIntro,
  SectionPrefix,
  SectionHeading,
  SectionSubheading,
} from "~/components/Section";
import Divider from "~/components/Divider";
import type { LinksFunction } from "@remix-run/cloudflare";

import { links as maxWidthContainerLinks } from "~/components/MaxWidthContainer";
import { links as iconWrapperLinks } from "~/components/IconWrapper";
import { links as buttonLinks } from "~/components/Button";
import { links as imageLinks } from "~/components/Image";
import { links as TabNavLinks } from "~/components/TabNav";
import { links as SocialCardLinks } from "~/components/SocialCard";
import { links as SectionLinks } from "~/components/Section";
import { links as DividerLinks } from "~/components/Divider";
import styles from "~/styles/index.css";

const links: LinksFunction = () => [
  ...maxWidthContainerLinks(),
  ...iconWrapperLinks(),
  ...buttonLinks(),
  ...imageLinks(),
  ...TabNavLinks(),
  ...SocialCardLinks(),
  ...SectionLinks(),
  ...DividerLinks(),
  { rel: "stylesheet", href: styles },
];

function Index() {
  return (
    <main>
      <section id="hero">
        <MaxWidthContainer>
          <div className="hero-layout">
            <div className="intro">
              <div>
                <IconWrapper>
                  <MapPin size={12} color="var(--color-primary-text)" />
                </IconWrapper>
                <span className="location">Salamanca</span>
              </div>
              <h1>Hello, I'm Tom</h1>
              <SectionSubheading>
                I'm a developer from the UK based in Spain who loves to build
                quality user interfaces for the web.
              </SectionSubheading>
              <div className="btn-group">
                <Button href="/projects" size="xl" variant="secondary-gray">
                  View Projects
                </Button>
                <Button to="#contact" size="xl" variant="primary">
                  Get in Touch
                </Button>
              </div>
            </div>
            <Image
              src="personal-site/dev-shot"
              alt="placeholder"
              credit="Mohammad Rahmani"
              ratio="4 / 5"
            />
          </div>
        </MaxWidthContainer>
      </section>
      <Section id="about">
        <SectionIntro>
          <SectionPrefix>About</SectionPrefix>
          <SectionHeading>My Journey to Becoming a Developer</SectionHeading>
          <SectionSubheading>
            In 2018 I sold everything I owned, quit my job in procurement, and
            moved to Spain to become a freelance web developer. New country, new
            language, new career, new life.
          </SectionSubheading>
        </SectionIntro>
        <div className="columns">
          <p>
            While building WordPress sites to pay the bills I have been in
            pursuit of my chosen career trajectory ever since, as a software
            developer within the vast and vibrant JavaScript community.
          </p>
          <p>
            I knew coding was the right path for me after struggling with an
            algorithm challenge for a cash register. The feeling when my
            solution finally passed the tests was total euphoria, and I loved
            it!
          </p>
          <p>
            I build web apps with React and continuously elevate my standards by
            learning from high quality training resources and other members of
            the developer community.
          </p>
          <p>
            I now have the skills required to create polished user interfaces,
            and am seeking a permanent role as a frontend developer where I can
            continue to grow and help my team to achieve their goals.
          </p>
        </div>
      </Section>
      <Divider />
      <Section id="projects">
        <SectionIntro>
          <SectionPrefix>Projects</SectionPrefix>
          <SectionHeading>What I Have Been Building</SectionHeading>
          <SectionSubheading>
            I love to build things using new technologies I have learned.
          </SectionSubheading>
        </SectionIntro>
        <Tabs defaultValue="blog">
          <TabsList aria-label="Tab navigation for projects">
            <Tab value="blog">
              <TabHeading>Blog</TabHeading>
              <TabSubheading>
                A blog to share my learnings in the world of software
                development.
              </TabSubheading>
              <TabLink to="projects/blog">Project details</TabLink>
            </Tab>
            <Tab value="nata">
              <TabHeading>Nata</TabHeading>
              <TabSubheading>
                A realtime chat application inspired by Discord.
              </TabSubheading>
              <TabLink to="projects/nata">Project details</TabLink>
            </Tab>
          </TabsList>
          <TabContent value="blog">Blog image link</TabContent>
          <TabContent value="nata">Nata image link</TabContent>
        </Tabs>
      </Section>
      <Section id="contact" primary>
        <SectionIntro>
          <SectionPrefix alt>Contact</SectionPrefix>
          <SectionHeading alt>Let's Work Together</SectionHeading>
          <SectionSubheading alt>
            I'm always open to new opportunities to collaborate.
          </SectionSubheading>
        </SectionIntro>
        <div className="contact-container">
          <div className="social-grid">
            <SocialCard
              icon={<Twitter size={24} color="var(--white)" />}
              platform="Twitter"
              username="@tomhendra"
              url="https://twitter.com/tomhendra"
            />
            <SocialCard
              icon={<Linkedin size={24} color="var(--white)" />}
              platform="LinkedIn"
              username="tom-hendra"
              url="https://www.linkedin.com/in/tom-hendra/"
            />
            <SocialCard
              icon={<GitHub size={24} color="var(--white)" />}
              platform="GitHub"
              username="tomhendra"
              url="https://github.com/tomhendra"
            />
            <SocialCard
              icon={<Codepen size={24} color="var(--white)" />}
              platform="CodePen"
              username="tomhendra"
              url="https://codepen.io/tomhendra"
            />
          </div>
          <form className="form">
            <label htmlFor="name">Name</label>
            <input id="name" placeholder="First name" />
            <label htmlFor="email">Email</label>
            <input id="email" placeholder="you@company.com" />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} />
            <Button size="xl" variant="primary">
              Send Message
            </Button>
          </form>
        </div>
      </Section>
    </main>
  );
}

export { links, Index as default };
