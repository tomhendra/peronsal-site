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

const linkStyles = {
  textDecoration: 'none',
  '&:visited, &:hover': {
    color: 'inherit',
  },
};

export const InlineLink = ({ internalLink, externalLink, children }: Props) =>
  internalLink ? (
    <StyledSpan>
      <Link to={internalLink} css={linkStyles}>
        {children}
      </Link>
    </StyledSpan>
  ) : (
    <StyledSpan>
      <a target="blank" rel="noopener" href={externalLink} css={linkStyles}>
        >{children}
      </a>
    </StyledSpan>
  );
