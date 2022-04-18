import { createCookieSessionStorage } from "@remix-run/cloudflare";

import { Theme, isTheme } from "./theme-provider";

// TODO: work out secrets for Cloudlare Pages
// const sessionSecret = process.env(SESSION_SECRET);
const sessionSecret =
  "bpCAk9R9zB2CdJ9u9sJeeoTxZTrm59S5ZWyC7vuaUmuEpYPMgJhYPw8kCSSwyaBTN4FwtQfrikaWdaBzXLCnAJa9xqtK2Tx7GgBa89Q2faSorA4wtM5hLs5rYZkX5vzQ";
// if (!sessionSecret) {
//   throw new Error("SESSION_SECRET must be set");
// }

const themeStorage = createCookieSessionStorage({
  cookie: {
    name: "remix_theme",
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
