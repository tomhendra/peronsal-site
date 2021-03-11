/** @jsx jsx */
import { jsx } from '@emotion/react';

import { Children } from '../../../types/types';

type Props = {
  externalLink: string;
  children: Children;
};

export const StyledAnchor = (props: Props): JSX.Element => {
  const { externalLink, children } = props;
  return (
    <a
      href={externalLink}
      target="blank"
      rel="noopener"
      css={{ textDecoration: 'none' }}
    >
      {children}
    </a>
  );
};
