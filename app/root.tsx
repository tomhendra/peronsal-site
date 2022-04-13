import React from "react";
import type { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import colors from "~/styles/lib/colors.css";
import effects from "~/styles/lib/effects.css";
import global from "~/styles/lib/global.css";
import reset from "~/styles/lib/reset.css";
import sizes from "~/styles/lib/sizes.css";
import typography from "~/styles/lib/typography.css";
import utils from "~/styles/lib/utils.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Tom Hendra • Personal Site",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: colors },
    { rel: "stylesheet", href: effects },
    { rel: "stylesheet", href: global },
    { rel: "stylesheet", href: reset },
    { rel: "stylesheet", href: sizes },
    { rel: "stylesheet", href: typography },
    { rel: "stylesheet", href: utils },
  ];
};

export default function App() {
  /* 
    vw units target the viewport width excluding the scrollbar. to use vw units
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
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
