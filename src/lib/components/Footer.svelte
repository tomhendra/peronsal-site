<script>
  import {Twitter, GitHub} from './icons';
</script>

<footer class="footer">
  <div class="footer-container">
    <div class="footer-social-container">
      <a
        class="footer-social-link"
        href="https://twitter.com/tomhendra"
        target="_blank"
      >
        <Twitter />
        <span class="visually-hidden">Link to Tom Hendra's Twitter Account</span
        >
      </a>
      <a
        class="footer-social-link"
        href="https://github.com/tomhendra"
        target="_blank"
      >
        <GitHub />
        <span class="visually-hidden">Link to Tom Hendra's GitHub Account</span>
      </a>
    </div>
    <span class="footer-logo">Tom Hendra</span>
    <span class="footer-copyright"
      >&copy; {new Date().getFullYear()} Tom Hendra</span
    >
  </div>
</footer>

<style lang="scss">
  .footer {
    background-color: var(--gray-800);
  }

  .footer-container {
    /* common container styles */
    margin: 0 auto;
    max-width: var(--container-xl);
    /* unique container styles */
    padding: var(--space-12) var(--space-8);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: breakpoints.$sm) {
      flex-direction: column;
      align-items: center;
      padding: var(--space-12) var(--space-4);
      gap: var(--space-6);
    }
  }

  .footer-social-container {
    display: flex;
    gap: var(--space-6);
    align-items: center;
  }

  .footer-social-link {
    color: var(--gray-400);
    /* 
      in CSS for JS devs in module 9 there will be a way to increase tap 
      target without affecting the design
      
      min-height: var(--min-tap-size);
      min-width: var(--min-tap-size); 
    */
  }

  .footer-logo {
    color: var(--gray-400);
    font-weight: var(--font-weight-semibold);

    @media (max-width: breakpoints.$sm) {
      order: -1;
      margin-bottom: var(--space-6);
    }
  }

  .footer-copyright {
    color: var(--gray-400);
  }
</style>
