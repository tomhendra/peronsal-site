<script lang="ts">
  import Sun from './icons/Sun.svelte';
  import {browser} from '$app/env';
  import {Themes} from '$lib/shared/constants';
  import {theme} from '$lib/shared/stores';
  import {addClass, removeClass} from '$lib/shared/utils';
  import {onMount, tick} from 'svelte';

  let isDarkMode: boolean;
  $: isDarkMode = $theme === Themes.Dark;

  let enableOrDisable: string;
  $: enableOrDisable = isDarkMode ? 'Disable' : 'Enable';

  // There's also some code in app.html to help avoid unwanted flashes of dark/light
  const toggleDarkMode = async (): Promise<void> => {
    theme.set(isDarkMode ? Themes.Light : Themes.Dark);

    if (browser) {
      window.localStorage.setItem('theme', JSON.stringify($theme));

      // Not exactly sure why this is needed but without it, the first click fails.
      await tick();

      if (isDarkMode) {
        addClass('dark');
        removeClass('light');
      } else {
        removeClass('dark');
        addClass('light');
      }
    }
  };

  onMount(() => {
    /* 
    This same logic is in app.html also, but I didn't want to import it there,
    so it's just duplicated in both places.
    */
    if (
      ('theme' in localStorage &&
        JSON.parse(localStorage.theme) === Themes.Dark) ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      theme.set(Themes.Dark);
    }
  });
</script>

<button
  on:click={toggleDarkMode}
  class:dark={isDarkMode}
  title="{enableOrDisable} dark mode"
  aria-pressed={isDarkMode}
>
  <span class="visually-hidden">{enableOrDisable} dark mode</span>
  <Sun />
</button>

<style lang="scss">
  button {
    border: none;
    background: var(--background);
  }

  .dark {
    color: var(--text);
  }
</style>
