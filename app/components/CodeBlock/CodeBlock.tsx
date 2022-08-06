import type {LinksFunction} from '@remix-run/cloudflare';
import React from 'react';

import styles from './code-block.css';

const links: LinksFunction = () => [{rel: 'stylesheet', href: styles}];

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

export {links, CodeBlock as default};
