import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import { withMediaQueries } from '../../assets/styles/style-helpers';

import Copyright from './components/Copyright';
import Social from './components/Social';

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
    width: '100%',
  });

const dividerStyles = ({ theme }) => ({
  backgroundColor: theme.colors.n500,
  height: theme.borderWidth.delta,
  marginBottom: theme.spacings.echo,
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
          {/* Footer nav goes here */}
          <ul
            css={{
              display: 'flex',
              listStyle: 'none',
              textTransform: 'uppercase',
              '& > :not(:last-of-type)': { marginRight: '42px' },
            }}
          >
            <li>placeholder 1</li>
            <li>placeholder 2</li>
            <li>placeholder 3</li>
            <li>placeholder 4</li>
            <li>placeholder 5</li>
          </ul>
        </FooterLinksContainer>
      </FooterContainer>
    </FooterElement>
  );
}

export default withTheme(Footer);
