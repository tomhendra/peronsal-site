import MaxWidthContainer from "~/components/MaxWidthContainer";
import Button from "~/components/Button";
import FeatureIcon from "~/components/FeatureIcon";
import type { LinksFunction } from "@remix-run/cloudflare";

import { links as buttonLinks } from "~/components/Button";
import { links as featureIconLinks } from "~/components/FeatureIcon";
import styles from "~/styles/projects.css";
import { CheckCircle } from "react-feather";

const links: LinksFunction = () => [
  ...buttonLinks(),
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
              <span className="section-prefix">Projects</span>
              <h1>Nata</h1>
              <div className="hero-intro-content">
                <h3 className="subheading">
                  A chat application inspired by Discord.
                </h3>
                <ul className="features-list">
                  <li>
                    <span className="feature">
                      <FeatureIcon>
                        <CheckCircle
                          size={12}
                          color="var(--color-primary-text)"
                        />
                      </FeatureIcon>
                      Realtime chat broadcast over WebSockets
                    </span>
                  </li>
                  <li>
                    <span className="feature">
                      <FeatureIcon>
                        <CheckCircle
                          size={12}
                          color="var(--color-primary-text)"
                        />
                      </FeatureIcon>
                      New server creation for distinct communities
                    </span>
                  </li>
                  <li>
                    <span className="feature">
                      <FeatureIcon>
                        <CheckCircle
                          size={14}
                          color="var(--color-primary-text)"
                        />
                      </FeatureIcon>
                      Multiple authentication options
                    </span>
                  </li>
                </ul>
                <p>Designed and developed by myself.</p>
                <div className="btn-group">
                  <Button
                    as="link"
                    to="#projects"
                    size="xl"
                    variant="secondary-gray"
                  >
                    Source Code
                  </Button>
                  <Button as="link" to="#contact" size="xl" variant="primary">
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <img
                alt="placeholder"
                src="https://via.placeholder.com/1024x492?text=Nata"
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
    </main>
  );
}

export { links, Blog as default };
