import React from 'react';
import styled from '@emotion/styled';

import { withTheme } from 'emotion-theming';

import useSiteMetadata from '../../../../hooks/useSiteMetadata';
import { withMediaQueries } from '../../../../assets/styles/style-helpers';

// ....................styles....................

const styles = ({ theme }) =>
  withMediaQueries(theme)({
    color: theme.colors.n400,
    display: ['none', 'inline-block'],
    fontSize: theme.typography.text.bravo.fontSize,
  });

// ....................component....................

const CopyrightElement = styled.span(styles);

function Copyright() {
  const { siteMetadata } = useSiteMetadata();
  const date = new Date().getFullYear();

  return (
    // prettier-ignore
    <CopyrightElement>
      &copy;
      {' '}
      {siteMetadata.author}
      {' '}
      {date}
    </CopyrightElement>
  );
}

export default withTheme(Copyright);
