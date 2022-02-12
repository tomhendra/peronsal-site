<script>
  import {ThemeToggle} from '$lib/components';
</script>

<header class="header">
  <div class="header-container">
    <a class="nav-link" href="/">Home</a>
    <div class="nav-container">
      <nav>
        <ul class="nav-link-ul">
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

<style>
  .header-container {
    /* common container styles */
    margin: 0 auto;
    max-width: var(--container-xl);
    padding: var(--space-8);
    /* unique container styles */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .nav-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: baseline;
    gap: var(--space-8);
  }

  .nav-link-ul {
    list-style-type: none;
    display: flex;
    gap: 1rem;
  }

  .nav-link {
    text-decoration: none;
    color: inherit;
  }
</style>
