import {getCookieValue} from '$lib/shared/utils';
import type {GetSession, Handle} from '@sveltejs/kit';
import {isTheme} from '$lib/shared/types';

const getThemeFromCookie = (cookie: string) => {
  const theme = getCookieValue(cookie, 'theme');
  return isTheme(theme) ? theme : null;
};

export const handle: Handle = async ({event, resolve}) => {
  const cookie = event.request.headers.get('cookie');
  event.locals.theme = getThemeFromCookie(cookie);

  return resolve(event);
};

export const getSession: GetSession = ({locals}) => {
  const theme = locals.theme;
  return {theme};
};
