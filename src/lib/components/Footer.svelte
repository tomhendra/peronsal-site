<script>
  import {Menu, Twitter, GitHub} from '$lib/components/icons';
</script>

<footer>
  <div class="max-width-container">
    <div class="social-container">
      <a href="https://twitter.com/tomhendra" target="_blank">
        <Twitter />
        <span class="visually-hidden">Link to Tom Hendra's Twitter Account</span
        >
      </a>
      <a href="https://github.com/tomhendra" target="_blank">
        <GitHub />
        <span class="visually-hidden">Link to Tom Hendra's GitHub Account</span>
      </a>
    </div>
    <a class="logo-container" href="/">
      <img src="/logo.svg" alt="Logo - Home" />
      <span>Tom Hendra</span>
    </a>
    <span>&copy; {new Date().getFullYear()} Tom Hendra</span>
  </div>
</footer>

<style lang="scss">
  footer {
    background-color: var(--gray-800);
    color: var(--gray-400);

    a {
      text-decoration: none;
      color: inherit;
    }
  }

  .max-width-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding-top: var(--space-12);
    padding-bottom: var(--space-12);

    @include mobileAndDown {
      flex-direction: column;
      gap: var(--space-6);
    }
  }

  .social-container {
    display: flex;
    align-items: center;
    gap: var(--space-6);
  }

  .logo-container {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    color: var(--gray-400);
    font-weight: var(--font-weight-semibold);

    img {
      width: var(--space-8);
    }

    @include mobileAndDown {
      order: -1;
      margin-bottom: var(--space-6);
    }
  }
</style>
