/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Link } from 'gatsby';
import { Children } from '../../utils/types';

import { StyledSpan } from './components';

type Props = {
  internalLink?: string;
  externalLink?: string;
  children: Children;
};

export const InlineLink = ({ internalLink, externalLink, children }: Props) =>
  internalLink ? (
    <StyledSpan>
      <Link to={internalLink}>{children}</Link>
    </StyledSpan>
  ) : (
    <StyledSpan>
      <a target="blank" rel="noopener" href={externalLink}>
        {children}
      </a>
    </StyledSpan>
  );
