<script>
  import {ThemeToggle} from '$lib/components/';
</script>

<header class="header">
  <div class="header-container">
    <div class="logo-wrapper">
      <a href="/">
        <img src="/logo.svg" alt="Logo - Home" class="logo" />
      </a>
      <a href="/" class="nav-link">Tom Hendra</a>
    </div>
    <nav class="desktop-nav">
      <a class="nav-link" href="/blog">Blog</a>
      <a class="nav-link" href="/about">About</a>
    </nav>
    <ThemeToggle />
  </div>
</header>

<style lang="scss">
  .header {
    border-bottom: 1px solid var(--color-muted-separator);
  }

  .header-container {
    /* common container styles */
    margin: 0 auto;
    max-width: var(--container-xl);
    /* unique container styles */
    display: flex;
    align-items: center;
    gap: var(--space-8);
    padding: var(--space-6) var(--space-8);

    @media (max-width: breakpoints.$sm) {
      padding: var(--space-4);
    }
  }

  .logo-wrapper {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    margin-right: auto;
  }

  .logo {
    width: var(--space-8);
  }

  .desktop-nav {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-8);

    @media (max-width: breakpoints.$sm) {
      display: none;
    }
  }

  .nav-link {
    text-decoration: none;
    color: inherit;
  }
</style>
