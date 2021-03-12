import { Logo } from '..';

import {
  StyledHeader,
  StyledContainer,
  StyledLink,
  Navbar,
  MobileNav,
} from './components';

export const Header = () => (
  <StyledHeader>
    <StyledContainer>
      <StyledLink to="/">
        <Logo size="foxtrot" color="neutral" />
      </StyledLink>
      <MobileNav />
      <Navbar />
    </StyledContainer>
  </StyledHeader>
);
