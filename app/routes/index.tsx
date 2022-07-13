import type {LinksFunction, LoaderFunction} from '@remix-run/cloudflare';
import {useLoaderData} from '@remix-run/react';
import {MapPin} from 'react-feather';
import Button from '~/components/Button';
import Link from '~/components/Link';
import FeatureIcon from '~/components/FeatureIcon';
import MaxWidthContainer from '~/components/MaxWidthContainer';
import {getAllMarkdownAttributes} from '~/helpers/github-md.server';
import type {Attributes} from '~/types';

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
      <section>
        <MaxWidthContainer>
          <div className="hero-layout">
            <div className="intro">
              <p className="count">{`${data.length} Articles`}</p>
              <h1>Tom's Blog</h1>
              <h2 className="section-subheading">
                Discoveries from the world of web development.
              </h2>
            </div>
          </div>
        </MaxWidthContainer>
      </section>
      <section>
        <MaxWidthContainer>
          <div className="article-preview-grid">
            {data.map((article: Attributes) => {
              return (
                <div className="article-preview" key={article.sha}>
                  <p>{article.date}</p>
                  <Link to={`articles/${article.slug}`}>
                    <h3>{article.title}</h3>
                  </Link>
                  <p>{article.subtitle}</p>
                  <ul>
                    {article.tags.map(tag => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </MaxWidthContainer>
      </section>
    </main>
  );
}

export {links, Index as default};
