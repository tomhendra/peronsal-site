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
import styles from '~/styles/projects.css';
import {getSrc, getSrcSet} from '~/helpers/images';

const [seoMeta, seoLinks] = getSeo({
  title: 'Projects: Blog',
  description:
    'A developer blog built with Remix and markdown deployed to the Cloudflare platform.',
  openGraph: {
    // TODO og data for project
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
      <section id="hero">
        <MaxWidthContainer>
          <div className="hero-layout">
            <div className="hero-intro">
              <span className="section-prefix">Projects</span>
              <h1>Blog</h1>
              <div className="hero-intro-content">
                <h3 className="subheading">A technical blog for developers.</h3>
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
                      Markdown parsed from GitHub to Cloudflare CDN
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
                      Optimised image delivery with Cloudinary
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
                      Dark mode respective of system preferences
                    </span>
                  </li>
                </ul>
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
                className="project-hero-img"
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
        </MaxWidthContainer>
      </section>
      <section>
        <MaxWidthContainer>
          <div className="tech-stack-layout">
            <div className="tech-stack">
              <p className="heading">Technologies used</p>
              <div className="list">
                <Tech name="Remix" />
                <Tech name="TypeScript" />
                <Tech name="CSS" />
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
                  The project was created so that I have a place on the internet
                  where I can create content while retaining full control of the
                  platform on which it is authored.
                </p>
                <p>
                  The expected outcome was to build a fast, attractive website
                  with good SEO, with a focus on sharing code that I write to
                  solve my problems which could in turn help other developers to
                  solve theirs.
                </p>
                <p>
                  I wanted to author content in markdown but keep the files
                  separate from the source code. This separation of concerns
                  would make queries and modifications straightforward as the
                  data scales. The website <em>and</em> the data also had to be
                  delivered from the edge, so the experience is fast for all
                  users worldwide.
                </p>
              </div>
              <div className="content">
                <picture className="img-wrapper right">
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
            <div className="analysis-item">
              <div className="content">
                <picture className="img-wrapper left">
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
                  Markdown files are parsed from a GitHub repo into HTML strings
                  which are then cached to Cloudflare's CDN with SWR for 2 days
                  and revalidation every 5 minutes. This is achieved with the
                  GitHub API and Cloudflare Workers via{' '}
                  <a
                    href="https://github.com/jacob-ebey/github-md"
                    className="analysis-link click-target-helper"
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
                    className="analysis-link click-target-helper"
                  >
                    html-react-parser
                  </a>
                  , and server-side rendered by Remix.
                </p>
                <p>
                  One challenge was how to display the code language within the
                  article code blocks. The only language identifier was within
                  the Highlight.js class names added to{' '}
                  <code>&lt;code&gt;</code> elements during parsing. Since
                  github-md doesn't expose an API to control its behaviour, I
                  needed to extract those class names from the HTML string.
                </p>
                <p>
                  While replacing DOM nodes with React elements,
                  html-react-parser can convert DOM attributes to React props.
                  So I looked for any <code>class</code> starting with{' '}
                  <code>hljs language-</code>, converted it to a React prop,
                  passed it to a custom <code>&lt;Code&gt;</code> component, and
                  grabbed the language with the <code>slice</code> method from
                  the destructured <code>className</code> prop.
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
                  The blog is currently live, and gets 16.5K total requests per
                  month, with 1.5K unique visitors. By far the biggest user base
                  is in the USA, around 6 times more than 2nd country on the
                  list which is Germany. This is closely followed by Singapore,
                  the UK and Australia.
                </p>
                <p>
                  My goal is to improve the quality and quantity of the content
                  I write, and I have a long list of new features that I intend
                  to add to the project over time. The biggest feature is to
                  have a Spanish language version of every post.
                </p>
              </div>
              <div className="content">
                <picture className="img-wrapper right">
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
            <div className="analysis-item">
              <div className="content">
                <picture className="img-wrapper left">
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
                  It was convenient to use github-md rather than the GitHub API
                  and Cloudflare Workers directly, but I would have liked some
                  control over the parsing of the markdown, especially having
                  seen the parts I wanted to hook into within the source code.
                </p>
                <p>
                  The Remix ethos of building upon web standard APIs resonates
                  with me greatly, and is good fit for edge computing with the
                  likes of Deno and Cloudflare Workers following a similar path.
                  But the dev server performance was poor and without Hot Module
                  Replacement.
                </p>
                <p>
                  While addressing accessibility issues, I noticed that code
                  blocks with a scrollbar on the X axis were not keyboard
                  focusable in Chrome or Safari. Adding{' '}
                  <code>tabIndex={0}</code> to all <code>&lt;Code&gt;</code>{' '}
                  elements resolved the issue, and considering the importance of
                  code blocks in the project didn't feel too heavy-handed.
                </p>
                <p>
                  In summary; I lacked the confidence to fork github-md and
                  modify it so intend to learn to code for the back end. Until
                  Remix supports HMR I would favour Vite or Next.js. And I was
                  reminded of the importance of testing keyboard navigation and
                  screen readers to uncover issues that a11y tools might not
                  identify.
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
