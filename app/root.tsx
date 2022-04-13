import React from "react";
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import type { LinksFunction, MetaFunction } from "@remix-run/cloudflare";

import global from "~/styles/global/base.css";
import colors from "~/styles/global/colors.css";
import effects from "~/styles/global/effects.css";
import reset from "~/styles/global/reset.css";
import sizes from "~/styles/global/sizes.css";
import typography from "~/styles/global/typography.css";
import utils from "~/styles/global/utils.css";

import Layout, { links as layoutStyles } from "~/components/Layout";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Tom Hendra • Personal Site",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: colors },
  { rel: "stylesheet", href: effects },
  { rel: "stylesheet", href: global },
  { rel: "stylesheet", href: reset },
  { rel: "stylesheet", href: sizes },
  { rel: "stylesheet", href: typography },
  { rel: "stylesheet", href: utils },
  ...layoutStyles(),
];

export default function App() {
  /* 
    vw units define the viewport width excluding the scrollbar. to use vw units
    without potential layout shift, we need to calculate the scrollbar width at 
    the earliest opportunity. 
  */
  React.useEffect((): void => {
    const viewportWidth = window.innerWidth;
    const viewportWidthWithoutScrollbar = document.documentElement.clientWidth;
    const scrollbarWidth = viewportWidth - viewportWidthWithoutScrollbar;

    document.documentElement.style.setProperty(
      "--scrollbar-width",
      scrollbarWidth + "px"
    );
  }, []);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
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
