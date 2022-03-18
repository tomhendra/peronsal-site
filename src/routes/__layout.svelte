<script>
  // https://svelte-cloudinary.vercel.app/#%F0%9F%91%B7-sapper
  import {initialize} from 'svelte-cloudinary';
  import {CLOUDINARY_PLUBLIC_ID} from '$lib/constants';
  initialize({cloud_name: CLOUDINARY_PLUBLIC_ID});

  import '$lib/styles/global.scss';
  import {onMount} from 'svelte';
  import {getScrollbarWidth} from '$lib/utils';
  import {MobileMenu, MobileMenuButton, ThemeToggle} from '$lib/components';
  import {Menu, Twitter, GitHub} from '$lib/components/icons';
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

  let isMobileMenuOpen = false;

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }
</script>

<div id="wrapper" class="wrapper">
  <header>
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
  <MobileMenuButton on:click={toggleMobileMenu}>
    <Menu />
    <span class="visually-hidden">Open the mobile menu</span>
  </MobileMenuButton>
  <MobileMenu open={isMobileMenuOpen} close={toggleMobileMenu} />
  <main>
    <slot />
  </main>
  <footer>
    <div class="container">
      <div class="social-container">
        <a href="https://twitter.com/tomhendra" target="_blank">
          <Twitter />
          <span class="visually-hidden"
            >Link to Tom Hendra's Twitter Account</span
          >
        </a>
        <a href="https://github.com/tomhendra" target="_blank">
          <GitHub />
          <span class="visually-hidden"
            >Link to Tom Hendra's GitHub Account</span
          >
        </a>
      </div>
      <a class="logo-container" href="/">
        <img src="/logo.svg" alt="Logo - Home" />
        <span>Tom Hendra</span>
      </a>
      <span>&copy; {new Date().getFullYear()} Tom Hendra</span>
    </div>
  </footer>
</div>

<style lang="scss">
  .wrapper {
    width: var(--fullWidth);
    min-height: 100%;
    display: grid;
    grid-template-rows: 80px 1fr 128px;

    @media (max-width: breakpoints.$sm) {
      grid-template-rows: 80px 1fr 375px;
    }
  }

  main {
    max-width: var(--container-xl);
    width: 100%;
    justify-self: center;
    padding: 0 var(--space-8);

    @media (max-width: breakpoints.$sm) {
      padding: 0 var(--space-4);
    }
  }

  /* header styles */
  header {
    position: sticky;
    top: -16px;
    padding-top: 16px;
    background-color: var(--color-background);
    border-bottom: 1px solid var(--color-muted-separator);

    & a {
      text-decoration: none;
      color: inherit;
    }

    & nav {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-8);

      @media (max-width: breakpoints.$sm) {
        display: none;
      }
    }
  }

  header .container {
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

  header .logo-container {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    margin-right: auto;

    & img {
      width: var(--space-8);
    }
  }

  /* footer styles */
  footer {
    background-color: var(--gray-800);
    color: var(--gray-400);

    & a {
      text-decoration: none;
      color: inherit;
    }
  }

  footer .container {
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

  footer .social-container {
    display: flex;
    align-items: center;
    gap: var(--space-6);
  }

  footer .logo-container {
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
