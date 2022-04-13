export const checkPrefersReducedData = (): boolean => {
  return window.matchMedia(
    `not all and (prefers-reduced-data), (prefers-reduced-data)`
  ).matches;
};
