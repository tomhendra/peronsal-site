import type { LinksFunction } from "@remix-run/cloudflare";
import IconWrapper, {
  links as iconWrapperStyles,
} from "~/components/IconWrapper";
import { MapPin } from "react-feather";
import MaxWidthContainer, {
  links as maxWidthContainerStyles,
} from "~/components/MaxWidthContainer";
import Button, { links as buttonStyles } from "~/components/Button";
import styles from "~/styles/index.css";

const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...maxWidthContainerStyles(),
  ...iconWrapperStyles(),
  ...buttonStyles(),
];

function Index() {
  return (
    <main>
      <MaxWidthContainer>
        <div className="hero-section">
          <div className="hero-title-section">
            <div>
              <IconWrapper>
                <MapPin size={12} color="var(--color-primary-text)" />
              </IconWrapper>
              <span className="hero-location-text">Salamanca</span>
            </div>
            <h1>Hello, I'm Tom</h1>
            <span className="hero-subtitle">
              I'm a Front End Developer from the UK based in Spain, who loves to
              build stuff for the web.
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
          <div className="hero-image-section">
            <img
              className="hero-image"
              src="https://placebear.com/560/640"
              alt="placeholder"
            />
          </div>
        </div>
        <div className="about-section">
          <h2 id="about">About</h2>
        </div>
        <div className="projects section">
          <h2>Projects</h2>
        </div>
        <div className="contact-section" id="contact">
          <h2>Contact</h2>
        </div>
      </MaxWidthContainer>
    </main>
  );
}

export { links, Index as default };
