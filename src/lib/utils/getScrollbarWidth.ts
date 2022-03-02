export function getScrollbarWidth() {
  const viewportWidth = window.innerWidth;
  const viewportWidthWithoutScrollbar = document.documentElement.clientWidth;
  return viewportWidth - viewportWidthWithoutScrollbar;
}
