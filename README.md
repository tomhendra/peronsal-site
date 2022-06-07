## Commit Types

Commitlint is unnecessary for this repo since I am the only dev, but it is good practice.

- build
- chore
- ci
- docs
- feat
- fix
- perf
- refactor
- revert
- style
- test

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

2. weird-shaped border radius for pfp https://9elements.github.io/fancy-border-radius/

3. button glow effect on hover for primary variant

4. make the form sending experience amazing a la https://tobiasahlin.com/blog/meaningful-motion-w-action-driven-animation/

5. --shadow-color is currently being defined where it is used based on the background using https://www.joshwcomeau.com/ shadow-palette/. figure out calc functions based on colour palettes.

6. Toggling dark mode throws an error to console -
   useFetcher perhaps since this was broken before ?

Uncaught (in promise) Error: No matches found
at invariant2 (invariant.js:13:11)
at Object.send (transition.js:203:11)
at Object.submit (components.js:807:25)
_at theme-provider.tsx:115:29_
at invokePassiveEffectCreate (react-dom.development.js:23487:20)
at HTMLUnknownElement.callCallback2 (react-dom.development.js:3945:14)
at Object.invokeGuardedCallbackDev (react-dom.development.js:3994:16)
at invokeGuardedCallback (react-dom.development.js:4056:31)
at flushPassiveEffectsImpl (react-dom.development.js:23574:9)
at unstable_runWithPriority (scheduler.development.js:468:12)

7. mobile menu toggle is broken. `style="pointer-events: none;"` is being appended
   to the <body> tag but not removed on dialog close. maybe an error with the button?
   if too time consuming, move to headless UI & ensure tab component works too.

8. button background-color transition when leaving hover state is being affected
   by theme toggle. `filter: brightness(110%)` is more performant - consider refactoring.
