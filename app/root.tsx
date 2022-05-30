import React from "react";
import clsx from "clsx";
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import {
  NonFlashOfWrongThemeEls,
  ThemeProvider,
  useTheme,
} from "~/helpers/theme-provider";
import { getThemeSession } from "./helpers/theme.server";
import { setScrollbarWidthAsCustomProperty } from "~/utils";
import Layout from "~/components/Layout";
import type {
  LinksFunction,
  MetaFunction,
  LoaderFunction,
} from "@remix-run/cloudflare";
import type { Theme } from "~/helpers/theme-provider";

import reset from "~/styles/global/reset.css";
import typography from "~/styles/global/typography.css";
import sizes from "~/styles/global/sizes.css";
import colors from "~/styles/global/colors.css";
import effects from "~/styles/global/effects.css";
import animations from "~/styles/global/animations.css";
import utils from "~/styles/global/utils.css";
import { links as layoutLinks } from "~/components/Layout";

type LoaderData = {
  theme: Theme | null;
};

const loader: LoaderFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request);
  const data: LoaderData = {
    theme: themeSession.getTheme(),
  };
  return data;
};

const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Tom Hendra • Personal Site",
  viewport: "width=device-width,initial-scale=1",
});

const links: LinksFunction = () => [
  { rel: "stylesheet", href: reset },
  { rel: "stylesheet", href: typography },
  { rel: "stylesheet", href: sizes },
  { rel: "stylesheet", href: colors },
  { rel: "stylesheet", href: effects },
  { rel: "stylesheet", href: animations },
  { rel: "stylesheet", href: utils },
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

  const [theme] = useTheme();
  const data = useLoaderData<LoaderData>();

  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <Meta />
        <Links />
        <NonFlashOfWrongThemeEls ssrTheme={Boolean(data.theme)} />
      </head>
      <body>
        <Layout />
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

export { loader, type LoaderData, meta, links, AppWithProviders as default };
