import type {LinksFunction, LoaderFunction} from '@remix-run/cloudflare';
import {Link, useLoaderData} from '@remix-run/react';
import MaxWidthContainer from '~/components/MaxWidthContainer';
import {getAllMarkdownAttributes} from '~/helpers/github-md.server';
import type {Attributes} from '~/types';

import {links as maxWidthContainerLinks} from '~/components/MaxWidthContainer';
import styles from '~/styles/index.css';
import {ArrowUpRight} from 'react-feather';

const links: LinksFunction = () => [
  ...maxWidthContainerLinks(),
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
            <p className="hero-prefix">{`${data.length} Articles`}</p>
            <h1 className="hero-heading">Tom's Blog</h1>
            <h2 className="hero-subheading">
              Discoveries from the world of web development.
            </h2>
          </div>
        </MaxWidthContainer>
      </section>
      <section>
        <MaxWidthContainer>
          <div className="article-preview-grid">
            {data.map((article: Attributes) => {
              return (
                <article key={article.sha}>
                  <Link
                    className="article-link"
                    to={`articles/${article.slug}`}
                  >
                    <p className="article-date">{article.date}</p>
                    <div className="article-heading">
                      <h3 className="article-title">{article.title}</h3>
                      <ArrowUpRight
                        className="article-heading-icon"
                        color="var(--color-heading)"
                      />
                    </div>
                    <p className="article-subtitle">{article.subtitle}</p>
                  </Link>
                  <ul className="article-tag-list">
                    {article.tags.map(tag => (
                      <li className="article-tag" key={tag}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </MaxWidthContainer>
      </section>
    </main>
  );
}

export {links, Index as default};
