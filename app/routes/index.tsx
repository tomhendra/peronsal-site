import type {LinksFunction, LoaderFunction} from '@remix-run/cloudflare';
import {useLoaderData} from '@remix-run/react';
import Link from '~/components/Link';
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
      <section className="hero-section">
        <MaxWidthContainer>
          <div className="hero-layout">
            <div className="hero-content">
              <p className="hero-article-count">{`${data.length} Articles`}</p>
              <h1 className="hero-heading">Tom's Blog</h1>
              <h2 className="hero-subheading">
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
