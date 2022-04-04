export function getScrollbarWidth() {
  const viewportWidth = window.innerWidth;
  const viewportWidthWithoutScrollbar = document.documentElement.clientWidth;
  return viewportWidth - viewportWidthWithoutScrollbar;
}

/* 
  vw units target the viewport width excluding the scrollbar. to use vw units
  without potential layout shift, we need to calculate the scrollbar width at 
  the earliest opportunity; in this app it would be the main __layout.svelte
  inside an onMount call. 

  However, this causes a layout shift on the first render of a SvelteKit app as 
  of 1.0.0-next.304 when used on .max-width-wrapper util style, so is unused.

  (this issue does not exist in React + useEffect)
*/

export function setFullWidthCSSVariable() {
  const scrollbarWidth = getScrollbarWidth();

  document.documentElement.style.setProperty(
    '--scrollbar-width',
    scrollbarWidth + 'px',
  );
}
