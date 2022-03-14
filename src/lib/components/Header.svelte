<script>
  import {ThemeToggle} from '$lib/components/';
</script>

<header class="header">
  <div class="container">
    <a class="logo-container" href="/">
      <img src="/logo.svg" alt="Logo - Home" />
      <span>Tom Hendra</span>
    </a>
    <nav>
      <a href="/blog">Blog</a>
      <a href="/about">About</a>
    </nav>
    <ThemeToggle />
  </div>
</header>

<style lang="scss">
  .header {
    border-bottom: 1px solid var(--color-muted-separator);
  }

  .container {
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

  .logo-container {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    margin-right: auto;
  }

  .logo-container img {
    width: var(--space-8);
  }

  .header nav {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-8);

    @media (max-width: breakpoints.$sm) {
      display: none;
    }
  }

  .header a {
    text-decoration: none;
    color: inherit;
  }
</style>
