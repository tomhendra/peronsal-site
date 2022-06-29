import React from 'react';
import clsx from 'clsx';
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import {
  ThemeBody,
  ThemeHead,
  ThemeProvider,
  useTheme,
} from '~/helpers/theme-provider';
import {getThemeSession} from './helpers/theme.server';
import {setScrollbarWidthAsCustomProperty} from '~/utils';
import Layout from '~/components/Layout';
import type {
  LinksFunction,
  MetaFunction,
  LoaderFunction,
} from '@remix-run/cloudflare';
import type {Theme} from '~/helpers/theme-provider';

import reset from '~/styles/shared/reset.css';
import typography from '~/styles/shared/typography.css';
import sizes from '~/styles/shared/sizes.css';
import colors from '~/styles/shared/colors.css';
import global from '~/styles/shared/global.css';
import effects from '~/styles/shared/effects.css';
import animations from '~/styles/shared/animations.css';
import utils from '~/styles/shared/utils.css';
import {links as layoutLinks} from '~/components/Layout';

type LoaderData = {
  theme: Theme | null;
};

const loader: LoaderFunction = async ({request}) => {
  const themeSession = await getThemeSession(request);

  const data: LoaderData = {
    theme: themeSession.getTheme(),
  };

  return data;
};

const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Tom Hendra • Personal Site',
  viewport: 'width=device-width,initial-scale=1',
});

const links: LinksFunction = () => [
  /* favicon.ico for browsers that don't support svg yet (Safari)
   https://caniuse.com/link-icon-svg */
  {
    rel: 'icon',
    href: '/images/favicon.ico',
    sizes: 'any',
  },
  /* light and dark versions are needed for Chrome, possibly due to SSR ?
     https://html.spec.whatwg.org/multipage/semantics.html#processing-the-media-attribute:attr-link-media */
  {
    rel: 'icon',
    href: '/images/favicon-light-mode.svg',
    type: 'svg+xml',
    media: '(prefers-color-scheme: light)',
  },
  {
    rel: 'icon',
    href: '/images/favicon-dark-mode.svg',
    type: 'image/svg+xml',
    media: '(prefers-color-scheme: dark)',
  },
  /* favicon.svg has the adaptive color styles inline within the markup,
    which works in Firefox but not in Chrome */
  {
    rel: 'icon',
    href: '/images/favicon.svg',
    type: 'image/svg+xml',
  },
  {rel: 'stylesheet', href: reset},
  {rel: 'stylesheet', href: typography},
  {rel: 'stylesheet', href: sizes},
  {rel: 'stylesheet', href: colors},
  {rel: 'stylesheet', href: global},
  {rel: 'stylesheet', href: effects},
  {rel: 'stylesheet', href: animations},
  {rel: 'stylesheet', href: utils},
  ...layoutLinks(),
];

function App() {
  React.useEffect((): void => {
    /* 
      vw units define the viewport width excluding the scrollbar. to use vw units
      without potential layout shift, we need to calculate the scrollbar width at 
      the earliest opportunity. 
    */
    setScrollbarWidthAsCustomProperty();
  }, []);

  const data = useLoaderData<LoaderData>();
  const [theme] = useTheme();

  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <Meta />
        <Links />
        <ThemeHead ssrTheme={Boolean(data.theme)} />
      </head>
      <body>
        <Layout />
        <ThemeBody ssrTheme={Boolean(data.theme)} />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

function AppWithProviders() {
  const data = useLoaderData<LoaderData>();

  return (
    <ThemeProvider specifiedTheme={data.theme}>
      <App />
    </ThemeProvider>
  );
}

export {loader, type LoaderData, meta, links, AppWithProviders as default};
