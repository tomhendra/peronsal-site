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
  title: 'Projects: Blog',
  description:
    'A technical blog built with Remix and markdown files parsed from GitHub.',
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

function Blog() {
  const [theme] = useTheme();
  return (
    <main>
      <section>
        <MaxWidthContainer>
          <div className="project-hero">
            <div className="project-hero__intro">
              <span className="project-hero__prefix">Projects</span>
              <h1>Blog</h1>
              <div className="project-hero__content">
                <h3 className="project-hero__subheading">
                  A technical blog for developers.
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
                      Markdown content parsed with the GitHub API
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
                      Both website and data delivered from the edge
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
                      Advanced dark mode using cookies
                    </span>
                  </li>
                </ul>
                <div className="project-hero__btn-group">
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
            <div className="project-hero__img-wrapper">
              <picture>
                <source
                  media="(max-width: 34.375rem)"
                  srcSet={getSrcSet(
                    `project-blog-small-01${theme === 'dark' ? '-dark' : ''}`,
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
                    `project-blog-01${theme === 'dark' ? '-dark' : ''}`,
                    {
                      devicePixelRatios: [1, 2, 3],
                      widths: [573, 1146, 1719],
                    },
                  )}
                  src={getSrc(
                    `project-blog-01${theme === 'dark' ? '-dark' : ''}`,
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
                <Tech name="Remix" />
                <Tech name="TypeScript" />
                <Tech name="CSS" />
                <Tech name="Markdown" />
                <Tech name="Cloudinary" />
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
                  The project was created so that I have a place on the internet
                  to share content while retaining full control of the platform
                  on which it is authored.
                </p>
                <p>
                  The expected outcome was to build a fast, attractive website
                  with good SEO, with a focus on sharing solutions to my
                  problems which could in turn help other developers to solve
                  theirs.
                </p>
                <p>
                  I wanted to author content in markdown but keep the files
                  separate from the source code to make queries and
                  modifications straightforward as the data scales. Both website{' '}
                  <em>and</em> data also had to be delivered from the edge to
                  make the experience fast for all users worldwide.
                </p>
              </div>
              <div className="project-analysis__content project-analysis__content--img">
                <div className="project-analysis__img-wrapper project-analysis__img-wrapper--right">
                  <picture>
                    <source
                      media="(max-width: 34.375rem)"
                      srcSet={getSrcSet(
                        `project-blog-small-01${
                          theme === 'dark' ? '-dark' : ''
                        }`,
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
                        `project-blog-02${theme === 'dark' ? '-dark' : ''}`,
                        {
                          devicePixelRatios: [1, 2, 3],
                          widths: [630, 1260, 1890],
                        },
                      )}
                      src={getSrc(
                        `project-blog-02${theme === 'dark' ? '-dark' : ''}`,
                        {width: 630},
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
                        `project-blog-small-03${
                          theme === 'dark' ? '-dark' : ''
                        }`,
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
                        `project-blog-03${theme === 'dark' ? '-dark' : ''}`,
                        {
                          devicePixelRatios: [1, 2, 3],
                          widths: [630, 1260, 1890],
                        },
                      )}
                      src={getSrc(
                        `project-blog-03${theme === 'dark' ? '-dark' : ''}`,
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
                  Markdown files are parsed from a GitHub repo into HTML strings
                  which are then cached to Cloudflare's CDN with SWR for 2 days
                  and revalidation every 5 minutes. This is achieved with the
                  GitHub API and Cloudflare Workers via{' '}
                  {/* <Link
                    variant="primary"
                    className="project-analysis__link-test"
                    as="external"
                    href="https://github.com/jacob-ebey/github-md"
                  >
                    github-md
                  </Link>{' '} */}
                  <a
                    href="https://github.com/jacob-ebey/github-md"
                    className="project-analysis__link click-target-helper"
                  >
                    github-md
                  </a>
                  .
                </p>
                <p>
                  The HTML strings are then fetched by a Remix app deployed to
                  the same CDN, converted into React elements on the backend
                  with{' '}
                  <a
                    href="https://github.com/remarkablemark/html-react-parser#readme"
                    className="project-analysis__link click-target-helper"
                  >
                    html-react-parser
                  </a>
                  , and server-side rendered by Remix.
                </p>
                <p>
                  One challenge I faced was how to display the code block
                  language. The only identifier in the HTML strings was within
                  the Highlight.js class names added to{' '}
                  <code>&lt;code&gt;</code> elements during parsing. Since
                  github-md doesn't expose an API to control its behaviour, I
                  needed to extract those class names.
                </p>
                <p>
                  While replacing DOM nodes with React elements,
                  html-react-parser can convert DOM attributes to React props.
                  So I looked for any <code>class</code> starting with{' '}
                  <code>hljs language-</code>, converted them to React props,
                  passed them to a custom <code>&lt;Code&gt;</code> component,
                  then grabbed the language with the <code>slice</code> method
                  from the destructured <code>className</code> prop.
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
                  The blog is currently live and receives 16.5K total requests
                  per month, with 1.5K unique visitors. By far the biggest user
                  base is in the USA, around 6 times more than next country
                  which is Germany, which is closely followed by Singapore, the
                  UK and Australia.
                </p>
                <p>
                  My goal is to improve the quality and quantity of the content
                  I write, and I have a long list of new features that I intend
                  to add to the project over time. The biggest challenge is to
                  have a Spanish language version.
                </p>
              </div>
              <div className="project-analysis__content project-analysis__content--img">
                <div className="project-analysis__img-wrapper project-analysis__img-wrapper--right">
                  <picture>
                    <source
                      media="(max-width: 34.375rem)"
                      srcSet={getSrcSet(
                        `project-blog-small-04${
                          theme === 'dark' ? '-dark' : ''
                        }`,
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
                        `project-blog-04${theme === 'dark' ? '-dark' : ''}`,
                        {
                          devicePixelRatios: [1, 2, 3],
                          widths: [630, 1260, 1890],
                        },
                      )}
                      src={getSrc(
                        `project-blog-04${theme === 'dark' ? '-dark' : ''}`,
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
                          ? 'project-blog-small-05'
                          : 'project-blog-small-05-dark',
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
                        `project-blog-05${theme === 'dark' ? '-dark' : ''}`,
                        {
                          devicePixelRatios: [1, 2, 3],
                          widths: [630, 1260, 1890],
                        },
                      )}
                      src={getSrc(
                        `project-blog-05${theme === 'dark' ? '-dark' : ''}`,
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
                  It was convenient to use github-md rather than the GitHub API
                  and Cloudflare Workers directly, but I would have liked some
                  control over the parsing of the markdown, especially having
                  seen the parts I wanted to hook into within the source code.
                </p>
                <p>
                  The Remix ethos of building upon web standard APIs resonates
                  with me greatly, and is a good fit for edge computing with the
                  likes of Deno and Cloudflare Workers following a similar path.
                  But the dev server performance was poor and has no Hot Module
                  Replacement.
                </p>
                <p>
                  While addressing accessibility issues, I noticed that code
                  blocks with a scrollbar on the X axis were not keyboard
                  focusable in Chrome or Safari. Adding{' '}
                  <code>tabIndex={0}</code> to all <code>&lt;Code&gt;</code>{' '}
                  elements resolved the issue, and considering the importance of
                  code examples in the project, didn't feel too heavy-handed.
                </p>
                <p>
                  Building this project has improved my back-end knowledge by
                  poking around in the github-md repo, I've become better at
                  editing CSS in Chrome to avoid Remix's slow Live Reloading,
                  and have witnessed first-hand how important testing keyboard
                  navigation and screen readers is to uncover issues that
                  accessibility tools may not identify.
                </p>
              </div>
            </div>
          </div>
        </MaxWidthContainer>
      </section>
    </main>
  );
}

export {links, meta, Blog as default};
