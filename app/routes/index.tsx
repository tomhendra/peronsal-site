import { MapPin } from "react-feather";
import MaxWidthContainer from "~/components/MaxWidthContainer";
import IconWrapper from "~/components/IconWrapper";
import Button from "~/components/Button";
import Image from "~/components/Image";
import type { LinksFunction } from "@remix-run/cloudflare";

import { links as maxWidthContainerLinks } from "~/components/MaxWidthContainer";
import { links as iconWrapperLinks } from "~/components/IconWrapper";
import { links as buttonLinks } from "~/components/Button";
import { links as imageLinks } from "~/components/Image";
import styles from "~/styles/index.css";

const links: LinksFunction = () => [
  ...maxWidthContainerLinks(),
  ...iconWrapperLinks(),
  ...buttonLinks(),
  ...imageLinks(),
  { rel: "stylesheet", href: styles },
];

function Index() {
  return (
    <main>
      <MaxWidthContainer>
        <section className="hero">
          <div className="intro">
            <div>
              <IconWrapper>
                <MapPin size={12} color="var(--color-primary-text)" />
              </IconWrapper>
              <span className="location">Salamanca</span>
            </div>
            <h1>Hello, I'm Tom</h1>
            <p className="subheading">
              I'm a developer from the UK based in Spain who loves to build
              quality user interfaces for the web.
            </p>
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
        </section>
        <section className="about" id="about">
          <div className="intro">
            <span className="prefix">About</span>
            <h2>My Journey to Becoming a Developer</h2>
            <p className="subheading">
              In 2018 I sold everything I owned, quit my job in procurement, and
              moved to Spain to become a freelance web developer. New country,
              new language, new career, new life.
            </p>
          </div>
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
              I build web apps with React &amp; Remix, and continuously elevate
              my standards by learning from high quality training resources and
              other members of the developer community.
            </p>
            <p>
              I now have the skills required to create polished user interfaces,
              and am seeking a permanent role as a frontend developer where I
              can continue to grow and help my team to achieve their goals.
            </p>
          </div>
        </section>
        <section className="projects" id="projects">
          <div>
            <span className="prefix">Projects</span>
            <h2>What I Have Been Building</h2>
            <p className="subheading">
              I love to build things and get excited by learning new
              technologies.
            </p>
          </div>
          <div>Fancy projects nav</div>
        </section>
        <section className="contact" id="contact">
          <h2>Contact</h2>
        </section>
      </MaxWidthContainer>
    </main>
  );
}

export { links, Index as default };
