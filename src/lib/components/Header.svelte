<script>
  import {onMount} from 'svelte';
  import {prefetch} from '$app/navigation';
  import {checkPrefersReducedData} from '$lib/utils';
  import {ThemeToggle} from '$lib/components';
  import {TomhendraLogo} from '$lib/components/icons';

  onMount(() => {
    if (!checkPrefersReducedData()) {
      prefetch('/');
      prefetch('/about');
    }
  });
</script>

<header>
  <div class="max-width-container header-container">
    <a sveltekit:prefetch class="logo-wrapper" href="/">
      <TomhendraLogo />
      <span class="wordmark">Tom Hendra</span>
      <span class="visually-hidden">Tom Hendra logo - Home</span>
    </a>
    <nav>
      <a sveltekit:prefetch href="/">Posts</a>
      <a sveltekit:prefetch href="/about">About</a>
    </nav>
    <ThemeToggle />
  </div>
</header>

<style lang="scss">
  header {
    position: sticky;
    top: -16px;
    padding-top: 16px;
    background-color: var(--color-background);
    border-bottom: 1px solid var(--color-muted-separator);

    a {
      text-decoration: none;
      color: inherit;
    }

    nav {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-8);

      @include mobileAndDown {
        display: none;
      }
    }
  }

  .header-container {
    background-color: var(--color-background);
    display: flex;
    align-items: center;
    gap: var(--space-8);
    padding-top: var(--space-4);
  }

  .logo-wrapper {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    margin-right: auto;
  }

  .wordmark {
    color: var(--color-heading);
  }
</style>
