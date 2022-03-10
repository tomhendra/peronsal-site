<script>
  import '$lib/styles/global.scss';
  import {onMount} from 'svelte';
  import {getScrollbarWidth} from '$lib/utils';
  import {Header, Footer, MobileMenu, MobileMenuButton} from '$lib/components';
  import {Menu} from '$lib/components/icons';
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
  <Header />
  <MobileMenuButton on:click={toggleMobileMenu}>
    <span class="visually-hidden">Open the mobile menu</span>
    <Menu />
  </MobileMenuButton>
  <MobileMenu open={isMobileMenuOpen} close={toggleMobileMenu} />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style lang="scss">
  @use '../lib/styles/breakpoints' as *;

  .wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: var(--fullWidth);
  }

  .wrapper main {
    /* common container styles */
    margin: 0 auto;
    max-width: var(--container-xl);
    /* unique container styles */
    padding: 0 var(--space-8);
    flex: 1;
    width: 100%;

    @media (max-width: $sm) {
      padding: 0 var(--space-4);
    }
  }
</style>
