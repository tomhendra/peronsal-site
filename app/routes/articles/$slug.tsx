import type {LinksFunction, LoaderArgs} from '@remix-run/cloudflare';
import {useLoaderData} from '@remix-run/react';
import parse, {
  attributesToProps,
  domToReact,
  Element,
  type HTMLReactParserOptions,
} from 'html-react-parser';
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

const options: HTMLReactParserOptions = {
  replace: domNode => {
    if (!(domNode instanceof Element)) return;

    if (domNode?.name === 'pre') {
      return (
        <pre style={{position: 'relative'}}>
          {domToReact(domNode?.children, options)}
        </pre>
      );
    }

    if (
      domNode?.name === 'code' &&
      domNode?.attribs?.class?.startsWith('hljs language-')
    ) {
      const props = attributesToProps(domNode?.attribs);

      return (
        <CodeBlock {...props}>
          {domToReact(domNode?.children, options)}
        </CodeBlock>
      );
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
