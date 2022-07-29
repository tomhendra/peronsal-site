import type {LinksFunction, LoaderFunction} from '@remix-run/cloudflare';
import {useLoaderData} from '@remix-run/react';
import MaxWidthContainer from '~/components/MaxWidthContainer';
import {getMarkdownFile} from '~/helpers/github-md.server';
// import ReactMarkdown from 'react-markdown';

import {links as maxWidthContainerLinks} from '~/components/MaxWidthContainer';
import styles from '~/styles/article.css';
import type {Attributes} from '~/types';

const links: LinksFunction = () => [
  ...maxWidthContainerLinks(),
  {rel: 'stylesheet', href: styles},
];

const loader: LoaderFunction = async ({params}) => {
  const {slug} = params;
  const markdown = await getMarkdownFile(`${slug}.md`);

  if (!markdown) {
    throw new Response('Not found', {status: 404});
  }

  return markdown;
};

type Data = {
  html: string;
  attributes: Attributes;
};

function Article() {
  const data = useLoaderData();
  const {html, attributes} = data as Data;

  return (
    <main>
      <section className="hero-section">
        <MaxWidthContainer>
          <div className="hero-layout">
            <p className="hero-prefix">Posts</p>
            <h1 className="hero-heading">{attributes.title}</h1>
            <h2 className="hero-subheading">{attributes.subtitle}</h2>
            <p className="hero-date">{attributes.date}</p>
          </div>
        </MaxWidthContainer>
      </section>
      <section>
        <div className="article-max-width-container">
          <p className="article-description">{attributes.description}</p>
          <div className="article-divider" />
          {/* <ReactMarkdown>{html}</ReactMarkdown> */}
          <div dangerouslySetInnerHTML={{__html: html}} />
        </div>
      </section>
    </main>
  );
}

export {links, loader, Article as default};
