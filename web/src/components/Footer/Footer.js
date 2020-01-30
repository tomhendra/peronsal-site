import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import { withMediaQueries } from '../../assets/styles/style-helpers';

import Copyright from './components/Copyright';
import Social from './components/Social';
import Navbar from './components/Navbar';

// ....................styles....................

const footerStyles = ({ theme }) =>
  withMediaQueries(theme)({
    backgroundColor: theme.colors.n700,
    color: theme.colors.n400,
    paddingTop: theme.spacings.india,
    paddingBottom: theme.spacings.india,
    width: '100vw',
    zIndex: theme.zIndex.footer,
  });

const containerStyles = ({ theme }) =>
  withMediaQueries(theme)({
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    maxWidth: [
      theme.grid.alpha.maxWidth,
      theme.grid.bravo.maxWidth,
      theme.grid.charlie.maxWidth,
      theme.grid.delta.maxWidth,
    ],
    padding: [
      `0 ${theme.grid.alpha.gutter}`,
      `0 ${theme.grid.bravo.gutter}`,
      `0 ${theme.grid.charlie.gutter}`,
      `0 ${theme.grid.delta.gutter}`,
    ],
    width: '100vw',
  });

const dividerStyles = ({ theme }) => ({
  backgroundColor: theme.colors.n500,
  height: theme.borderWidth.delta,
  marginBottom: theme.spacings.echo,
  marginTop: theme.spacings.charlie,
});

const linkContainerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
};

// ....................component....................

const FooterElement = styled.footer(footerStyles);
const FooterContainer = styled.div(containerStyles);
const FooterDivider = styled.div(dividerStyles);
const FooterLinksContainer = styled.div(linkContainerStyles);

function Footer() {
  return (
    <FooterElement>
      <FooterContainer>
        <Copyright />
        <FooterDivider />
        <FooterLinksContainer>
          <Social />
          <Navbar />
        </FooterLinksContainer>
      </FooterContainer>
    </FooterElement>
  );
}

export default withTheme(Footer);
