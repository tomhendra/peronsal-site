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
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '$lib/styles/style.scss';
  import {fade} from 'svelte/transition';

  export let currentRoute;
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
