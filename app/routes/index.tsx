import type {ActionFunction, LinksFunction} from '@remix-run/cloudflare';
import {Form, useActionData, useTransition} from '@remix-run/react';
import clsx from 'clsx';
import {useEffect, useRef} from 'react';
import {Codepen, GitHub, Linkedin, MapPin, Twitter} from 'react-feather';
import Button from '~/components/Button';
import Divider from '~/components/Divider';
import FeatureIcon from '~/components/FeatureIcon';
import Link from '~/components/Link';
import MaxWidthContainer from '~/components/MaxWidthContainer';
import SocialCard from '~/components/SocialCard';
import {
  Tab,
  TabContent,
  TabHeading,
  TabLink,
  Tabs,
  TabsList,
  TabSubheading,
} from '~/components/TabNav';
import {getSrc, getSrcSet} from '~/helpers/images';

import {links as buttonLinks} from '~/components/Button';
import {links as dividerLinks} from '~/components/Divider';
import {links as featureIconLinks} from '~/components/FeatureIcon';
import {links as maxWidthContainerLinks} from '~/components/MaxWidthContainer';
import {links as socialCardLinks} from '~/components/SocialCard';
import {links as tabNavLinks} from '~/components/TabNav';
import {useTheme} from '~/helpers/theme-provider';
import styles from '~/styles/index.css';

const links: LinksFunction = () => [
  ...maxWidthContainerLinks(),
  ...featureIconLinks(),
  ...buttonLinks(),
  ...tabNavLinks(),
  ...socialCardLinks(),
  ...dividerLinks(),
  {rel: 'stylesheet', href: styles},
];

export const action: ActionFunction = async ({request}) => {
  const data = await request.formData();
  const email = data.get('email');
  const name = data.get('name');
  const message = data.get('message');

  const res = await fetch('https://formspree.io/f/xvolddzz', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, name, message}),
  });

  return res.json();
};

function Index() {
  const [theme] = useTheme();

  const actionData = useActionData();
  const transition = useTransition();

  let state: 'idle' | 'success' | 'error' | 'submitting' = transition.submission
    ? 'submitting'
    : actionData?.ok
    ? 'success'
    : actionData?.error
    ? 'error'
    : 'idle';

  const formRef = useRef<HTMLFormElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const mounted = useRef<boolean>(false);

  type FormspreeErrorRes = {
    code: string;
    field: string;
    message: string;
  };

  useEffect(() => {
    if (state === 'error') {
      const errors = actionData?.errors;

      if (errors.map((error: FormspreeErrorRes) => error.field === 'email')) {
        emailInputRef.current?.focus();
      }
    }

    if (state === 'idle' && mounted.current) {
      formRef.current?.reset();
      nameInputRef.current?.select();
    }

    if (state === 'success') {
      successRef.current?.focus();
    }

    mounted.current = true;
  }, [actionData?.errors, state]);

  return (
    <main>
      <section id="hero">
        <MaxWidthContainer>
          <div className="hero-layout">
            <div className="intro">
              <div>
                <FeatureIcon padding="6px">
                  <MapPin size={12} color="var(--color-primary-text)" />
                </FeatureIcon>
                <span className="location">Salamanca</span>
              </div>
              <h1>Hello, I'm Tom</h1>
              <h2 className="section-subheading">
                I'm a developer from the UK who loves to build quality user
                interfaces for the web.
              </h2>
              <div className="btn-group">
                <Button
                  as="link"
                  to="#projects"
                  size="xl"
                  variant="secondary-gray"
                >
                  View Projects
                </Button>
                <Button as="link" to="#contact" size="xl" variant="primary">
                  Get in Touch
                </Button>
              </div>
            </div>
            <picture className="hero-img">
              <source
                media="(max-width: 34.375rem)"
                srcSet={getSrcSet('tom-website-hero-hq', {
                  widths: [375, 550, 760, 1125, 1650],
                })}
                width={343}
                height={240}
              />
              <img
                alt="A portrait of Tom Hendra"
                className="hero-img image-filter"
                loading="eager"
                srcSet={getSrcSet('tom-website-hero-hq', {
                  devicePixelRatios: [1, 2, 3],
                  widths: [560, 1120, 1680],
                })}
                src={getSrc('tom-website-hero-hq', {width: 1120})}
                width={560}
                height={640}
              />
            </picture>
          </div>
        </MaxWidthContainer>
      </section>
      <section id="about">
        <MaxWidthContainer>
          <div className="section-layout">
            <div className="section-intro">
              <span className="section-prefix">About</span>
              <h2 className="section-heading">
                My journey to becoming a developer
              </h2>
              <h3 className="section-subheading">
                In 2018 I sold everything I owned, quit my procurement job, and
                moved to Spain to become a web developer. New country, new
                language, new career, new life.
              </h3>
            </div>
            <div className="columns">
              <p>
                After starting out by building no-code websites I became curious
                about how the web worked. This led me down a rabbit hole and
                ultimately to the objective of learning how to code.
              </p>
              <p>
                I knew I had made the right decision after struggling with an
                algorithm problem for a cash register. The euphoria after my
                solution finally passed the tests was exhilarating, and I loved
                it!
              </p>
              <p>
                I now build web apps with JavaScript frameworks and continuously
                raise my standards by learning from high quality resources and
                the many smart folks within the developer community.
              </p>
              <p>
                I have gained the necessary skills to build polished user
                interfaces and am seeking a role as a frontend developer, where
                I can continue to grow and help a team to achieve their goals.
              </p>
            </div>
          </div>
        </MaxWidthContainer>
      </section>
      <Divider />
      <section id="projects">
        <MaxWidthContainer>
          <div className="section-layout">
            <div className="section-intro">
              <span className="section-prefix">Projects</span>
              <h2 className="section-heading">What I have been building</h2>
              <h3 className="section-subheading">
                I like to build stuff to consolidate my skills.
              </h3>
            </div>
            <Tabs defaultValue="blog">
              <TabsList aria-label="Tab navigation for projects">
                <Tab value="blog">
                  <TabHeading>Blog</TabHeading>
                  <TabSubheading>
                    A technical blog for developers.
                  </TabSubheading>
                  <TabLink to="projects/blog">Project details</TabLink>
                </Tab>
                <Tab value="yakk">
                  <TabHeading>Yakk</TabHeading>
                  <TabSubheading>A realtime chat application.</TabSubheading>
                  <TabLink to="projects/yakk">Project details</TabLink>
                </Tab>
              </TabsList>
              <TabContent value="blog">
                <div className="tab-img-container">
                  <Link to="projects/blog">
                    <picture>
                      <source
                        media="(max-width: 34.375rem) and (prefers-color-scheme: light)"
                        srcSet={getSrcSet(
                          theme === 'dark'
                            ? 'project-blog-small-01-dark'
                            : 'project-blog-small-01',
                          {
                            devicePixelRatios: [1, 2, 3],
                            widths: [375, 750, 1125],
                          },
                        )}
                        width={375}
                        height={360}
                      />
                      <source
                        media="(max-width: 34.375rem) and (prefers-color-scheme: dark)"
                        srcSet={getSrcSet(
                          theme === 'light'
                            ? 'project-blog-small-01'
                            : 'project-blog-small-01-dark',
                          {
                            devicePixelRatios: [1, 2, 3],
                            widths: [375, 750, 1125],
                          },
                        )}
                        width={375}
                        height={360}
                      />
                      <source
                        media="(min-width: 34.376rem) and (prefers-color-scheme: light)"
                        srcSet={getSrcSet(
                          theme === 'dark'
                            ? 'project-preview-blog-dark'
                            : 'project-preview-blog',
                          {
                            devicePixelRatios: [1, 2, 3],
                            widths: [528, 1056, 1584],
                          },
                        )}
                        width={531}
                        height={433}
                      />
                      <source
                        media="(min-width: 34.376rem) and (prefers-color-scheme: dark)"
                        srcSet={getSrcSet(
                          theme === 'light'
                            ? 'project-preview-blog'
                            : 'project-preview-blog-dark',
                          {
                            devicePixelRatios: [1, 2, 3],
                            widths: [528, 1056, 1584],
                          },
                        )}
                        width={531}
                        height={433}
                      />
                      <img
                        alt="Preview of blog project"
                        className="tab-img shadow"
                        loading="lazy"
                        srcSet={getSrcSet(
                          theme === 'light'
                            ? 'project-preview-blog'
                            : 'project-preview-blog-dark',
                          {
                            devicePixelRatios: [1, 2, 3],
                            widths: [528, 1056, 1584],
                          },
                        )}
                        src={getSrc(
                          !theme || theme === 'light'
                            ? 'project-preview-blog'
                            : 'project-preview-blog-dark',
                          {width: 1056},
                        )}
                        width={531}
                        height={433}
                      />
                    </picture>
                  </Link>
                </div>
              </TabContent>
              <TabContent value="yakk" className="tab-content">
                <div className="tab-img-container">
                  <Link to="projects/yakk">
                    <picture>
                      <source
                        media="(max-width: 34.375rem)"
                        srcSet={getSrcSet(
                          theme === 'light'
                            ? 'project-yakk-01-small'
                            : 'project-blog-dark-01-small',
                          {
                            devicePixelRatios: [1, 2, 3],
                            widths: [375, 750, 1125],
                          },
                        )}
                        width={375}
                        height={360}
                      />
                      <img
                        alt="Preview of Yakk project"
                        className="tab-img shadow"
                        loading="lazy"
                        srcSet={getSrcSet(
                          theme === 'light'
                            ? 'project-preview-yakk'
                            : 'project-preview-yakk-dark',
                          {
                            devicePixelRatios: [1, 2, 3],
                            widths: [528, 1056, 1584],
                          },
                        )}
                        src={getSrc(
                          theme === 'light'
                            ? 'project-preview-yakk'
                            : 'project-preview-yakk-dark',
                          {width: 1056},
                        )}
                        width={531}
                        height={433}
                      />
                    </picture>
                  </Link>
                </div>
              </TabContent>
            </Tabs>
          </div>
        </MaxWidthContainer>
      </section>
      <section id="contact" className="section-bg-primary">
        <MaxWidthContainer>
          <div className="section-layout">
            <div className="section-intro">
              <span className="section-prefix alt">Contact</span>
              <h2 className="section-heading alt">Let's connect</h2>
              <h3 className="section-subheading alt">
                I'd be delighted to hear from you.
              </h3>
            </div>
            <div className="contact-container">
              <div className="social-grid">
                <SocialCard
                  icon={<Twitter size={24} color="hsl(var(--white))" />}
                  platform="Twitter"
                  username="@tomhendra"
                  url="https://twitter.com/tomhendra"
                />
                <SocialCard
                  icon={<Linkedin size={24} color="hsl(var(--white))" />}
                  platform="LinkedIn"
                  username="tom-hendra"
                  url="https://www.linkedin.com/in/tom-hendra/"
                />
                <SocialCard
                  icon={<GitHub size={24} color="hsl(var(--white))" />}
                  platform="GitHub"
                  username="tomhendra"
                  url="https://github.com/tomhendra"
                />
                <SocialCard
                  icon={<Codepen size={24} color="hsl(var(--white))" />}
                  platform="CodePen"
                  username="tomhendra"
                  url="https://codepen.io/tomhendra"
                />
              </div>
              <div className="contact-form-container shadow">
                <Form
                  replace
                  method="post"
                  className={clsx(
                    'form',
                    state === 'success' && 'visually-hidden',
                  )}
                  aria-hidden={state === 'success'}
                  ref={formRef}
                >
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="First name"
                    ref={nameInputRef}
                    required
                    aria-describedby="contact-error-message"
                    disabled={state === 'submitting'}
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@company.com"
                    ref={emailInputRef}
                    required
                    aria-describedby="contact-error-message"
                    disabled={state === 'submitting'}
                  />
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    aria-describedby="contact-error-message"
                    rows={5}
                    maxLength={1000}
                    disabled={state === 'submitting'}
                  />
                  <p
                    id="contact-error-message"
                    className="contact-error-message"
                  >
                    {state === 'error' ? (
                      `Error: ${actionData.errors.map(
                        (error: Error) => error.message,
                      )}`
                    ) : (
                      <>&nbsp;</>
                    )}
                  </p>
                  <Button
                    size="xl"
                    variant="primary"
                    type="submit"
                    disabled={state === 'submitting'}
                  >
                    {state === 'submitting' ? 'Sending...' : 'Send'}
                  </Button>
                </Form>
                <div
                  className={clsx(
                    'contact-success-message',
                    state !== 'success' && 'visually-hidden',
                  )}
                  aria-hidden={state !== 'success'}
                >
                  {/* TODO: tabIndex={-1} is req'd to pass lighthouse audit, 
                  but animating the success message would be much better with 
                  Framer Motion */}
                  <h2 tabIndex={state !== 'success' ? -1 : 0} ref={successRef}>
                    Thanks for your message!
                  </h2>
                  <p tabIndex={state !== 'success' ? -1 : 0}>
                    I will be in touch with to you very soon.
                  </p>
                  <Button
                    as="link"
                    variant="secondary-gray"
                    size="md"
                    to="/#contact"
                    tabIndex={state !== 'success' ? -1 : 0}
                  >
                    Reset contact form
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthContainer>
      </section>
    </main>
  );
}

export {links, Index as default};
