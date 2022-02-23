import {onDestroy} from 'svelte';

export function onInterval(callback, milliseconds) {
  const interval = setInterval(callback, milliseconds);

  onDestroy(() => {
    clearInterval(interval);
  });
}

export function getScrollbarWidth() {
  const viewportWidth = window.innerWidth;
  const viewportWidthWithoutScrollbar = document.documentElement.clientWidth;
  return viewportWidth - viewportWidthWithoutScrollbar;
}

export function getCookieValue(
  cookie: string | null,
  name: string,
): string | null {
  return cookie?.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || null;
}

export function addClass(value: string): void {
  document.documentElement.classList.add(value);
}

export function removeClass(value: string): void {
  document.documentElement.classList.remove(value);
}

export function slugFromPath(path) {
  return path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;
}
