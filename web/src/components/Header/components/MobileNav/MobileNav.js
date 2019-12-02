import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import { withMediaQueries } from '../../../../assets/styles/style-helpers';

import Burger from './components/Burger';
import NavMenu from './components/NavMenu';

// ....................styles....................

const navStyles = ({ theme }) =>
  withMediaQueries(theme)({
    display: ['flex', 'none'],
    alignItems: 'center',
  });

const NavContainer = styled.div(navStyles);

const MobileNav = () => (
  <NavContainer>
    <Burger />
    <NavMenu />
  </NavContainer>
);

export default withTheme(MobileNav);
