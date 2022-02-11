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
  import {Header, Footer} from '$lib/components';

  export let currentRoute;
  /*
    vw refers to the viewport width excluding the scrollbar, so we define
    --scrollbarWidth for use in our CSS...
    --fullWidth: calc(100vw - var(--scrollbarWidth))
   */
  onMount(() => {
    const viewportWidth = window.innerWidth;
    const viewportWidthWithoutScrollbar = document.documentElement.clientWidth;
    const scrollbarWidth = viewportWidth - viewportWidthWithoutScrollbar;

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
    width: var(--full-width);
  }

  .container {
    flex: 1;
    margin: 0 auto;
    max-width: var(--container-md);
    padding: var(--space-4);
  }
</style>
