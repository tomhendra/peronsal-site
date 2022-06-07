## Commit Types

Commitlint is unnecessary for this projects since I am the only dev, but it is
good practice.

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

## TODO

1. add blur effect to pfp
<style>
  body {
    overflow: hidden;
  }
  .wrapper {
    position: relative;
  }
  .photo {
    position: relative;
  }
  .blurry {
    position: absolute;
    filter: blur(40px);
    transform: scale(1.3) translateX(10%) rotate(30deg);
  }
  .regular {
    filter: drop-shadow(0px 0px 25px hsl(0deg 0% 0% / 0.3));
  }
</style>

<div class="wrapper">
  <img class="photo blurry" />
  <img class="photo regular" />
</div>

2. darkening filter on pfp for dark mode

3. weird-shaped pfp with animated clip-path (treasure trove)

4. button glow effect on hover for primary variant
   https://codepen.io/tomhendra/pen/Yzeawwo

5. Link alt color on hover for primary variant
   https://codepen.io/tomhendra/pen/VwQGdmq

6. make the form sending experience amazing a la
   https://tobiasahlin.com/blog/meaningful-motion-w-action-driven-animation/

7. --shadow-color is currently being defined where it is used based on the
   background using https://www.joshwcomeau.com/ shadow-palette/. figure out
   calc functions based on colour palettes.

8. Toggling dark mode throws an error to console. useFetcher fixed yet ?
   check implementation of dark mode:
   • https://github.com/remix-run/remix/tree/main/examples/dark-mode
   • https://www.mattstobbs.com/remix-dark-mode/
   • https://www.joshwcomeau.com/react/dark-mode/

9. mobile menu toggle is broken. `style="pointer-events: none;"` is being
   appended to the <body> tag but not removed on dialog close. maybe an error
   with the button? also focus outline is visible on mobile. try a different
   component in Radix or move to headless UI & ensure tab component works.

10. button background-color transition when leaving hover state is being
    affected by theme toggle. `filter: brightness(110%)` is more performant.
    consider refactoring.

11. consult Remix Discord for gotchyas re smooth scrolling on route transitions.
