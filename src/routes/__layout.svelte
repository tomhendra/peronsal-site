<script>
  import '$lib/styles/global.scss';
  import {onMount} from 'svelte';
  import {prefetch} from '$app/navigation';
  import {getScrollbarWidth, checkPrefersReducedData} from '$lib/utils';
  import {MobileMenu, MobileMenuButton, Header, Footer} from '$lib/components';
  import {initialize} from 'svelte-cloudinary';
  import {CLOUDINARY_PLUBLIC_ID} from '$lib/constants';
  // https://svelte-cloudinary.vercel.app/#%F0%9F%91%B7-sapper
  initialize({cloud_name: CLOUDINARY_PLUBLIC_ID});
  onMount(() => {
    /* 
      vw units target the viewport width excluding the scrollbar. to use vw units
      without potential layout shift, we need to calculate the scrollbar width at 
      the earliest oppurtunity, which is here in the main layout component. 
    */
    const scrollbarWidth = getScrollbarWidth();
    document.documentElement.style.setProperty(
      '--scrollbar-width',
      scrollbarWidth + 'px',
    );
  });

  onMount(() => {
    if (!checkPrefersReducedData()) {
      prefetch('/');
      prefetch('/about');
    }
  });

  let isMobileMenuOpen = false;
  const toggleMobileMenu = () => (isMobileMenuOpen = !isMobileMenuOpen);
</script>

<div id="wrapper" class="wrapper">
  <Header />
  <MobileMenuButton on:click={toggleMobileMenu} />
  <MobileMenu open={isMobileMenuOpen} close={toggleMobileMenu} />
  <slot />
  <Footer />
</div>

<style lang="scss">
  .wrapper {
    min-height: 100%;
    display: grid;
    grid-template-rows: 80px 1fr 128px;

    @include mobileAndDown {
      grid-template-rows: 80px 1fr 248px;
    }
  }
</style>
