import facepaint from 'facepaint';

// withMediaQueries function generates media queries
// by currying facepaint (https://github.com/emotion-js/facepaint).
// first argument passed is theme,
// second argument is styles object with arrays of values
// to be used at each incremental breakpoint.
/*  example usage:
const baseStyles = theme => {
  return withMediaQueries(theme)({
    label: 'Container',
    margin: '0 auto',
    position: 'relative',
    maxWidth: theme.breakpoints.map(bp => `${bp}px`),
    padding: theme.breakpoints.map(bp => `0 calc((100vw - ${bp}px) / 2)`),
  });
};
*/
// note facepaint does not appear to allow for spreading of multiple
// style objects, but does not repeat declarations for each media query.
// e.g. position: 'relative' will only be declared once.
export const withMediaQueries = theme =>
  facepaint(theme.breakpoints.map(bp => `@media (min-width: ${bp}px)`));
