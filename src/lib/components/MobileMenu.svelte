<script lang="ts">
  import {ThemeToggle} from '$lib/components/';
  import {
    Dialog,
    DialogOverlay,
    DialogTitle,
    DialogDescription,
  } from '@rgossiaux/svelte-headlessui';
  import {Close} from './icons';
  import MobileMenuButton from './MobileMenuButton.svelte';

  export let open: Boolean;
  export let close: () => void;
</script>

<Dialog class="hui-dialog--mobile-menu" {open} on:close={close}>
  <DialogOverlay class="hui-dialog-overlay--mobile-menu" />
  <DialogTitle>Mobile Menu</DialogTitle>
  <DialogDescription
    >Navigate to another part of the website, or toggle the colour theme.
  </DialogDescription>
  <div class="mobile-menu">
    <nav class="mobile-menu-nav">
      <a class="nav-link" href="/">Home</a>
      <a class="nav-link" href="/blog">Blog</a>
      <a class="nav-link" href="/about">About</a>
    </nav>
    <ThemeToggle />
    <MobileMenuButton on:click={close}>
      <Close />
      <span class="visually-hidden">Close the mobile menu</span>
    </MobileMenuButton>
  </div>
</Dialog>

<style lang="scss">
  :global(.hui-dialog-overlay--mobile-menu) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--color-overlay);
    backdrop-filter: var(--blur-sm);
  }

  .mobile-menu {
    position: fixed;
    top: 0;
    right: var(--space-24);
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-8);
    background-color: var(--color-background);
    padding: var(--space-24) var(--space-8);
  }

  .mobile-menu-nav {
    display: flex;
    flex-direction: column;
    gap: var(--space-8);
  }

  .nav-link {
    text-decoration: none;
    color: inherit;
  }
</style>
