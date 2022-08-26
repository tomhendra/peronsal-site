import type {
  LinksFunction,
  LoaderArgs,
  MetaFunction,
} from '@remix-run/cloudflare';
import {useLoaderData} from '@remix-run/react';
import parse, {
  attributesToProps,
  domToReact,
  Element,
  type HTMLReactParserOptions,
} from 'html-react-parser';
import {CodeBlock, Pre, Code} from '~/components/Code';
import Image from '~/components/Image';
import MaxWidthContainer from '~/components/MaxWidthContainer';
import {getMarkdownFile} from '~/helpers/github-md.server';
import {getSeoMeta} from '~/helpers/seo';

import {links as codeBlockLinks} from '~/components/Code';
import {links as imageLinks} from '~/components/Image';
import {links as maxWidthContainerLinks} from '~/components/MaxWidthContainer';
import styles from '~/styles/article.css';

const meta: MetaFunction = ({data, params}) => {
  let seoMeta = getSeoMeta({
    title: data.attributes.title,
    description: data.attributes.description,
    openGraph: {
      siteName: 'Tom Hendra',
      title: data.attributes.title,
      description: data.attributes.description,
      type: 'website',
      url: `https://tomhendra.dev/${params.slug}`,
      images: [
        {
          url: data.attributes?.og_image,
          secureUrl: data.attributes?.og_image,
          alt: `Stylised cute robot logo with the article title: ${data.attributes.title}, @tomhendra and tomhendra.dev`,
          height: 1920,
          width: 3840,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@tomhendra',
      title: data.attributes.title,
      description: data.attributes.description,
    },
  });
  return {
    ...seoMeta,
  };
};

const links: LinksFunction = () => [
  ...maxWidthContainerLinks(),
  ...imageLinks(),
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

    if (domNode.name === 'a') {
      const props = attributesToProps(domNode?.attribs);
      const {href, ...rest} = props;
      return (
        <a className="article-link click-target-helper" href={href} {...rest}>
          {domToReact(domNode?.children, options)}
        </a>
      );
    }

    if (domNode?.name === 'pre') {
      return <Pre>{domToReact(domNode?.children, options)}</Pre>;
    }
    /*
       for code blocks, Highlight.js prepends 'hljs language-<lang>' to the 
       class name of <code> elements and wraps them in a <pre> element.
       Inline code elements have no class name assigned by default.
       We exploit this behaviour to differentiate between the two.
     */
    const isCodeBlock = domNode?.attribs?.class?.startsWith('hljs language-');

    if (domNode?.name === 'code' && isCodeBlock) {
      const props = attributesToProps(domNode?.attribs);
      return (
        <CodeBlock {...props}>
          {domToReact(domNode?.children, options)}
        </CodeBlock>
      );
    }

    if (domNode?.name === 'code' && !isCodeBlock) {
      return <Code>{domToReact(domNode?.children, options)}</Code>;
    }

    if (domNode?.name === 'img') {
      const props = attributesToProps(domNode?.attribs);
      const {src, alt, title, ...rest} = props;
      return (
        <Image
          src={src}
          alt={alt}
          title={title}
          width={720}
          height={480}
          widths={[375, 750, 1125, 768, 1536, 2304, 720, 1440, 2160]}
          sizes={[
            '(max-width:34.375rem) 80vw',
            '(max-width:68.75rem) 70vw',
            '(max-width:93.75rem) 60vw',
            '720px',
          ]}
          transformations={{
            background: 'rgb:e6e9ee',
          }}
          {...rest}
        />
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

export {meta, links, loader, Article as default};
