<script lang="ts">
  import {ThemeToggle} from '$lib/components/';
  import {Dialog, DialogOverlay} from '@rgossiaux/svelte-headlessui';
  import {Close} from './icons';
  import MobileMenuButton from './MobileMenuButton.svelte';

  export let open: Boolean;
  export let close: () => void;
</script>

<Dialog class="hui-dialog" {open}>
  <DialogOverlay class="hui-dialog-overlay" />
  <div class="mobile-menu">
    <nav class="mobile-nav">
      <a class="nav-link" href="/">Home</a>
      <a class="nav-link" href="/blog">Blog</a>
      <a class="nav-link" href="/about">About</a>
    </nav>
    <ThemeToggle />
    <MobileMenuButton on:click={close}>
      <Close />
    </MobileMenuButton>
  </div>
</Dialog>

<style lang="scss">
  :global(.hui-dialog) {
    padding: var(--space-8);
  }

  :global(.hui-dialog-overlay) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--color-overlay);
    backdrop-filter: var(--blur-sm);
  }

  .mobile-menu {
    display: flex;
    flex-direction: column;
    gap: var(--space-8);
    height: 100%;
    background-color: var(--color-background);
    position: absolute;
    top: 0;
    right: 100px;
    bottom: 0;
    left: 0;
    padding: var(--space-12);
  }

  .mobile-nav {
    display: flex;
    flex-direction: column;
    gap: var(--space-8);
  }

  .nav-link {
    text-decoration: none;
    color: inherit;
  }
</style>
