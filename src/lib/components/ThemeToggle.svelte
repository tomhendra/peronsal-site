<script lang="ts">
  import {onMount, tick} from 'svelte';
  import {browser} from '$app/env';
  import {Themes} from '$lib/constants';
  import {theme} from '$lib/stores';
  import {addClass, removeClass} from '$lib/utils';
  import {Sun, Moon} from './icons';

  let isDarkMode: boolean;
  $: isDarkMode = $theme === Themes.Dark;

  let enableOrDisable: string;
  $: enableOrDisable = isDarkMode ? 'Disable' : 'Enable';

  // Additional code in app.html to help avoid unwanted flashes of dark/light
  async function toggleDarkMode(): Promise<void> {
    theme.set(isDarkMode ? Themes.Light : Themes.Dark);

    if (browser) {
      window.localStorage.setItem('theme', JSON.stringify($theme));

      // First click fails withtout this.
      // TODO Figure out why it is needed.
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
  class="theme-toggle"
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
  .theme-toggle {
    cursor: pointer;
    border: none;
    background: var(--background);
    color: var(--color-text);
    padding: 0;
  }
</style>
