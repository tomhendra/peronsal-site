import React from 'react';

// import useSiteMetadata from '../../../../hooks/useSiteMetadata';

import { Logo } from '../../..';
import { StyledSpan } from './components';

export const Copyright = () => (
  // const { siteMetadata } = useSiteMetadata();
  // const date = new Date().getFullYear();

  <div
    css={{
      alignItems: 'center',
      display: 'flex',
    }}
  >
    <Logo color="neutral" size="echo" spacingRight="bravo" />
    <StyledSpan>
      {/* {siteMetadata.author}&nbsp; &copy; &nbsp;{date} */}
      To do: Refactor hooks to TypeScript
    </StyledSpan>
  </div>
);
