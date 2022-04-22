import { MapPin } from "react-feather";
import MaxWidthContainer from "~/components/MaxWidthContainer";
import IconWrapper from "~/components/IconWrapper";
import Button from "~/components/Button";
import type { LinksFunction } from "@remix-run/cloudflare";

import { links as maxWidthContainerLinks } from "~/components/MaxWidthContainer";
import { links as iconWrapperLinks } from "~/components/IconWrapper";
import { links as buttonLinks } from "~/components/Button";
import styles from "~/styles/index.css";

const links: LinksFunction = () => [
  ...maxWidthContainerLinks(),
  ...iconWrapperLinks(),
  ...buttonLinks(),
  { rel: "stylesheet", href: styles },
];

function Index() {
  return (
    <main>
      <MaxWidthContainer>
        <div className="hero">
          <div className="intro">
            <div>
              <IconWrapper>
                <MapPin size={12} color="var(--color-primary-text)" />
              </IconWrapper>
              <span className="location">Salamanca</span>
            </div>
            <h1 className="title">Hello, I'm Tom</h1>
            <span className="subtitle">
              I'm a Developer from the UK based in Spain who loves to build
              quality user interfaces for the web.
            </span>
            <div className="btn-group">
              <Button href="/projects" size="xl" variant="secondary-gray">
                View Projects
              </Button>
              <Button to="#contact" size="xl" variant="primary">
                Get in Touch
              </Button>
            </div>
          </div>
          <div className="image-container">
            <img
              className="image"
              src="https://picsum.photos/560/640"
              alt="placeholder"
            />
          </div>
        </div>
        <div className="about">
          <h2 id="about">About</h2>
        </div>
        <div className="projects">
          <h2>Projects</h2>
        </div>
        <div className="contact" id="contact">
          <h2>Contact</h2>
        </div>
      </MaxWidthContainer>
    </main>
  );
}

export { links, Index as default };
