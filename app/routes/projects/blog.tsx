import MaxWidthContainer from "~/components/MaxWidthContainer";
import Button from "~/components/Button";
import { Section, SectionPrefix } from "~/components/Section";
import FeatureIcon from "~/components/FeatureIcon";
import type { LinksFunction } from "@remix-run/cloudflare";

import { links as buttonLinks } from "~/components/Button";
import { links as sectionLinks } from "~/components/Section";
import { links as featureIconLinks } from "~/components/FeatureIcon";
import styles from "~/styles/projects.css";
import { Check } from "react-feather";

const links: LinksFunction = () => [
  ...buttonLinks(),
  ...sectionLinks(),
  ...featureIconLinks(),
  { rel: "stylesheet", href: styles },
];

function Blog() {
  return (
    <main>
      <section id="hero">
        <MaxWidthContainer>
          <div className="hero-layout">
            <div className="hero-intro">
              <SectionPrefix>Projects</SectionPrefix>
              <h1>Blog</h1>
              <div className="hero-intro-content">
                <h3 className="subheading">
                  A blog for all my thoughts and ideas.
                </h3>
                <ul className="features-list">
                  <li>
                    <span className="feature">
                      <FeatureIcon>
                        <Check
                          size={14}
                          strokeWidth={3}
                          color="var(--color-primary-text)"
                        />
                      </FeatureIcon>
                      Optimised cloud image delivery
                    </span>
                  </li>
                  <li>
                    <span className="feature">
                      <FeatureIcon>
                        <Check
                          size={14}
                          strokeWidth={3}
                          color="var(--color-primary-text)"
                        />
                      </FeatureIcon>
                      Filter posts by category
                    </span>
                  </li>
                  <li>
                    <span className="feature">
                      <FeatureIcon>
                        <Check
                          size={14}
                          strokeWidth={3}
                          color="var(--color-primary-text)"
                        />
                      </FeatureIcon>
                      Code syntax highlighting
                    </span>
                  </li>
                </ul>
                <p>Designed and developed by myself.</p>
                <div className="btn-group">
                  <Button
                    as="externalLink"
                    href="https://github.com/tomhendra/blog"
                    size="xl"
                    variant="secondary-gray"
                  >
                    Source Code
                  </Button>
                  <Button
                    as="externalLink"
                    href="https://tomhendra.dev"
                    size="xl"
                    variant="primary"
                  >
                    View Live
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <img
                alt="placeholder"
                src="https://via.placeholder.com/1024x492?text=Blog"
                style={{
                  width: "1080px",
                  height: "492px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </MaxWidthContainer>
      </section>
      <Section id="stack">
        <div className="tech-stack">
          <p>SvelteKit</p>
          <p>Sass</p>
          <p>MdSvex</p>
          <p>Cloudinary</p>
          <p>Cloudflare Pages</p>
        </div>
      </Section>
    </main>
  );
}

export { links, Blog as default };
