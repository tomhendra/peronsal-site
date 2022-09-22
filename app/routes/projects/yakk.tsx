import type {LinksFunction, MetaFunction} from '@remix-run/cloudflare';
import {CheckCircle, Eye, Target, TrendingUp, Users} from 'react-feather';
import Button from '~/components/Button';
import FeatureIcon from '~/components/FeatureIcon';
import MaxWidthContainer from '~/components/MaxWidthContainer';
import Tech from '~/components/Tech';
import {getSeo} from '~/helpers/seo';
import {useTheme} from '~/helpers/theme-provider';

import {links as buttonLinks} from '~/components/Button';
import {links as featureIconLinks} from '~/components/FeatureIcon';
import {links as maxWidthContainerLinks} from '~/components/MaxWidthContainer';
import {links as techLinks} from '~/components/Tech';
import {getSrc, getSrcSet} from '~/helpers/images';
import styles from '~/styles/projects.css';
// import Link from '~/components/Link';

const [seoMeta, seoLinks] = getSeo({
  title: 'Projects: Yakk',
  description: 'A realtime chat application built with Remix and Supabase.',
  openGraph: {
    // TODO og data
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

function Yakk() {
  const [theme] = useTheme();
  return (
    <main>
      <section>
        <MaxWidthContainer>
          <div className="project-hero">
            <div className="project-hero__intro">
              <span className="project-hero__prefix">Projects</span>
              <h1>Yakk</h1>
              <div className="project-hero__content">
                <h3 className="project-hero__subheading">
                  A chat application inspired by Discord.
                </h3>
                <ul className="project-hero__features-list">
                  <li>
                    <span className="project-hero__feature">
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
                    <span className="project-hero__feature">
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
                    <span className="project-hero__feature">
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
                <div className="project-hero__btn-group">
                  <Button
                    as="externalLink"
                    href="https://github.com/tomhendra/yakk"
                    size="xl"
                    variant="secondary-gray"
                  >
                    Source Code
                  </Button>
                  <Button
                    as="externalLink"
                    href="https://duckduckgo.com"
                    size="xl"
                    variant="primary"
                  >
                    Live Site
                  </Button>
                </div>
              </div>
            </div>
            <div className="project-hero__img-wrapper">
              <picture>
                <source
                  media="(max-width: 34.375rem)"
                  srcSet={getSrcSet(
                    theme === 'light'
                      ? 'project-blog-01-small'
                      : 'project-blog-dark-01-small',
                    {
                      devicePixelRatios: [1, 2, 3],
                      widths: [284, 568, 852],
                    },
                  )}
                  width={284}
                  height={360}
                />
                <img
                  alt="Demonstration of project mocked up on a device."
                  className="project-hero__img"
                  loading="eager"
                  srcSet={getSrcSet(
                    theme === 'light'
                      ? 'project-blog-01'
                      : 'project-blog-dark-01',
                    {
                      devicePixelRatios: [1, 2, 3],
                      widths: [573, 1146, 1719],
                    },
                  )}
                  src={getSrc(
                    theme === 'light'
                      ? 'project-blog-01'
                      : 'project-blog-dark-01',
                    {
                      width: 1146,
                    },
                  )}
                  width={573}
                  height={615}
                />
              </picture>
            </div>
          </div>
        </MaxWidthContainer>
      </section>
      <section>
        <MaxWidthContainer>
          <div className="tech-stack">
            <div className="tech-stack__container">
              <p className="tech-stack__heading">Technologies used</p>
              <div className="tech-stack__list">
                <Tech name="React" />
                <Tech name="React Router" />
                <Tech name="TypeScript" />
                <Tech name="CSS" />
                <Tech name="Supabase" />
              </div>
            </div>
          </div>
        </MaxWidthContainer>
      </section>
      <section>
        <MaxWidthContainer>
          <div className="project-analysis">
            <div className="project-analysis__container">
              <div className="project-analysis__content project-analysis__content--text">
                <FeatureIcon
                  color="var(--color-primary-background-muted)"
                  className="visually-align-left-6"
                >
                  <FeatureIcon>
                    <Target color="var(--color-primary-text)" />
                  </FeatureIcon>
                </FeatureIcon>
                <h2 className="project-analysis__title">Purpose &amp; Goal</h2>
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
              <div className="project-analysis__content project-analysis__content--img">
                <div className="project-analysis__img-wrapper project-analysis__img-wrapper--right">
                  <picture>
                    <source
                      media="(max-width: 34.375rem)"
                      srcSet={getSrcSet(
                        theme === 'light'
                          ? 'project-blog-02-small'
                          : 'project-blog-dark-02-small',
                        {
                          devicePixelRatios: [1, 2, 3],
                          widths: [284, 568, 852],
                        },
                      )}
                      width={284}
                      height={360}
                    />
                    <img
                      alt="Demonstration of project mocked up on a device."
                      className="project-analysis__img project-analysis__img--right"
                      loading="lazy"
                      srcSet={getSrcSet(
                        theme === 'light'
                          ? 'project-blog-02'
                          : 'project-blog-dark-02',
                        {
                          devicePixelRatios: [1, 2, 3],
                          widths: [630, 1260, 1890],
                        },
                      )}
                      src={getSrc(
                        theme === 'light'
                          ? 'project-blog-02'
                          : 'project-blog-dark-02',
                        {
                          width: 630,
                        },
                      )}
                      width={630}
                      height={470}
                    />
                  </picture>
                </div>
              </div>
            </div>
            <div className="project-analysis__container">
              <div className="project-analysis__content project-analysis__content--img">
                <div className="project-analysis__img-wrapper project-analysis__img-wrapper--left">
                  <picture>
                    <source
                      media="(max-width: 34.375rem)"
                      srcSet={getSrcSet(
                        theme === 'light'
                          ? 'project-blog-03-small'
                          : 'project-blog-dark-03-small',
                        {
                          devicePixelRatios: [1, 2, 3],
                          widths: [284, 568, 852],
                        },
                      )}
                      width={284}
                      height={360}
                    />
                    <img
                      alt="Demonstration of project mocked up on a device."
                      className="project-analysis__img project-analysis__img--left"
                      loading="lazy"
                      srcSet={getSrcSet(
                        theme === 'light'
                          ? 'project-blog-03'
                          : 'project-blog-dark-03',
                        {
                          devicePixelRatios: [1, 2, 3],
                          widths: [630, 1260, 1890],
                        },
                      )}
                      src={getSrc(
                        theme === 'light'
                          ? 'project-blog-03'
                          : 'project-blog-dark-03',
                        {
                          width: 630,
                        },
                      )}
                      width={630}
                      height={470}
                    />
                  </picture>
                </div>
              </div>
              <div className="project-analysis__content project-analysis__content--text">
                <FeatureIcon
                  color="var(--color-primary-background-muted)"
                  className="visually-align-left-6"
                >
                  <FeatureIcon>
                    <Eye color="var(--color-primary-text)" />
                  </FeatureIcon>
                </FeatureIcon>
                <h2 className="project-analysis__title">Spotlight</h2>
                <p>
                  What is the “killer feature” of your project? What feature
                  does it have that took the most work, or was the most
                  technically impressive? Some possible examples:
                </p>
                <ul className="features-list">
                  <li>User authentication</li>
                  <li>A feed of items fetched from a database</li>
                  <li>
                    A particularly tricky UI element (eg. autocomplete,
                    calendar, drag-and-drop)
                  </li>
                  <li>Anything else you're proud of! </li>
                </ul>
                <p>
                  What were the technical hurdles that got in your way? Any
                  major problems you hit during development?
                </p>
                <p>
                  How did you solve those problems? What was the solution? Go
                  deep here, and write with a developer in mind.
                </p>
              </div>
            </div>
            <div className="project-analysis__container">
              <div className="project-analysis__content project-analysis__content--text">
                <FeatureIcon
                  color="var(--color-primary-background-muted)"
                  className="visually-align-left-6"
                >
                  <FeatureIcon>
                    <Users color="var(--color-primary-text)" />
                  </FeatureIcon>
                </FeatureIcon>
                <h2 className="project-analysis__title">Current Status</h2>
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
              <div className="project-analysis__content project-analysis__content--img">
                <div className="project-analysis__img-wrapper project-analysis__img-wrapper--right">
                  <picture>
                    <source
                      media="(max-width: 34.375rem)"
                      srcSet={getSrcSet(
                        theme === 'light'
                          ? 'project-blog-04-small'
                          : 'project-blog-dark-04-small',
                        {
                          devicePixelRatios: [1, 2, 3],
                          widths: [284, 568, 852],
                        },
                      )}
                      width={284}
                      height={360}
                    />
                    <img
                      alt="Demonstration of project mocked up on a device."
                      className="project-analysis__img project-analysis__img--right"
                      loading="lazy"
                      srcSet={getSrcSet(
                        theme === 'light'
                          ? 'project-blog-04'
                          : 'project-blog-dark-04',
                        {
                          devicePixelRatios: [1, 2, 3],
                          widths: [630, 1260, 1890],
                        },
                      )}
                      src={getSrc(
                        theme === 'light'
                          ? 'project-blog-04'
                          : 'project-blog-dark-04',
                        {
                          width: 630,
                        },
                      )}
                      width={630}
                      height={470}
                    />
                  </picture>
                </div>
              </div>
            </div>
            <div className="project-analysis__container">
              <div className="project-analysis__content project-analysis__content--img">
                <div className="project-analysis__img-wrapper project-analysis__img-wrapper--left project-analysis__img-wrapper--final">
                  <picture>
                    <source
                      media="(max-width: 34.375rem)"
                      srcSet={getSrcSet(
                        theme === 'light'
                          ? 'project-blog-05-small'
                          : 'project-blog-dark-05-small',
                        {
                          devicePixelRatios: [1, 2, 3],
                          widths: [284, 568, 852],
                        },
                      )}
                      width={284}
                      height={360}
                    />
                    <img
                      alt="Demonstration of project mocked up on a device."
                      className="project-analysis__img project-analysis__img--left"
                      loading="lazy"
                      srcSet={getSrcSet(
                        theme === 'light'
                          ? 'project-blog-05'
                          : 'project-blog-dark-05',
                        {
                          devicePixelRatios: [1, 2, 3],
                          widths: [630, 1260, 1890],
                        },
                      )}
                      src={getSrc(
                        theme === 'light'
                          ? 'project-blog-05'
                          : 'project-blog-dark-05',
                        {
                          width: 630,
                        },
                      )}
                      width={630}
                      height={470}
                    />
                  </picture>
                </div>
              </div>
              <div className="project-analysis__content project-analysis__content--text">
                <FeatureIcon
                  color="var(--color-primary-background-muted)"
                  className="visually-align-left-6"
                >
                  <FeatureIcon>
                    <TrendingUp color="var(--color-primary-text)" />
                  </FeatureIcon>
                </FeatureIcon>
                <h2 className="project-analysis__title">Lessons Learned</h2>
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

export {links, meta, Yakk as default};
