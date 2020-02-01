import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import { withMediaQueries } from '../../assets/styles/style-helpers';

import Grid from '../Grid';
import Item from '../Item';
import Copyright from './components/Copyright';
import Social from './components/Social';
import Navbar from './components/Navbar';

import { sizes } from '../../assets/styles/style-enums';

const { BRAVO, CHARLIE, DELTA, ECHO, FOXTROT } = sizes;

// ....................styles....................

const footerStyles = ({ theme }) =>
  withMediaQueries(theme)({
    backgroundColor: theme.colors.n700,
    color: theme.colors.n400,
    paddingTop: [
      theme.spacings.hotel,
      theme.spacings.india,
      theme.spacings.india,
      theme.spacings.juliett,
    ],
    paddingBottom: [
      theme.spacings.golf,
      theme.spacings.hotel,
      theme.spacings.hotel,
      theme.spacings.hotel,
    ],
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
});

// ....................component....................

const FooterElement = styled.footer(footerStyles);
const FooterContainer = styled.div(containerStyles);
const FooterDivider = styled.div(dividerStyles);

function Footer() {
  return (
    <FooterElement>
      <FooterContainer>
        <Grid>
          <Item
            gridColStart={[1, 1, 1, 1]}
            gridColEnd={[5, 5, 5, 3]}
            gridRowStart={[1, 1, 1, 1]}
            gridRowEnd={[2, 2, 2, 2]}
            spacingBottom={[DELTA, FOXTROT, FOXTROT, CHARLIE]}
            justifyContent="center"
          >
            <Copyright />
          </Item>
          <Item
            gridColStart={[1, 1, 1, 1]}
            gridColEnd={[9, 13, 13, 13]}
            gridRowStart={[3, 2, 2, 2]}
            gridRowEnd={[4, 3, 3, 3]}
            spacingBottom={[BRAVO, BRAVO, BRAVO, ECHO]}
          >
            <FooterDivider />
          </Item>
          <Item
            gridColStart={[1, 6, 6, 1]}
            gridColEnd={[9, 13, 13, 5]}
            gridRowStart={[2, 1, 1, 3]}
            gridRowEnd={[3, 2, 2, 4]}
            spacingBottom={[FOXTROT, FOXTROT, FOXTROT, 0]}
          >
            <Social />
          </Item>
          <Item
            gridColStart={[1, 3, 3, 6]}
            gridColEnd={[9, 13, 13, 13]}
            gridRowStart={[4, 3, 3, 3]}
            gridRowEnd={[5, 4, 4, 4]}
          >
            <Navbar />
          </Item>
        </Grid>
      </FooterContainer>
    </FooterElement>
  );
}

export default withTheme(Footer);
