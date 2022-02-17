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
  import MobileMenuButton from '../lib/components/MobileMenuButton.svelte';

  import '$lib/styles/index.scss';
  import {onMount} from 'svelte';
  import {fade} from 'svelte/transition';
  import {getScrollbarWidth} from '$lib/shared/utils';
  import {Header, Footer} from '$lib/components';
  import {Menu} from '$lib/components/icons';
  import MobileMenu from '$lib/components/MobileMenu.svelte';
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

  export let currentRoute;

  let isMobileMenuOpen = false;
  const toggleMobileMenu = () => (isMobileMenuOpen = !isMobileMenuOpen);
</script>

<div id="wrapper" class="wrapper">
  <Header />
  <MobileMenuButton on:click={toggleMobileMenu}>
    <Menu />
  </MobileMenuButton>
  <MobileMenu open={isMobileMenuOpen} close={toggleMobileMenu} />
  {#key currentRoute}
    <main
      class="main-container"
      in:fade={{duration: 150, delay: 150}}
      out:fade={{duration: 150}}
    >
      <slot />
    </main>
  {/key}
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

  .main-container {
    /* common container styles */
    margin: 0 auto;
    max-width: var(--container-xl);
    /* unique container styles */
    padding: 0 var(--space-8);
    flex: 1;
    width: 100%;

    @media (max-width: $breakpoint-sm) {
      padding: 0 var(--space-4);
    }
  }
</style>
