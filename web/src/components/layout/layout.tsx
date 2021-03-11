import { ThemeProvider, Global } from '@emotion/react';
import React from 'react';

import { Wrapper, Header, Footer } from '..';

import { themes } from '../../theme';
import { Children } from '../../types/types';

// TODO: --------> use state to change on switch
const theme = themes.nord;

type Props = {
  children: Children;
};

export const Layout = ({ children }: Props): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Global
      styles={{
        '*,*::before,*::after': {
          margin: 0,
          padding: 0,
          boxSizing: 'inherit',
        },

        html: {
          boxSizing: 'border-box',
          fontSize: '62.5%',
        },

        body: {
          height: '100%',
          width: '100%',
          // remove margin for main div that that Gatsby mounts into
          '> div': {
            marginTop: 0,
          },
          background: theme.colors.bodyBg,
          color: theme.colors.bodyColor,
          fontFamily: theme.fontStack.default,
        },
        button: {
          cursor: 'pointer',
        },

        'button:disabled': {
          cursor: 'default',
        },
      }}
    />
    <Wrapper>
      <Header />
      <main>{children}</main>
      <Footer />
    </Wrapper>
  </ThemeProvider>
);
