import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { withTheme } from 'emotion-theming';

import Logo from '../Logo';
import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';

import {
  withMediaQueries,
  shadowStandardCharlie,
} from '../../assets/styles/style-helpers';
import { colors, sizes } from '../../assets/styles/style-enums';

const { NEUTRAL } = colors;
const { FOXTROT } = sizes;

// ....................styles...................

const elementStyles = ({ theme }) =>
  withMediaQueries(theme)({
    ...shadowStandardCharlie(theme.colors.shadowNeutral),
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    display: 'flex',
    height: ['5rem', '5rem', '6rem', '6rem', '6rem'],
    padding: [
      `0 ${theme.grid.alpha.gutter}`,
      `0 ${theme.grid.bravo.gutter}`,
      `0 ${theme.grid.charlie.gutter}`,
      `0 ${theme.grid.delta.gutter}`,
      `0 ${theme.grid.echo.gutter}`,
    ],
    position: 'fixed',
    top: 0,
    width: '100vw',
    zIndex: theme.zIndex.header,
  });

const containerStyles = ({ theme }) =>
  withMediaQueries(theme)({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto',
    maxWidth: [
      '100vw',
      '100vw',
      theme.grid.charlie.maxWidth,
      theme.grid.delta.maxWidth,
      theme.grid.echo.maxWidth,
    ],
    width: '100%',
  });

const logoLinkStyles = {
  fontSize: 0,
  lineHeight: 0,
};

// ....................component....................

const HeaderElement = styled.header(elementStyles);
const HeaderContainer = styled.div(containerStyles);
const LogoLink = styled(Link)(logoLinkStyles);

function Header() {
  return (
    <HeaderElement>
      <HeaderContainer>
        <LogoLink to="/">
          <Logo size={FOXTROT} color={NEUTRAL} />
        </LogoLink>
        <MobileNav />
        <Navbar />
      </HeaderContainer>
    </HeaderElement>
  );
}

export default withTheme(Header);
