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
            <IconWrapper>
              <MapPin size={12} color="var(--color-primary)" />
            </IconWrapper>
            <span className="hero-location-text">Salamanca, Spain</span>
            <h1>Hello, I'm Tom</h1>
            <span className="hero-subtitle">
              I'm a Front End Developer from the UK based in Spain, who loves to
              build stuff for the web.
            </span>
          </div>
          <div className="button-group">
            <Button variant="primary" size="md">
              Button
            </Button>
            <Button variant="secondary" size="md">
              Button
            </Button>
            <Button variant="secondary-gray" size="md">
              Button
            </Button>
            <Button variant="tertiary" size="md">
              Button
            </Button>
            <Button variant="tertiary-gray" size="md">
              Button
            </Button>
            <Button variant="link" size="md">
              Button
            </Button>
            <Button variant="link-gray" size="md">
              Button
            </Button>
          </div>
          <div className="button-group">
            <Button variant="primary" size="md" disabled>
              Button
            </Button>
            <Button variant="secondary" size="md" disabled>
              Button
            </Button>
            <Button variant="secondary-gray" size="md" disabled>
              Button
            </Button>
            <Button variant="tertiary" size="md" disabled>
              Button
            </Button>
            <Button variant="tertiary-gray" size="md" disabled>
              Button
            </Button>
            <Button variant="link" size="md" disabled>
              Button
            </Button>
            <Button variant="link-gray" size="md" disabled>
              Button
            </Button>
          </div>
          <div className="button-group">
            <Button variant="primary" size="md" mood="destructive">
              Button
            </Button>
            <Button variant="secondary" size="md" mood="destructive">
              Button
            </Button>
            <Button variant="secondary-gray" size="md" mood="destructive">
              Button
            </Button>
            <Button variant="tertiary" size="md" mood="destructive">
              Button
            </Button>
            <Button variant="tertiary-gray" size="md" mood="destructive">
              Button
            </Button>
            <Button variant="link" size="md" mood="destructive">
              Button
            </Button>
            <Button variant="link-gray" size="md" mood="destructive">
              Button
            </Button>
          </div>
          <div className="button-group">
            <Button variant="primary" size="md" mood="destructive" disabled>
              Button
            </Button>
            <Button variant="secondary" size="md" mood="destructive" disabled>
              Button
            </Button>
            <Button
              variant="secondary-gray"
              size="md"
              mood="destructive"
              disabled
            >
              Button
            </Button>
            <Button variant="tertiary" size="md" mood="destructive" disabled>
              Button
            </Button>
            <Button
              variant="tertiary-gray"
              size="md"
              mood="destructive"
              disabled
            >
              Button
            </Button>
            <Button variant="link" size="md" mood="destructive" disabled>
              Button
            </Button>
            <Button variant="link-gray" size="md" mood="destructive" disabled>
              Button
            </Button>
          </div>
          <div className="hero-image-section">
            <img
              className="hero-image"
              src="https://placebear.com/560/640"
              alt="placeholder"
            />
          </div>
        </div>
        {/* <div className="about-section">
          <h2 id="about">About</h2>
        </div>
        <div className="projects section">
          <h2>Projects</h2>
        </div>
        <div className="contact-section">
          <h2>Contact</h2>
        </div> */}
      </MaxWidthContainer>
    </main>
  );
}

export { links, Index as default };
