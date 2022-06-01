/* 
  Dark mode implementation thanks to Matt Stobbs: 
  https://www.mattstobbs.com/remix-dark-mode/

  Hopefully this ceremony will become a relic of the past in the future 
  https://tabatkins.github.io/css-toggle/
*/
import { createCookieSessionStorage } from "@remix-run/cloudflare";

import { isTheme } from "./theme-provider";
import type { Theme } from "./theme-provider";

// TODO: work out secrets for Cloudflare Pages
// const sessionSecret = process.env(SESSION_SECRET);
const sessionSecret = "bpCAk9R9zB2CdJ9u9sJeeoTxZTrm59S5ZWyC7vuaUmuEpYPMgJhYPw";
// if (!sessionSecret) {
//   throw new Error("SESSION_SECRET must be set");
// }

const themeStorage = createCookieSessionStorage({
  cookie: {
    name: "tomhendradotdev_theme",
    secure: true,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    expires: new Date("2083-01-03"),
    httpOnly: true,
  },
});

async function getThemeSession(request: Request) {
  const session = await themeStorage.getSession(request.headers.get("Cookie"));
  return {
    getTheme: () => {
      const themeValue = session.get("theme");
      return isTheme(themeValue) ? themeValue : null;
    },
    setTheme: (theme: Theme) => session.set("theme", theme),
    commit: () => themeStorage.commitSession(session),
  };
}

export { getThemeSession };
