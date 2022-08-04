import type {LinksFunction, LoaderArgs} from '@remix-run/cloudflare';
import {useLoaderData} from '@remix-run/react';
import parse, {
  domToReact,
  Element,
  type HTMLReactParserOptions,
} from 'html-react-parser';
import React from 'react';
import MaxWidthContainer from '~/components/MaxWidthContainer';
import CodeBlock from '~/components/CodeBlock';
import {getMarkdownFile} from '~/helpers/github-md.server';

import {links as maxWidthContainerLinks} from '~/components/MaxWidthContainer';
import {links as codeBlockLinks} from '~/components/CodeBlock';
import styles from '~/styles/article.css';

const links: LinksFunction = () => [
  ...maxWidthContainerLinks(),
  ...codeBlockLinks(),
  {rel: 'stylesheet', href: styles},
];

async function loader(args: LoaderArgs) {
  const {slug} = args.params;
  const markdown = await getMarkdownFile(`${slug}.md`);

  if (!markdown) {
    throw new Response('Not found', {status: 404});
  }

  return markdown;
}

const components: {[index: string]: React.ReactNode} = {
  pre: CodeBlock,
  // code: Code,
  // img: Image,
  // blockquote: Blockquote,
};

const options: HTMLReactParserOptions = {
  replace: domNode => {
    if (!(domNode instanceof Element)) return;

    if (Object.hasOwn(components, domNode.name)) {
      const Component = components[domNode.name] as keyof JSX.IntrinsicElements;
      return <Component>{domToReact(domNode.children, options)}</Component>;
    }
  },
};

function Article() {
  const data = useLoaderData<typeof loader>();
  const {html, attributes} = data;

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
          <hr className="article-divider" />
          {parse(html, options)}
        </div>
      </section>
    </main>
  );
}

export {links, loader, Article as default};
