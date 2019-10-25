import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { withTheme } from 'emotion-theming';

import Logo from './components/Logo';
import Navbar from './components/Navbar';

import { withMediaQueries } from '../../assets/styles/style-helpers';
import { colors, sizes } from '../../assets/styles/constants';

const { NEUTRAL } = colors;
const { FOXTROT } = sizes;

/**
 * `....................styles....................`
 */

const headerStyles = ({ theme }) => ({
  alignItems: 'center',
  backgroundColor: theme.colors.bodyBg,
  borderBottom: `${theme.borderWidth.alpha} solid ${theme.colors.n800}`,
  display: 'flex',
  height: '6rem',
  padding: '0 4rem',
  position: 'fixed',
  top: 0,
  width: '100vw',
  zIndex: theme.zIndex.header,
});

const containerStyles = ({ theme }) => {
  return withMediaQueries(theme)({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto',
    maxWidth: [...theme.breakpoints],
    width: '100%',
  });
};

/**
 * `....................component....................`
 */

const HeaderElement = styled.header(headerStyles);
const HeaderContainer = styled.div(containerStyles);

const Header = () => (
  <HeaderElement>
    <HeaderContainer>
      <Link to="/" css={{ fontSize: 0, lineHeight: 0 }}>
        <Logo size={FOXTROT} color={NEUTRAL} />
      </Link>
      <Navbar />
    </HeaderContainer>
  </HeaderElement>
);

export default withTheme(Header);
