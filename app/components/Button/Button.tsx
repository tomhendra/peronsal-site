import {Link} from '@remix-run/react';
import clsx from 'clsx';

import type {LinksFunction} from '@remix-run/cloudflare';
import type {LinkProps} from '@remix-run/react';
import styles from './button.css';

const links: LinksFunction = () => {
  return [{rel: 'stylesheet', href: styles}];
};

type BaseProps = {
  variant:
    | 'primary'
    | 'secondary'
    | 'secondary-gray'
    | 'tertiary'
    | 'tertiary-gray';
  size: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  mood?: 'destructive';
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: 'button';
  };

type ButtonAsUnstyled = Omit<
  ButtonAsButton,
  'variant' | 'size' | 'mood' | 'as'
> & {
  as: 'unstyled';
};

type ButtonAsLink = BaseProps &
  Omit<LinkProps, keyof BaseProps> & {
    as: 'link';
  };

type ButtonAsExternal = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    as: 'externalLink';
  };

type ButtonProps =
  | ButtonAsButton
  | ButtonAsExternal
  | ButtonAsLink
  | ButtonAsUnstyled;

function Button(props: ButtonProps) {
  if (props.as === 'unstyled') {
    const {className, children, ...rest} = props;
    return (
      <button
        className={clsx('unstyled', 'click-target-helper', className)}
        {...rest}
      >
        {children}
      </button>
    );
  }

  const {size, variant, mood} = props;
  const allClassNames = clsx(
    'btn',
    'click-target-helper',
    size,
    variant,
    mood && mood,
  );

  if (props.as === 'link') {
    const {className, ...rest} = props;
    return (
      <Link className={clsx(allClassNames, className)} {...rest}>
        {props.children}
      </Link>
    );
  } else if (props.as === 'externalLink') {
    const {className, ...rest} = props;
    return (
      <a
        className={clsx(allClassNames, className)}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {props.children}
      </a>
    );
  } else {
    const {className, ...rest} = props;
    return (
      <button className={clsx(allClassNames, className)} {...rest}>
        {props.children}
      </button>
    );
  }
}

export {links, Button as default};
