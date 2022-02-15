<script context="module">
  export const load = ({url}) => {
    const currentRoute = url.pathname;

    return {
      props: {
        currentRoute,
      },
    };
  };
</script>

<script>
  import '$lib/styles/index.scss';
  import {onMount} from 'svelte';
  import {fade} from 'svelte/transition';
  import {getScrollbarWidth} from '$lib/shared/utils';
  import {ThemeToggle} from '$lib/components/';
  import {Twitter, GitHub} from '$lib/components/icons/';

  export let currentRoute;
  /* 
  vw refers to the viewport width excluding the scrollbar, so we can define
  --scrollbarWidth for use in our CSS... 
  --fullWidth: calc(100vw - var(--scrollbarWidth))
  */
  onMount(() => {
    const scrollbarWidth = getScrollbarWidth();
    document.documentElement.style.setProperty(
      '--scrollbar-width',
      scrollbarWidth + 'px',
    );
  });
</script>

<div id="wrapper" class="wrapper">
  <header class="header">
    <div class="header-container">
      <a class="nav-link" href="/">Tom Hendra</a>
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
  {#key currentRoute}
    <main
      class="main-container"
      in:fade={{duration: 150, delay: 150}}
      out:fade={{duration: 150}}
    >
      <slot />
    </main>
  {/key}
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-social-container">
        <a
          class="footer-social-icon"
          href="https://twitter.com/tomhendra"
          target="_blank"
        >
          <span class="visually-hidden"
            >Link to Tom Hendra's Twitter Account</span
          >
          <Twitter />
        </a>
        <a
          class="footer-social-icon"
          href="https://github.com/tomhendra"
          target="_blank"
        >
          <span class="visually-hidden"
            >Link to Tom Hendra's GitHub Account</span
          >
          <GitHub />
        </a>
      </div>
      <span class="footer-logo">Tom Hendra</span>
      <span class="footer-copyright"
        >© {new Date().getFullYear()} Tom Hendra</span
      >
    </div>
  </footer>
</div>

<style lang="scss">
  .wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: var(--fullWidth);
  }

  .main-container {
    /* common container styles */
    margin: 0 auto;
    max-width: var(--container-xl);
    /* unique container styles */
    padding: var(--space-8);
    flex: 1;
    width: 100%;
  }

  /* 
  header styles 
  */
  .header {
    border-bottom: 1px solid var(--colour-border);
  }

  .header-container {
    /* common container styles */
    margin: 0 auto;
    max-width: var(--container-xl);
    padding: var(--space-6) var(--space-8);
    /* unique container styles */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: baseline;
  }

  .nav-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: var(--space-8);
    align-items: center;
  }

  .nav-link-ul {
    list-style-type: none;
    display: flex;
    gap: var(--space-8);
  }

  .nav-link {
    text-decoration: none;
    color: inherit;
  }

  /* 
  footer styles 
  */
  .footer {
    background-color: var(--colour-background-footer);
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
  }

  .footer-social-container {
    display: flex;
    gap: var(--space-6);
    align-items: center;
  }

  .footer-social-icon {
    color: var(--colour-text-muted);
    width: 24px;
  }

  .footer-logo {
    color: var(--colour-heading);
    font-weight: var(--fw-semibold);
  }

  .footer-copyright {
    color: var(--colour-text-muted);
  }
</style>
