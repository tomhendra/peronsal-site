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
