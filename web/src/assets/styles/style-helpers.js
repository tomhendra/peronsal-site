import facepaint from 'facepaint';
import { transparentize } from 'polished';

// ....................media queries....................

/*
withMediaQueries HOF generates media queries
by returning facepaint (https://github.com/emotion-js/facepaint).
To use, curry the function with first argument as theme,
and second argument as styles object with arrays of values
to be used at each incremental breakpoint.
example usage:
const styles = theme => {
  return withMediaQueries(theme)({
    margin: '0 auto',
    maxWidth: [320px, 756px, 960px, 1200px]
  });
};
*/
export function withMediaQueries(theme) {
  return facepaint(
    // fontSize: '62.5%' for html in css-reset is not respected for media queries
    // https://drafts.csswg.org/mediaqueries/#units
    theme.breakpoints.map(
      bp => `@media only screen and (min-width: ${bp * 0.625}rem)`,
    ),
  );
}

// ....................spacings....................

/*
withMediaQueries() needs an array of values for facepaint.
Problem:
    Values sometimes need to be derived from theme dot notation. e.g. passing [ALPHA, BRAVO]
    to component when ['0.8rem, '1.2rem] is required by facepaint, derived from
    theme.spacings[ALPHA], theme.spacings[BRAVO]. Values do not always need to be an array if
    variations are not required between breakpoints. Facepaint should ignore values which
    are not arrays and process as normal, however there appears to be a bug...

    When passing an array of values for padding, & only a
    single padding value for paddingTop, the paddingTop value
    is only applied to the first breakpoint, and is ignored
    for other breakpoints.
    Array for paddingTop / singular for padding works as expected.
    Perhaps related to https://github.com/emotion-js/facepaint/issues/9

Solution:
    Since facepaint repo hasn't been touched for a year,
    workaround is to generate values for all breakpoints using Array.fill.
*/
export function getSpacingValues(size, theme) {
  const { spacings, breakpoints } = theme;

  if (Array.isArray(size)) {
    return size.map(value =>
      // handles arrays with mix of strings & numbers e.g. [ALPHA, BRAVO, 0, 0]
      typeof value === 'string' ? spacings[value] : value,
    );
  }
  // handle values of single enum, & populate array with same value for each breakpoint
  if (typeof size === 'string') {
    return Array(breakpoints.length + 1).fill(spacings[size]);
  }
  // return number (i.e. 0) as only other prop value permitted. (see ./utils/shared-prop-types.js)
  return size;
}

// ....................typography....................

// should only be used for text elements, since line height is returned.
// i.e. not for buttons or standalone links for navigation etc.
function typographyHelper(type, size, theme) {
  const { typography } = theme;
  const typographyType = typography[type];

  const generateValues = property => {
    return Array.isArray(size)
      ? size.map(val => typographyType[val][property])
      : typographyType[size][property];
  };

  return {
    fontSize: generateValues('fontSize'),
    lineHeight: generateValues('lineHeight'),
  };
}

export const getTextDeclarations = (size, theme) =>
  typographyHelper('text', size, theme);

export const getHeadingDeclarations = (size, theme) =>
  typographyHelper('headings', size, theme);

export const getSubheadingDeclarations = (size, theme) =>
  typographyHelper('subHeadings', size, theme);

// ....................shadows....................

export const shadowStandardAlpha = shadowColor => ({
  boxShadow: `0 1px 3px ${transparentize(0.8, shadowColor)}`,
});

export const shadowStandardBravo = shadowColor => ({
  boxShadow: `0 4px 6px ${transparentize(0.8, shadowColor)}`,
});

export const shadowStandardCharlie = shadowColor => ({
  boxShadow: `0 5px 15px ${transparentize(0.8, shadowColor)}`,
});

export const shadowStandardDelta = shadowColor => ({
  boxShadow: `0 10px 24px ${transparentize(0.8, shadowColor)}`,
});

export const shadowStandardEcho = shadowColor => ({
  boxShadow: `0 15px 35px ${transparentize(0.8, shadowColor)}`,
});

export const shadowOffsetAlpha = shadowColor => ({
  boxShadow: `0 1px 3px ${transparentize(0.88, shadowColor)},
         0 1px 2px ${transparentize(0.76, shadowColor)}`,
});

export const shadowOffsetBravo = shadowColor => ({
  boxShadow: `0 3px 6px ${transparentize(0.85, shadowColor)},
         0 2px 4px ${transparentize(0.88, shadowColor)}`,
});

export const shadowOffsetCharlie = shadowColor => ({
  boxShadow: `0 10px 20px ${transparentize(0.85, shadowColor)},
         0 3px 6px ${transparentize(0.9, shadowColor)}`,
});

export const shadowOffsetDelta = shadowColor => ({
  boxShadow: `0 15px 25px ${transparentize(0.85, shadowColor)},
         0 5px 10px ${transparentize(0.95, shadowColor)}`,
});

export const shadowOffsetEcho = shadowColor => ({
  boxShadow: `0 20px 40px ${transparentize(0.8, shadowColor)}`,
});
