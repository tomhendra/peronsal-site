<script>
  import {Menu} from '$lib/components/icons';
</script>

<button class="mobile-menu-button" on:click>
  <Menu />
  <span class="visually-hidden">Open the mobile menu</span>
</button>

<style lang="scss">
  .mobile-menu-button {
    display: none;

    @include mobileAndDown {
      display: revert;
      position: fixed;
      bottom: var(--space-4);
      right: var(--space-4);
      background-color: var(--color-overlay);
      backdrop-filter: var(--blur-sm);
      border-radius: var(--radius-full);
      border: var(--border-1) solid var(--color-muted-border);
      padding: var(--space-5);
      color: var(--color-text);
    }
  }
</style>
