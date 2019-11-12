import React from 'react';
import styled from '@emotion/styled';

import { withTheme } from 'emotion-theming';

import useSiteMetadata from '../../../../hooks/useSiteMetadata';

/**
 * `....................styles....................`
 */

const styles = ({ theme }) => ({
  color: theme.colors.n600,
  fontSize: theme.typography.text.bravo.fontSize,
});

/**
 * `....................component....................`
 */

const CopyrightElement = styled.span(styles);

const Copyright = () => {
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
};

export default withTheme(Copyright);
