/* 
  Dark mode implementation as per example in Remix repo
  https://github.com/remix-run/remix/tree/main/examples/dark-mode

  Hopefully this ceremony will become a relic of the past in the future 
  https://tabatkins.github.io/css-toggle/
*/

import {createCookieSessionStorage} from '@remix-run/cloudflare';

import {isTheme} from './theme-provider';
import type {Theme} from './theme-provider';

// Make use to set the environment variable SESSION_SECRET before running the code
// TODO work out env variables with Cloudflare Pages
// const sessionSecret = process.env.SESSION_SECRET ?? "DEFAULT_SECRET";
const sessionSecret = 'DEFAULT_SECRET';

const themeStorage = createCookieSessionStorage({
  cookie: {
    name: 'tomhendra_website_theme',
    secure: true,
    secrets: [sessionSecret],
    sameSite: 'lax',
    path: '/',
    httpOnly: true,
  },
});

async function getThemeSession(request: Request) {
  const session = await themeStorage.getSession(request.headers.get('Cookie'));
  return {
    getTheme: () => {
      const themeValue = session.get('theme');
      return isTheme(themeValue) ? themeValue : null;
    },
    setTheme: (theme: Theme) => session.set('theme', theme),
    commit: () => themeStorage.commitSession(session),
  };
}

export {getThemeSession};
