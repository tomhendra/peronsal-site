/* 
  A utility is a generic function that accomplishes an abstract task, and is 
  not project-specific. 

  for project-specific utility functions, see /app/helpers
*/

export function sampleOne(arr: Array<any>): any {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function setScrollbarWidthAsCustomProperty() {
  const viewportWidth = window.innerWidth;
  const viewportWidthWithoutScrollbar = document.documentElement.clientWidth;
  const scrollbarWidth = viewportWidth - viewportWidthWithoutScrollbar;

  document.documentElement.style.setProperty(
    "--scrollbar-width",
    scrollbarWidth + "px"
  );
}
