import facepaint from 'facepaint';
import { transparentize } from 'polished';

/**
 * `....................media queries....................`
 */
// withMediaQueries function generates media queries
// by currying facepaint (https://github.com/emotion-js/facepaint).
// first argument passed is theme,
// second argument is styles object with arrays of values
// to be used at each incremental breakpoint.
/*  example usage:
const styles = theme => {
  return withMediaQueries(theme)({
    label: 'container',
    margin: '0 auto',
    maxWidth: [320px, 756px, 960px, 1200px]
  });
};
*/
export const withMediaQueries = theme =>
  facepaint(theme.breakpoints.map(bp => `@media (min-width: ${bp})`));
// note facepaint does not appear to allow for spreading of multiple
// style objects, but does not repeat declarations for each media query.
// e.g. position: 'margin: '0 auto',' will only be declared once, not
// repeated for each media query generated.

/**
 * `....................shadows....................`
 */

export const shadowSingle = shadowColor => ({
  boxShadow: `0 0 0 1px ${transparentize(0.98, shadowColor)},
    0 0 1px 0 ${transparentize(0.94, shadowColor)},
    0 2px 2px 0 ${transparentize(0.94, shadowColor)}`,
});

export const shadowDouble = shadowColor => ({
  boxShadow: `0 0 0 1px ${transparentize(0.98, shadowColor)},
    0 2px 2px 0 ${transparentize(0.94, shadowColor)},
    0 4px 4px 0 ${transparentize(0.94, shadowColor)}`,
});

export const shadowTriple = shadowColor => ({
  boxShadow: `0 0 0 1px ${transparentize(0.98, shadowColor)},
    0 4px 4px 0 ${transparentize(0.94, shadowColor)},
    0 8px 8px 0 ${transparentize(0.94, shadowColor)}`,
});

export const shadowGround = shadowColor => ({
  boxShadow: `0 0 0 2px ${transparentize(0.97, shadowColor)}`,
});

export const shadowBorder = (borderColor, borderSize = '1px') => ({
  boxShadow: `0px 0px 0px ${borderSize} ${borderColor}`,
});

// Deprecated values....
// even1: '0 1px 3px hsla(0, 0%, 0%, 0.2)',
// even2: '0 4px 6px hsla(0, 0%, 0%, 0.2)',
// even3: '0 5px 15px hsla(0, 0%, 0%, 0.2)',
// even4: '0 10px 24px hsla(0, 0%, 0%, 0.2)',
// even5: '0 15px 35px hsla(0, 0%, 0%, 0.2)',
// offset1: '0 1px 3px hsla(0, 0%, 0%, 0.12), 0 1px 2px hsla(0, 0%, 0%, 0.24)',
// offset2: '0 3px 6px hsla(0, 0%, 0%, 0.15), 0 2px 4px hsla(0, 0%, 0%, 0.12)',
// offset3: '0 10px 20px hsla(0, 0%, 0%, 0.15), 0 3px 6px hsla(0, 0%, 0%, 0.1)',
// offset4: '0 15px 25px hsla(0, 0%, 0%, 0.15), 0 5px 10px hsla(0, 0%, 0%, 0.05)',
// offset5: '0 20px 40px hsla(0, 0%, 0%, 0.2)',
