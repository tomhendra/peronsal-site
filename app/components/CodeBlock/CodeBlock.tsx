import type {LinksFunction} from '@remix-run/cloudflare';

import styles from './code-block.css';

const links: LinksFunction = () => [{rel: 'stylesheet', href: styles}];

function CodeBlock({children}: {children: React.ReactNode}) {
  if (!children) throw Error('CodeBlock: children is required');

  return (
    <div className="code-block">
      <pre>{children}</pre>
    </div>
  );
}

export {links, CodeBlock as default};
