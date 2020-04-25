import React from 'react';

import { useSiteMetadata } from '../../../../hooks';

import { Logo } from '../../..';
import { StyledSpan } from './components';

export const Copyright = () => {
  const { siteMetadata } = useSiteMetadata();
  const date = new Date().getFullYear();
  return (
    <div
      css={{
        alignItems: 'center',
        display: 'flex',
      }}
    >
      <Logo color="neutral" size="echo" spacingRight="bravo" />
      <StyledSpan>
        {siteMetadata.author}&nbsp;&copy;&nbsp;{date}
      </StyledSpan>
    </div>
  );
};
