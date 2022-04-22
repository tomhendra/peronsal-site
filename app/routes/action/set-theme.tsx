/* 
  Dark mode implementation thanks to Matt Stobbs: 
  https://www.mattstobbs.com/remix-dark-mode/

  Hopefully this ceremony will become a relic of the past in the future 
  https://tabatkins.github.io/css-toggle/
*/
import { json } from "@remix-run/cloudflare";
import type { ActionFunction } from "@remix-run/cloudflare";

import { getThemeSession } from "~/helpers/theme.server";
import { isTheme } from "~/helpers/theme-provider";

const action: ActionFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request);
  const requestText = await request.text();
  const form = new URLSearchParams(requestText);
  const theme = form.get("theme");

  if (!isTheme(theme)) {
    return json({
      success: false,
      message: `theme value of ${theme} is not a valid theme`,
    });
  }

  themeSession.setTheme(theme);
  return json(
    { success: true },
    { headers: { "Set-Cookie": await themeSession.commit() } }
  );
};

export { action };
