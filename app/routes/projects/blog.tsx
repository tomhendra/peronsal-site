import { Check, Target } from "react-feather";
import MaxWidthContainer from "~/components/MaxWidthContainer";
import Button from "~/components/Button";
import FeatureIcon from "~/components/FeatureIcon";
import Tech from "~/components/Tech";
import type { LinksFunction } from "@remix-run/cloudflare";

import { links as maxWidthContainerLinks } from "~/components/MaxWidthContainer";
import { links as buttonLinks } from "~/components/Button";
import { links as featureIconLinks } from "~/components/FeatureIcon";
import { links as techLinks } from "~/components/Tech";
import styles from "~/styles/projects.css";

const links: LinksFunction = () => [
  ...maxWidthContainerLinks(),
  ...buttonLinks(),
  ...featureIconLinks(),
  ...techLinks(),
  { rel: "stylesheet", href: styles },
];

function Blog() {
  return (
    <main>
      <section id="hero">
        <MaxWidthContainer>
          <div className="hero-layout">
            <div className="hero-intro">
              <span className="section-prefix">Projects</span>
              <h1>Blog</h1>
              <div className="hero-intro-content">
                <h3 className="subheading">
                  A place for my thoughts and ideas.
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
                <p>Design and development by myself.</p>
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
                    Live Site
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
      <section>
        <MaxWidthContainer>
          <div className="tech-stack-layout">
            <div className="tech-stack">
              <p className="heading">Technologies used</p>
              <div className="list">
                <Tech name="Svelte" />
                <Tech name="Sass" />
                <Tech name="Markdown" />
                <Tech name="Cloudinary" />
                <Tech name="Cloudflare Pages" />
              </div>
            </div>
          </div>
        </MaxWidthContainer>
      </section>
      <section>
        <MaxWidthContainer>
          <div className="analysis-section-layout">
            <div className="analysis-item">
              <div className="content">
                <FeatureIcon double style={{ marginLeft: "-6px" }}>
                  <Target color="var(--color-primary-text)" />
                </FeatureIcon>
                <h2 className="title">Purpose &amp; Goal</h2>
                <p>
                  Why did you build this project? Why is it important to you?
                </p>
                <p>
                  What was the expected outcome of the project? What were the
                  initial designs?
                </p>
                <p>
                  Any other preliminary planning that you did which helps build
                  a narrative
                </p>
              </div>
              <div className="img-wrapper">
                <img
                  alt="placeholder"
                  src="https://via.placeholder.com/768x512?text=Img"
                  style={{
                    width: "768px",
                    height: "512px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </MaxWidthContainer>
      </section>
    </main>
  );
}

export { links, Blog as default };
