import facepaint from 'facepaint';
import { transparentize } from 'polished';

// ....................media queries....................

/*
withMediaQueries function generates media queries
by currying facepaint (https://github.com/emotion-js/facepaint).
first argument passed is theme,
second argument is styles object with arrays of values
to be used at each incremental breakpoint. example usage:
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

    Solution: Since facepaint repo hasn't been touched for a year,
    workaround is to pass values for all breakpoints using Array.fill.
*/
export const getSpacingValues = (size, theme) => {
  const { spacings, breakpoints } = theme;

  if (Array.isArray(size)) {
    return size.map(value =>
      // handles arrays with mix of strings & numbers e.g. [ALPHA, BRAVO, 0, 0]
      typeof value === 'string' ? spacings[value] : value,
    );
  }
  // handle values of single enum, & populate array with same value for each breakpoint
  if (typeof size === 'string') {
    return Array(breakpoints.length).fill(spacings[size]);
  }
  // return number (i.e. 0) as only other prop value permitted. (see ./utils/shared-prop-types.js)
  return size;
};

// ....................typography....................

const typographyHelper = (type, size, theme) => {
  const { typography, breakpoints } = theme;
  const typographyType = typography[type];

  const generateValues = property => {
    return Array.isArray(size)
      ? size.map(val => typographyType[val][property])
      : // generates arrays for single values passed to avoid facepaint bug :/
        Array(breakpoints.length).fill(typographyType[size][property]);
  };

  return {
    fontSize: generateValues('fontSize'),
    lineHeight: generateValues('lineHeight'),
  };
};

export const getTextDeclarations = (size, theme) =>
  typographyHelper('text', size, theme);

export const getHeadingDeclarations = (size, theme) =>
  typographyHelper('headings', size, theme);

export const getSubheadingDeclarations = (size, theme) =>
  typographyHelper('subHeadings', size, theme);

// ....................shadows....................

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
