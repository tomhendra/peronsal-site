import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import clsx from 'clsx';
import React from 'react';
import Layout from '~/components/Layout';
import {getSeo} from '~/helpers/seo';
import {
  ThemeBody,
  ThemeHead,
  ThemeProvider,
  useTheme,
} from '~/helpers/theme-provider';
import {setScrollbarWidthAsCustomProperty} from '~/utils';
import {getThemeSession} from './helpers/theme.server';

import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from '@remix-run/cloudflare';
import type {Theme} from '~/helpers/theme-provider';

import {links as layoutLinks} from '~/components/Layout';
import animations from '~/styles/shared/animations.css';
import colors from '~/styles/shared/colors.css';
import effects from '~/styles/shared/effects.css';
import global from '~/styles/shared/global.css';
import reset from '~/styles/shared/reset.css';
import sizes from '~/styles/shared/sizes.css';
import typography from '~/styles/shared/typography.css';
import utils from '~/styles/shared/utils.css';

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

const [seoMeta, seoLinks] = getSeo();

const meta: MetaFunction = () => ({
  ...seoMeta,
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
  // css vars do not work here for content :(
  themeColorDark: {
    name: 'theme-color',
    content: 'hsl(220deg 55% 8% / 100%)',
    media: '(prefers-color-scheme: dark)',
  },
  themeColorLight: {
    name: 'theme-color',
    content: 'hsl(0deg 0% 100% / 100%)',
    media: '(prefers-color-scheme: light)',
  },
});

const links: LinksFunction = () => [
  ...seoLinks,
  /* light and dark versions are needed for Chrome. Inline adaptive color styles  
    within SVG markup do not work with Remix, despite the advice on web.dev.
    The order of <link rel="icon"> statements matters. Listing the .ico first
    causes Chrome to use it, again contrary to web.dev advice! */
  {
    rel: 'icon',
    href: '/images/favicon-light-mode.svg',
    type: 'image/svg+xml',
    media: '(prefers-color-scheme: light)',
  },
  {
    rel: 'icon',
    href: '/images/favicon-dark-mode.svg',
    type: 'image/svg+xml',
    media: '(prefers-color-scheme: dark)',
  },
  /* favicon.svg has inline adaptive color styles within the SVG markup,
    which works in Firefox but not in Chrome. This needs to come after the 
    light / dark variants to be requested by Firefox, since the last compatible 
    statement wins if the browser implements web standards correctly (only 
    Firefox does so) */
  {
    rel: 'icon',
    href: '/images/favicon.svg',
    type: 'image/svg+xml',
  },
  /* favicon.ico is for browsers that don't support SVG yet (Safari)
    https://caniuse.com/link-icon-svg. Many guides advise for this statement to 
    come first, and that sizes="any" prevents Chrome from selecting favicon.ico, 
    however I have found neither to prevent Chrome from requesting it! */
  {
    rel: 'icon',
    href: '/images/favicon.ico',
    sizes: 'any',
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
