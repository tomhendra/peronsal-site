/** @jsx jsx */
import { jsx } from '@emotion/react';

import { Children } from '../../../utils/types';

type Props = {
  externalLink: string;
  children: Children;
};

export const StyledAnchor = ({ externalLink, children }: Props) => (
  <a
    href={externalLink}
    target="blank"
    rel="noopener"
    css={{ textDecoration: 'none' }}
  >
    {children}
  </a>
);
