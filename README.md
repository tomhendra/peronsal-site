## Commit Types

commitlint is unnecessary for this project, but it is still good to label
commits with meaningful categories.

• build
• chore
• ci
• docs
• feat
• fix
• perf
• refactor
• revert
• style
• test

## Bugs

1. on mobile menu toggle `style="pointer-events: none;"` is being
   appended to the <body> tag but not removed on dialog close. maybe an error
   with the button? also focus outline is visible on mobile and looks nasty.
   check implementation & if no good, move to headless UI BUT ensure tab
   component works correctly.
   • https://github.com/radix-ui/design-system/blob/master/components/Sheet.tsx

2. button background-color transition when leaving hover state is being
   affected by theme toggle. `filter: brightness(110%)` is more performant.
   consider refactoring.

   • https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color

## Enhancements

1. make the form sending experience amazing
   • https://tobiasahlin.com/blog/meaningful-motion-w-action-driven-animation/

2. make the the dark / light mode toggle interaction amazing.

3. `--shadow-color` is currently being defined where it is used based on the
   background using. figure out calc functions based on colour palettes.
   • https://www.joshwcomeau.com/css/introducing-shadow-palette-generator/

4. add theme color for Safari
