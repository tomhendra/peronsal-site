<script lang="ts">
  import {setTheme, theme} from '$lib/shared/stores';
  import type {Theme} from '$lib/shared/types';

  $: nextTheme = ($theme === 'dark' ? 'light' : 'dark') as Theme;
  const handleThemeIconClick = () => {
    setTheme(nextTheme);
  };
</script>

<button on:click={handleThemeIconClick}>Theme</button>
