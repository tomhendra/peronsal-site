/* 
  A utility is a generic function that accomplishes an abstract task, and is 
  not project-specific. 

  for project-specific utility functions, see ./app/helpers/*
*/

export function sampleOne(arr: Array<any>): any {
  return arr[Math.floor(Math.random() * arr.length)];
}

/* 
  vw units define the viewport width excluding the scrollbar. to use vw units
  without potential layout shift, we calculate the scrollbar width at the 
  earliest opportunity & save it as a custom property to deduct from vw units. 
*/
export function setScrollbarWidthAsCustomProperty() {
  const viewportWidth = window.innerWidth;
  const viewportWidthWithoutScrollbar = document.documentElement.clientWidth;
  const scrollbarWidth = viewportWidth - viewportWidthWithoutScrollbar;

  document.documentElement.style.setProperty(
    '--scrollbar-width',
    scrollbarWidth + 'px',
  );
}

export function getPrefersReducedMotion() {
  const mediaQueryList = window.matchMedia(
    '(prefers-reduced-motion: no-preference)',
  );
  const prefersReducedMotion = !mediaQueryList.matches;
  return prefersReducedMotion;
}
