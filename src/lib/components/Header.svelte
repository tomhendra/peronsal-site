<script>
  import {ThemeToggle} from '$lib/components';
</script>

<header>
  <div class="max-width-container">
    <a class="logo-container" href="/">
      <img src="/logo.svg" alt="Logo - Home" />
      <span>Tom Hendra</span>
    </a>
    <nav>
      <a href="/">Home</a>
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

    & a {
      text-decoration: none;
      color: inherit;
    }

    & nav {
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
  }

  .logo-container {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    margin-right: auto;

    & img {
      width: var(--space-8);
    }
  }
</style>
