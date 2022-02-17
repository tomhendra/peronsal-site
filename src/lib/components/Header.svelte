<script>
  import {ThemeToggle} from '$lib/components/';
</script>

<header class="header">
  <div class="header-container">
    <a class="nav-link" href="/">Tom Hendra</a>
    <div class="desktop-nav">
      <nav>
        <ul class="nav-list">
          <li>
            <a class="nav-link" href="/blog">Blog</a>
          </li>
          <li>
            <a class="nav-link" href="/about">About</a>
          </li>
        </ul>
      </nav>
      <ThemeToggle />
    </div>
  </div>
</header>

<style lang="scss">
  @use '../styles/breakpoints' as *;

  .header {
    border-bottom: 1px solid var(--color-border);
  }

  .header-container {
    /* common container styles */
    margin: 0 auto;
    max-width: var(--container-xl);
    /* unique container styles */
    padding: var(--space-6) var(--space-8);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: baseline;

    @media (max-width: $breakpoint-sm) {
      align-items: center;
      padding: var(--space-4);
    }
  }

  .desktop-nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: var(--space-8);
    align-items: center;

    @media (max-width: $breakpoint-sm) {
      display: none;
    }
  }

  .nav-list {
    list-style-type: none;
    display: flex;
    gap: var(--space-8);
  }

  .nav-link {
    text-decoration: none;
    color: inherit;
  }
</style>
