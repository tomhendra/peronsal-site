import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import { withMediaQueries } from '../../assets/styles/style-helpers';

import Copyright from './components/Copyright';
import Social from './components/Social';
import Switch from './components/Switch';

/**
 * `....................styles....................`
 */

const footerStyles = ({ theme }) => ({
  label: 'footer',
  alignItems: 'center',
  backgroundColor: theme.colors.bodyBg,
  borderTop: `${theme.borderWidth.alpha} solid ${theme.colors.n800}`,
  color: theme.colors.n400,
  display: 'flex',
  height: '6rem',
  padding: '0 4rem',
  width: '100vw',
  zIndex: theme.zIndex.footer,
});

const containerStyles = ({ theme }) => {
  return withMediaQueries(theme)({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto',
    maxWidth: [...theme.breakpoints],
    width: '100%',

    '& > *': {
      minWidth: '12rem',
    },
  });
};

/**
 * `....................component....................`
 */

const FooterElement = styled.footer(footerStyles);
const FooterContainer = styled.div(containerStyles);

const Footer = () => (
  <FooterElement>
    <FooterContainer>
      <Copyright />
      <Social />
      <Switch />
    </FooterContainer>
  </FooterElement>
);

export default withTheme(Footer);
