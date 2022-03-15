<script>
  import {Twitter, GitHub} from './icons';
</script>

<footer class="footer">
  <div class="container">
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
  /* 
      in CSS for JS devs in module 9 there will be a way to increase tap 
      target without affecting the design -- use this for the social icons
      
      min-height: var(--min-tap-size);
      min-width: var(--min-tap-size); 
    */

  .footer {
    background-color: var(--gray-800);
    color: var(--gray-400);

    & a {
      text-decoration: none;
      color: inherit;
    }
  }

  .container {
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
      padding: var(--space-12) var(--space-4);
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

    & img {
      width: var(--space-8);
    }

    @media (max-width: breakpoints.$sm) {
      order: -1;
      margin-bottom: var(--space-6);
    }
  }
</style>
