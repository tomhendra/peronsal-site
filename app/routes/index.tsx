import type {LinksFunction, LoaderFunction} from '@remix-run/cloudflare';
import {useLoaderData} from '@remix-run/react';
import {MapPin} from 'react-feather';
import Button from '~/components/Button';
import FeatureIcon from '~/components/FeatureIcon';
import MaxWidthContainer from '~/components/MaxWidthContainer';
import {getAllMarkdownAttributes} from '~/helpers/github-md.server';
import type {PostAttributes} from '~/types';

import {links as buttonLinks} from '~/components/Button';
import {links as featureIconLinks} from '~/components/FeatureIcon';
import {links as maxWidthContainerLinks} from '~/components/MaxWidthContainer';
import styles from '~/styles/index.css';

const links: LinksFunction = () => [
  ...maxWidthContainerLinks(),
  ...featureIconLinks(),
  ...buttonLinks(),
  {rel: 'stylesheet', href: styles},
];

export const loader: LoaderFunction = async () => {
  const attributes = await getAllMarkdownAttributes();
  return attributes;
};

function Index() {
  const data = useLoaderData();

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
                I'm a frontend developer from the UK who loves to build quality
                user interfaces for the web.
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
          </div>
        </MaxWidthContainer>
      </section>
      <section>
        <MaxWidthContainer>
          <ul>
            {data.map((post: PostAttributes) => {
              return <li key={post.sha}>{post.title}</li>;
            })}
          </ul>
        </MaxWidthContainer>
      </section>
    </main>
  );
}

export {links, Index as default};
