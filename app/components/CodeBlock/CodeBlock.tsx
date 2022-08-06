import type {LinksFunction} from '@remix-run/cloudflare';
import React from 'react';

import styles from './code-block.css';

const links: LinksFunction = () => [{rel: 'stylesheet', href: styles}];

function Pre({children}: {children: React.ReactNode}) {
  if (!children) throw Error('Pre: children is required');

  return <pre className="code-block-pre">{children}</pre>;
}

function CodeBlock({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  if (!children) throw Error('CodeBlock: children is required');

  const langClass = 'hljs language-';
  const hasLangClass = className?.startsWith(langClass);

  const lang = hasLangClass
    ? className?.slice(langClass.length, className.length + 1).toUpperCase()
    : '';

  return (
    <>
      <span className="code-block-lang">{lang}</span>
      <code className={className}>{children}</code>
    </>
  );
}

export {links, Pre, CodeBlock};
