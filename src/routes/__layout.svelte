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
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '$lib/styles/style.scss';
  import {fade} from 'svelte/transition';

  export let currentRoute;

  // vw refers to the viewport width not counting the scrollbar, so we define
  // --scrollbarWidth for use in style.css: calc(100vw - var(--scrollbarWidth))
  onMount(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.documentElement.style.setProperty(
      '--scrollbarWidth',
      scrollbarWidth + 'px',
    );
  });
</script>

<div class="wrapper">
  <Header />
  {#key currentRoute}
    <main in:fade={{duration: 150, delay: 150}} out:fade={{duration: 150}}>
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

  main {
    flex: 1;
  }
</style>
