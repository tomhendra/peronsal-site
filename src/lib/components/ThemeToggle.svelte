<script lang="ts">
  import {onMount, tick} from 'svelte';
  import {browser} from '$app/env';
  import {Themes} from '$lib/shared/constants';
  import {theme} from '$lib/shared/stores';
  import {addClass, removeClass} from '$lib/shared/utils';
  import {Sun, Moon} from './icons/';

  let isDarkMode: boolean;
  $: isDarkMode = $theme === Themes.Dark;

  let enableOrDisable: string;
  $: enableOrDisable = isDarkMode ? 'Disable' : 'Enable';

  // There's also some code in app.html to help avoid unwanted flashes of dark/light
  async function toggleDarkMode(): Promise<void> {
    theme.set(isDarkMode ? Themes.Light : Themes.Dark);

    if (browser) {
      window.localStorage.setItem('theme', JSON.stringify($theme));

      // Not exactly sure why this is needed but without it, the first click fails.
      // TODO: Figure out why this is needed.
      await tick();

      // removed --> window.document.body.dataset.theme =
      // window.document.body.dataset.theme === 'dark' ? 'light' : 'dark';

      if (isDarkMode) {
        addClass('dark');
        removeClass('light');
      } else {
        removeClass('dark');
        addClass('light');
      }
    }
  }

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
  {#if isDarkMode}
    <Sun />
  {:else}
    <Moon />
  {/if}
  <span class="visually-hidden">{enableOrDisable} dark mode</span>
</button>

<style lang="scss">
  button {
    cursor: pointer;
    border: none;
    background: var(--background);
    color: var(--color-text);
  }
</style>
