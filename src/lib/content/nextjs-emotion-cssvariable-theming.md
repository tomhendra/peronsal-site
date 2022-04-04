---
title: 'Exploring Next.js, Emotion & CSS Variable Theming'
subtitle: 'A styling solution for Next.js using the best parts of other popular solutions.'
date: '2021-03-20'
updated: '2022-04-03'
coverImage: 'color-swatches'
alt: 'different coloured bars'
caption: 'Photo by Enric Cruz López'
tags:
  - 'Next.js'
  - 'Emotion'
  - 'CSS'
description:
  "The structured theming of Theme UI and the well-considered design system of
Tailwind, without abstraction from vanilla CSS too much."
---

## Introduction

While exploring styling solutions for my personal site v3, I found that liked
the structured theming of Theme UI and the well-considered design system of
Tailwind, but didn't want to use a tool that abstracted away from vanilla CSS
too much. So I decided to stick with Emotion and implement some of the ideas
from Theme UI and Tailwind myself.

## Theming without Context

Kent C. Dodds enlightened me to the performance benefits of CSS variables over
React context with his blog post
[Use CSS Variables instead of React Context](https://epicreact.dev/css-variables/).
Performance **always** matters, and with
[95% browser coverage](https://caniuse.com/css-variables) it was an easy sell.
In terms of how to put together colour swatches as part of a design system,
inspiration came from Tailwind CSS, and implementation from Elad Shechter with
his article on
[Why CSS HSL Colors are Better!](https://elad.medium.com/why-css-hsl-colors-are-better-83b1e0b6eead).

## The Plan

1. Setup Emotion to work with the latest version of Next.js.
2. Take some design system elements from Tailwind and create a CSS Variable
   configuration.
3. Create a theme object based on the theme specification from Theme UI which
   consumes the CSS Variables.
4. Create a toggle component to switch between themes.

## Configuring Emotion with Next.js

Emotion 11 installation is as easy as `npm i @emotion/react @emotion/styled`. To
avoid having to use a pragma atop every file that relies on the Emotion `css`
prop, we also want to `npm i @emotion/babel-plugin`. For the plugin to work, and
to use
[the new JSX transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)
in React 17 which ships with the latest verion of Next.js, we need to define a
custom Babel config as follows in a `.babelrc` file in the root directory.

```shell
{
  "presets": [
    [
      "next/babel",
      {
        "preset-react": {
          "runtime": "automatic",
          "importSource": "@emotion/react"
        }
      }
    ]
  ],
  "plugins": ["@emotion/babel-plugin"]
}
```

## Defining CSS Variables for the Theme

We define our colour scales Tailwind-style using CSS variables.

```css
/* styles/colors.css */
:root {
  --gray: 343, 6%;
  --gray-50: var(--gray), 95%;
  --gray-100: var(--gray), 90%;
  --gray-200: var(--gray), 80%;
  --gray-300: var(--gray), 70%;
  --gray-400: var(--gray), 60%;
  --gray-500: var(--gray), 50%;
  --gray-600: var(--gray), 40%;
  --gray-700: var(--gray), 30%;
  --gray-800: var(--gray), 20%;
  --gray-900: var(--gray), 10%;

  /* ...add other color swatches as desired */
}

body[data-theme='light'] {
  --colors-text: hsla(var(--gray-800), 100%);
  --colors-background: hsla(var(--yellow-50), 100%);
  --colors-primary: hsla(var(--orange-500), 100%);
  --colors-secondary: hsla(var(--orange-300), 100%);
  --colors-accent: hsla(var(--olive-600), 100%);
  --colors-highlight: hsla(var(--teal-200), 100%);
  --colors-muted: hsla(var(--yellow-200), 100%);
}

body[data-theme='dark'] {
  --colors-text: hsla(var(--yellow-50), 100%);
  --colors-background: hsla(var(--gray-800), 100%);
  --colors-primary: hsla(var(--orange-500), 100%);
  --colors-secondary: hsla(var(--orange-300), 100%);
  --colors-accent: hsla(var(--olive-600), 100%);
  --colors-highlight: hsla(var(--teal-200), 100%);
  --colors-muted: hsla(var(--yellow-200), 100%);
}
```

## Creating & Using a Theme with Emotion

Then we follow
[Theme UI's theme specification](https://dev.theme-ui.com/theme-spec/) to build
a thoughtfully structured theme, using our CSS variables for the `colors`
object.

```ts
const baseColors = {
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
  gray: [
    'var(--gray-50)',
    'var(--gray-100)',
    'var(--gray-200)',
    'var(--gray-300)',
    'var(--gray-400)',
    'var(--gray-500)',
    'var(--gray-600)',
    'var(--gray-700)',
    'var(--gray-800)',
    'var(--gray-900)',
  ],
  // other color swatches from colors.css
};

const defaultColors = {
  text: 'var(--colors-text)',
  background: 'var(--colors-background)',
  primary: 'var(--colors-primary)',
  secondary: 'var(--colors-secondary)',
  accent: 'var(--colors-accent)',
  highlight: 'var(--colors-highlight)',
  muted: 'var(--colors-muted)',
};

export const colors = {
  ...baseColors,
  ...defaultColors,
};
```

Next we use Emotion's `<Global/>` component to apply the theme colors.

```tsx
// _app.tsx
import type {AppProps} from 'next/app';
import {Global} from '@emotion/react';
import theme from 'theme';
import 'styles/colors.css';

function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Global
        styles={{
          body: {
            background: theme.colors.background,
            color: theme.colors.text,
          },

          a: {
            color: theme.colors.primary,
          },
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default App;
```

## Building a Theme Toggle Component

And lastly we create a theme toggle to switch between themes using CSS
[data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).

```tsx
// ModeToggle.tsx
import * as React from 'react';
import {FiSun, FiMoon} from 'react-icons/fi';
import {StyledButton} from './styled';
import {useLocalStorageState} from 'hooks';

export function ModeToggle() {
  const [theme, setTheme] = React.useState('light');
  const nextTheme = theme === 'light' ? 'dark' : 'light';

  React.useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <StyledButton
      aria-label="Toggle colour mode"
      onClick={() => setTheme(nextTheme)}
    >
      {nextTheme === 'light' ? <FiMoon /> : <FiSun />}
    </StyledButton>
  );
}
```

## Just One More Thing...

But there is one more matter to consider. Next.js re-renders on route changes
and therefore our theme state will be lost when we navigate to a different page.
We need to persist state, for which we will use `localStorage`.

## Persisting Between Route Changes

One of the many elegant patterns I learned from Kent C Dodd's
[Epic React](https://epicreact.dev/) course is to create a generic custom hook
for storing state in `localStorage`. To avoid an error being thrown, we also
need to ensure not to try and access `window` on the server where it will be
`undefined` as stated in the
[Next.js docs](https://nextjs.org/docs/migrating/from-create-react-app#safely-accessing-web-apis).

```tsx
// use-local-storage-state.tsx
import * as React from 'react';

export function useLocalStorageState(
  key: string,
  defaultValue: string | (() => void),
  {serialize = JSON.stringify, deserialize = JSON.parse} = {},
) {
  const [state, setState] = React.useState(() => {
    // do not try to run this on the server!
    if (typeof window === 'undefined') return;
    const valueInLocalStorage = window.localStorage.getItem(key);

    if (valueInLocalStorage) {
      // the try/catch is here in case the localStorage value was set before we had the serialization in place
      try {
        return deserialize(valueInLocalStorage);
      } catch (error) {
        window.localStorage.removeItem(key);
      }
    }
    return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
  });

  const prevKeyRef = React.useRef(key);

  React.useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    window.localStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return [state, setState];
}
```

Now we can replace the call to `React.useState()` with `useLocalStorageState()`
in our `ModeToggle` component.

```tsx
import {FiSun, FiMoon} from 'react-icons/fi';
import {StyledButton} from './styled';
import {useLocalStorageState} from 'hooks';

export function ModeToggle() {
  const [theme, setTheme] = useLocalStorageState('theme', 'light');
  const nextTheme = theme === 'light' ? 'dark' : 'light';

  React.useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <StyledButton
      aria-label="Toggle colour mode"
      onClick={() => setTheme(nextTheme)}
    >
      {nextTheme === 'light' ? <FiMoon /> : <FiSun />}
    </StyledButton>
  );
}
```

## Summary

To recap, we have created a Next.js configuration with great DX featuring:

- Emotion for [all of the benefits](https://mxstbr.com/thoughts/css-in-js/) that
  CSS-in-JS brings configured to work with the latest version of Next.js.
- Performant theming through the use of CSS Custom Properties (variables).
- An organized theme structure based on the theme specification used by Theme
  UI.
- An elegant reusable hook for storing anything we wish in the browser's local
  storage.
