import type {LinksFunction, MetaFunction} from '@remix-run/cloudflare';
import {CheckCircle, Eye, Target, TrendingUp, Users} from 'react-feather';
import Button from '~/components/Button';
import FeatureIcon from '~/components/FeatureIcon';
import MaxWidthContainer from '~/components/MaxWidthContainer';
import Tech from '~/components/Tech';
import {getSeo} from '~/helpers/seo';

import {links as buttonLinks} from '~/components/Button';
import {links as featureIconLinks} from '~/components/FeatureIcon';
import {links as maxWidthContainerLinks} from '~/components/MaxWidthContainer';
import {links as techLinks} from '~/components/Tech';
import styles from '~/styles/projects.css';

const [seoMeta, seoLinks] = getSeo({
  title: 'Projects: Yakk',
  description: 'A realtime chat application built with Remix and Supabase.',
  openGraph: {
    /* todo og data for project */
  },
});

const links: LinksFunction = () => [
  ...seoLinks,
  ...maxWidthContainerLinks(),
  ...buttonLinks(),
  ...featureIconLinks(),
  ...techLinks(),
  {rel: 'stylesheet', href: styles},
];

const meta: MetaFunction = () => ({
  ...seoMeta,
});

function Nata() {
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
                          size={14}
                          strokeWidth={3}
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
                          size={14}
                          strokeWidth={3}
                          color="var(--color-primary-text)"
                        />
                      </FeatureIcon>
                      Channel creation for different topics
                    </span>
                  </li>
                  <li>
                    <span className="feature">
                      <FeatureIcon>
                        <CheckCircle
                          size={14}
                          strokeWidth={3}
                          color="var(--color-primary-text)"
                        />
                      </FeatureIcon>
                      Multiple authentication methods
                    </span>
                  </li>
                </ul>
                <p>
                  My role in this project was as the designer and the developer.
                </p>
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
                src="https://via.placeholder.com/1024x492?text=Nata"
                style={{
                  width: '1080px',
                  height: '492px',
                  objectFit: 'cover',
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
                <Tech name="Remix" />
                <Tech name="React" />
                <Tech name="React Router" />
                <Tech name="TypeScript" />
                <Tech name="CSS" />
                <Tech name="Supabase" />
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
                <FeatureIcon
                  color="var(--color-primary-background-muted)"
                  className="visually-align-left-6"
                >
                  <FeatureIcon>
                    <Target color="var(--color-primary-text)" />
                  </FeatureIcon>
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
              <div className="content">
                <img
                  alt="placeholder"
                  src="https://via.placeholder.com/768x512?text=Img"
                  style={{
                    width: '768px',
                    height: '512px',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
            <div className="analysis-item">
              <div className="content">
                <img
                  alt="placeholder"
                  src="https://via.placeholder.com/768x512?text=Img"
                  style={{
                    width: '768px',
                    height: '512px',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div className="content">
                <FeatureIcon
                  color="var(--color-primary-background-muted)"
                  className="visually-align-left-6"
                >
                  <FeatureIcon>
                    <Eye color="var(--color-primary-text)" />
                  </FeatureIcon>
                </FeatureIcon>
                <h2 className="title">Spotlight</h2>
                <p>
                  What is the “killer feature” of your project? What feature
                  does it have that took the most work, or was the most
                  technically impressive? Some possible examples:
                </p>
                <ul className="features-list">
                  <li>
                    <span className="feature">
                      <FeatureIcon>
                        <CheckCircle
                          size={14}
                          strokeWidth={3}
                          color="var(--color-primary-text)"
                        />
                      </FeatureIcon>
                      User authentication
                    </span>
                  </li>
                  <li>
                    <span className="feature">
                      <FeatureIcon>
                        <CheckCircle
                          size={14}
                          strokeWidth={3}
                          color="var(--color-primary-text)"
                        />
                      </FeatureIcon>
                      A feed of items fetched from a database
                    </span>
                  </li>
                  <li>
                    <span className="feature">
                      <FeatureIcon>
                        <CheckCircle
                          size={14}
                          strokeWidth={3}
                          color="var(--color-primary-text)"
                        />
                      </FeatureIcon>
                      A particularly tricky UI element (eg. autocomplete,
                      calendar, drag-and-drop)
                    </span>
                  </li>
                  <li>
                    <span className="feature">
                      <FeatureIcon>
                        <CheckCircle
                          size={14}
                          strokeWidth={3}
                          color="var(--color-primary-text)"
                        />
                      </FeatureIcon>
                      Anything else you're proud of!{' '}
                    </span>
                  </li>
                </ul>
                <p>
                  What were the technical hurdles that got in your way? Any
                  major problems you hit during development?
                </p>
                <p>
                  How did you solve those problems? What was the solution? Go
                  deep here, and write with a developer in mind. How did you
                  solve those problems? What was the solution? Go deep here, and
                  write with a developer in mind.How did you solve those
                  problems? What was the solution? Go deep here, and write with
                  a developer in mind.How did you solve those problems?
                </p>
              </div>
            </div>
            <div className="analysis-item">
              <div className="content">
                <FeatureIcon
                  color="var(--color-primary-background-muted)"
                  className="visually-align-left-6"
                >
                  <FeatureIcon>
                    <Users color="var(--color-primary-text)" />
                  </FeatureIcon>
                </FeatureIcon>
                <h2 className="title">Current Status</h2>
                <p>
                  This section is optional. If the project is actively being
                  used by real people, talk a little bit about the current
                  status, who uses it, why they use it, what they say to you
                  about it, stuff like that.
                </p>
                <p>
                  If the project was contrived specifically for the portfolio,
                  omit this section.
                </p>
              </div>
              <div className="content">
                <img
                  alt="placeholder"
                  src="https://via.placeholder.com/768x512?text=Img"
                  style={{
                    width: '768px',
                    height: '512px',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
            <div className="analysis-item">
              <div className="content">
                <img
                  alt="placeholder"
                  src="https://via.placeholder.com/768x512?text=Img"
                  style={{
                    width: '768px',
                    height: '512px',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div className="content">
                <FeatureIcon
                  color="var(--color-primary-background-muted)"
                  className="visually-align-left-6"
                >
                  <FeatureIcon>
                    <TrendingUp color="var(--color-primary-text)" />
                  </FeatureIcon>
                </FeatureIcon>
                <h2 className="title">Lessons Learned</h2>
                <p>
                  What did you learn doing this project? Feel free to list
                  multiple things. Also feel free to cover non-technical
                  lessons. It's great to talk about how you learned to use an
                  advanced feature of a framework or library, but it's just as
                  valuable to talk about project-management experience, or
                  things you learned about shipping projects.
                </p>
                <p>
                  If you used a framework or other libraries/tools, was it a
                  good choice? How did it help? In which ways was it
                  insufficient?
                </p>
                <p>
                  Is your project accessible? What did you learn about
                  accessibility, while building this project? Describing how you
                  tested your project using keyboard navigation or a screen-
                  reader can make for a really compelling story!
                </p>
                <p>
                  How has this affected the work you've done since then? Real
                  examples of how this project built your knowledge for future
                  projects is fantastic.
                </p>
              </div>
            </div>
          </div>
        </MaxWidthContainer>
      </section>
    </main>
  );
}

export {links, meta, Nata as default};
