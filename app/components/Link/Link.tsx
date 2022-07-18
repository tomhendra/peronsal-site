import {Link as LinkPrimitive} from '@remix-run/react';
import type {LinkProps} from '@remix-run/react';
import type {LinksFunction} from '@remix-run/cloudflare';
import styles from './link.css';
import clsx from 'clsx';

const links: LinksFunction = () => {
  return [{rel: 'stylesheet', href: styles}];
};

type BaseProps = {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'gray' | 'white';
  mood?: 'destructive';
  className?: string;
  children: React.ReactNode;
};

type LinkAsLink = BaseProps &
  Omit<LinkProps, keyof BaseProps> & {
    as?: 'link';
  };

type LinkAsExternal = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    as: 'external';
  };

function Link(props: LinkAsLink | LinkAsExternal) {
  const {size, variant, mood} = props;
  const allClassNames = clsx(
    'link',
    'click-target-helper',
    size && size,
    variant && variant,
    mood && mood,
  );

  if (props.as === 'external') {
    const {children, className, ...rest} = props;
    return (
      <a className={clsx(allClassNames, className)} {...rest}>
        {children}
      </a>
    );
  } else {
    const {children, className, ...rest} = props;
    return (
      <LinkPrimitive className={clsx(allClassNames, className)} {...rest}>
        {children}
      </LinkPrimitive>
    );
  }
}

export {links, Link as default};
