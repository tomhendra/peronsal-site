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
  import {onMount} from 'svelte';
  import {fade} from 'svelte/transition';

  import '$lib/styles/index.scss';
  import {getScrollbarWidth} from '$lib/utils';
  import {Header, Footer} from '$lib/components';

  export let currentRoute;
  onMount(() => {
    /* 
    vw refers to the viewport width excluding the scrollbar, so we can define
    --scrollbarWidth for use in our CSS... 
    --fullWidth: calc(100vw - var(--scrollbarWidth))
    */
    const scrollbarWidth = getScrollbarWidth();

    document.documentElement.style.setProperty(
      '--scrollbar-width',
      scrollbarWidth + 'px',
    );
  });
</script>

<div class="wrapper">
  <Header />
  {#key currentRoute}
    <main
      class="container"
      in:fade={{duration: 150, delay: 150}}
      out:fade={{duration: 150}}
    >
      <slot />
    </main>
  {/key}
  <Footer />
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: var(--fullWidth);
  }

  .container {
    /* common container styles */
    margin: 0 auto;
    max-width: var(--container-xl);
    padding: var(--space-8);
    /* unique container styles */
    flex: 1;
    width: 100%;
  }
</style>
