import { useRef, useEffect } from "react";
import { Form, useActionData, useTransition } from "@remix-run/react";
import { MapPin, Twitter, Linkedin, GitHub, Codepen } from "react-feather";
import clsx from "clsx";
import FeatureIcon from "~/components/FeatureIcon";
import Button from "~/components/Button";
import Image from "~/components/Image";
import SocialCard from "~/components/SocialCard";
import MaxWidthContainer from "~/components/MaxWidthContainer";
import Divider from "~/components/Divider";
import Link from "~/components/Link";
import {
  Tabs,
  TabsList,
  Tab,
  TabHeading,
  TabSubheading,
  TabLink,
  TabContent,
} from "~/components/TabNav";
import { getImageBuilder, getImgProps } from "~/helpers/image.helpers";
import type { ActionFunction } from "@remix-run/cloudflare";
import type { LinksFunction } from "@remix-run/cloudflare";

import { links as maxWidthContainerLinks } from "~/components/MaxWidthContainer";
import { links as featureIconLinks } from "~/components/FeatureIcon";
import { links as buttonLinks } from "~/components/Button";
import { links as imageLinks } from "~/components/Image";
import { links as tabNavLinks } from "~/components/TabNav";
import { links as socialCardLinks } from "~/components/SocialCard";
import { links as dividerLinks } from "~/components/Divider";
import styles from "~/styles/index.css";

const links: LinksFunction = () => [
  ...maxWidthContainerLinks(),
  ...featureIconLinks(),
  ...buttonLinks(),
  ...imageLinks(),
  ...tabNavLinks(),
  ...socialCardLinks(),
  ...dividerLinks(),
  { rel: "stylesheet", href: styles },
];

export const action: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  const email = data.get("email");
  const name = data.get("name");
  const message = data.get("message");

  const res = await fetch("https://formspree.io/f/xvolddzz", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, name, message }),
  });

  return res.json();
};

function Index() {
  const actionData = useActionData();
  const transition = useTransition();

  let state: "idle" | "success" | "error" | "submitting" = transition.submission
    ? "submitting"
    : actionData?.ok
    ? "success"
    : actionData?.error
    ? "error"
    : "idle";

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
    if (state === "error") {
      const errors = actionData?.errors;

      if (errors.map((error: FormspreeErrorRes) => error.field === "email")) {
        emailInputRef.current?.focus();
      }
    }

    if (state === "idle" && mounted.current) {
      formRef.current?.reset();
      nameInputRef.current?.select();
    }

    if (state === "success") {
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
              <h3 className="section-subheading">
                I'm a web developer from the UK who loves to build quality user
                interfaces for the web.
              </h3>
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
            <Image
              src="personal-site/tom-headshot"
              alt="A portrait photo of Tom"
              credit="María Teresa Valverde Calvo"
              ratio="4 / 5"
            />
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
                In 2018 I sold everything I owned, quit my job in procurement,
                and moved to Spain to become a developer. New country, new
                language, new career, new life.
              </h3>
            </div>
            <div className="columns">
              <p>
                While shipping WordPress sites to pay the bills, I have been in
                pursuit of my chosen career trajectory ever since; as a software
                developer within the vast and vibrant JavaScript community.
              </p>
              <p>
                I knew learning to code was the right path for me after
                struggling with an algorithm challenge for a cash register. The
                feeling when my solution finally passed the tests was absolute
                euphoria!
              </p>
              <p>
                I build web apps with modern JavaScript frameworks, and
                continuously raise my standards by learning from quality
                resources and listening to other members of the developer
                community.
              </p>
              <p>
                I have the skills required to create polished user interfaces
                and am seeking a permanent role as a frontend developer, where I
                can continue to grow and help my team to achieve their goals.
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
              <h2 className="section-heading">I have been shipping</h2>
              <h3 className="section-subheading">
                I love to build projects with technologies I have learned about.
              </h3>
            </div>
            <Tabs defaultValue="nata">
              <TabsList aria-label="Tab navigation for projects">
                <Tab value="nata">
                  <TabHeading>Nata</TabHeading>
                  <TabSubheading>
                    A realtime chat application inspired by Discord.
                  </TabSubheading>
                  <TabLink to="projects/nata">Project details</TabLink>
                </Tab>
                <Tab value="blog">
                  <TabHeading>Blog</TabHeading>
                  <TabSubheading>
                    A place to share my discoveries with the world.
                  </TabSubheading>
                  <TabLink to="projects/blog">Project details</TabLink>
                </Tab>
              </TabsList>
              <TabContent value="nata">
                <Link to="projects/nata">
                  <img
                    alt="placeholder"
                    src="https://via.placeholder.com/1080x492?text=Nata"
                    style={{
                      width: "1080px",
                      height: "492px",
                      objectFit: "cover",
                    }}
                  />
                </Link>
              </TabContent>
              <TabContent value="blog">
                <Link to="projects/blog">
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <img
                    className="tab-img shadow"
                    title="Untitled UI"
                    width="530px"
                    height="430px"
                    {...getImgProps(
                      getImageBuilder(
                        "personal-site/blog-mockup-desktop-01",
                        "Screen shot of blog desktop design - preview"
                      ),
                      {
                        widths: [280, 560, 840, 1100, 1650, 2500, 2100, 3100],
                        sizes: [
                          "(max-width:1023px) 80vw",
                          "(min-width:1024px) and (max-width:1620px) 67vw",
                          "1100px",
                        ],
                        transformations: {
                          background: "rgb:e6e9ee",
                        },
                      }
                    )}
                  />
                </Link>
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
                I'm always happy to enhance my circle.
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
              <div className="contact-form-container">
                <Form
                  replace
                  method="post"
                  className={clsx(
                    "form",
                    state === "success" && "visually-hidden"
                  )}
                  aria-hidden={state === "success"}
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
                    disabled={state === "submitting"}
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
                    disabled={state === "submitting"}
                  />
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    aria-describedby="contact-error-message"
                    rows={5}
                    maxLength={1000}
                    disabled={state === "submitting"}
                  />
                  <p
                    id="contact-error-message"
                    className="contact-error-message"
                  >
                    {state === "error" ? (
                      `Error: ${actionData.errors.map(
                        (error: Error) => error.message
                      )}`
                    ) : (
                      <>&nbsp;</>
                    )}
                  </p>
                  <Button
                    size="xl"
                    variant="primary"
                    type="submit"
                    disabled={state === "submitting"}
                  >
                    {state === "submitting" ? "Sending..." : "Send"}
                  </Button>
                </Form>
                <div
                  className={clsx(
                    "contact-success-message",
                    state !== "success" && "visually-hidden"
                  )}
                  aria-hidden={state !== "success"}
                >
                  <h2 ref={successRef}>Thanks for your message!</h2>
                  <p>I will be in touch with to you very soon.</p>
                  <Link variant="primary" to="/#contact">
                    Reset contact form
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthContainer>
      </section>
    </main>
  );
}

export { links, Index as default };
