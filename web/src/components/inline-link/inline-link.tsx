/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Link } from 'gatsby';
import { Children } from '../../types';

import { StyledSpan } from './components';

type Props = {
  internalLink?: string;
  externalLink?: string;
  children: Children;
};

const linkStyles = {
  color: 'inherit',
  textDecoration: 'none',
  '&:visited, &:hover': {
    color: 'inherit',
  },
};

export const InlineLink = (props: Props): JSX.Element => {
  const { internalLink, externalLink, children } = props;

  return internalLink ? (
    <StyledSpan>
      <Link to={internalLink} css={linkStyles}>
        {children}
      </Link>
    </StyledSpan>
  ) : (
    <StyledSpan>
      <a target="blank" rel="noopener" href={externalLink} css={linkStyles}>
        {children}
      </a>
    </StyledSpan>
  );
};
