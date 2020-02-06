import React, { useState } from 'react';
import styled from '@emotion/styled';

import { withMediaQueries } from '../../../../assets/styles/style-helpers';

import Burger from './components/Burger';
import NavMenu from './components/NavMenu';

// ....................styles....................

const containerStyles = ({ theme }) =>
  withMediaQueries(theme)({
    display: ['flex', 'flex', 'none', 'none', 'none'],
    alignItems: 'center',
    position: 'relative',
  });

// ....................component....................

const NavContainer = styled.div(containerStyles);

function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <NavContainer>
      <Burger open={open} setOpen={setOpen} />
      <NavMenu open={open} setOpen={setOpen} />
    </NavContainer>
  );
}

export default MobileNav;
