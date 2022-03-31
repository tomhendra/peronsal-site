<script>
  import {Twitter, GitHub, TomhendraLogo} from '$lib/components/icons';
</script>

<footer>
  <div class="max-width-container footer-container">
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
      <TomhendraLogo />
      <span class="wordmark">Tom Hendra</span>
      <span class="visually-hidden">Tom Hendra logo - Home</span>
    </a>
    <div class="copyright">
      <span class="copyright-text"
        >&copy; {new Date().getFullYear()} Tom Hendra</span
      >
    </div>
  </div>
</footer>

<style lang="scss">
  footer {
    background-color: var(--color-background);
    color: var(--gray-400);

    a {
      text-decoration: none;
      color: inherit;
    }
  }

  .footer-container {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    justify-items: center;
    padding-top: var(--space-12);
    padding-bottom: var(--space-12);

    @include mobileAndDown {
      grid-auto-flow: row;
      gap: var(--space-6);
    }
  }

  .social-container {
    display: flex;
    align-items: center;
    gap: var(--space-6);
    justify-self: start;

    @include mobileAndDown {
      justify-self: revert;
    }
  }

  .logo-container {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    color: var(--gray-400);

    @include mobileAndDown {
      order: -1;
      margin-bottom: var(--space-6);
    }

    .wordmark {
      color: var(--color-heading);
    }
  }

  .copyright {
    font-size: var(--font-size-text-md);
    justify-self: end;

    @include mobileAndDown {
      justify-self: revert;
    }
  }
</style>
