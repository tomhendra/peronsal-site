<script>
  import {ThemeToggle} from '$lib/components';
  import {TomhendraLogo} from '$lib/components/icons';
</script>

<header>
  <div class="max-width-container">
    <a class="logo-wrapper" href="/">
      <TomhendraLogo />
      <span class="wordmark">Tom Hendra</span>
      <span class="visually-hidden">Tom Hendra logo - Home</span>
    </a>
    <nav>
      <a href="/">Posts</a>
      <a href="/about">About</a>
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

  .max-width-container {
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
