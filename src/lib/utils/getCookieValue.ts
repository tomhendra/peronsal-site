export function getCookieValue(
  cookie: string | null,
  name: string,
): string | null {
  return cookie?.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || null;
}
