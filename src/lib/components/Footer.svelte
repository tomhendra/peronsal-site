<script>
  import {Twitter, GitHub} from './icons';
</script>

<footer class="footer">
  <div class="footer-container">
    <div class="social-container">
      <a
        class="social-link"
        href="https://twitter.com/tomhendra"
        target="_blank"
      >
        <Twitter />
        <span class="visually-hidden">Link to Tom Hendra's Twitter Account</span
        >
      </a>
      <a
        class="social-link"
        href="https://github.com/tomhendra"
        target="_blank"
      >
        <GitHub />
        <span class="visually-hidden">Link to Tom Hendra's GitHub Account</span>
      </a>
    </div>
    <div class="logo-wrapper">
      <a href="/">
        <img src="/logo.svg" alt="Logo - Home" class="logo" />
      </a>
      <a href="/" class="nav-link">Tom Hendra</a>
    </div>
    <span class="copyright">&copy; {new Date().getFullYear()} Tom Hendra</span>
  </div>
</footer>

<style lang="scss">
  .footer {
    background-color: var(--gray-800);
    color: var(--gray-400);
  }

  .footer-container {
    /* common container styles */
    margin: 0 auto;
    max-width: var(--container-xl);
    /* unique container styles */
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: var(--space-12) var(--space-8);

    @media (max-width: breakpoints.$sm) {
      flex-direction: column;
      align-items: center;
      padding: var(--space-12) var(--space-4);
      gap: var(--space-6);
    }
  }

  .social-container {
    display: flex;
    gap: var(--space-6);
    align-items: center;
  }

  .social-link {
    color: var(--gray-400);
    /* 
      in CSS for JS devs in module 9 there will be a way to increase tap 
      target without affecting the design
      
      min-height: var(--min-tap-size);
      min-width: var(--min-tap-size); 
    */
  }

  .logo-wrapper {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    color: var(--gray-400);
    font-weight: var(--font-weight-semibold);

    @media (max-width: breakpoints.$sm) {
      order: -1;
      margin-bottom: var(--space-6);
    }
  }

  .logo {
    width: var(--space-8);
  }

  .nav-link {
    text-decoration: none;
    color: inherit;
  }

  .copyright {
    color: var(--gray-400);
  }
</style>
