import type {LinksFunction} from '@remix-run/cloudflare';
import clsx from 'clsx';
import MaxWidthContainer from '../MaxWidthContainer';

import {links as MaxWidthContainerLinks} from '../MaxWidthContainer';
import styles from './divider.css';

const links: LinksFunction = () => [
  ...MaxWidthContainerLinks(),
  {rel: 'stylesheet', href: styles},
];

type Props = {
  variant?: 'grey' | 'primary';
};

function Divider({variant = 'grey'}: Props) {
  return (
    <MaxWidthContainer>
      <div className={clsx('divider', variant)} />
    </MaxWidthContainer>
  );
}

export {links, Divider as default};
