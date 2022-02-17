<button class="mobile-menu-button" on:click>
  <slot />
</button>

<style lang="scss">
  @use '../styles/breakpoints' as *;

  .mobile-menu-button {
    display: none;

    @media (max-width: $breakpoint-sm) {
      display: revert;
      position: fixed;
      bottom: var(--space-4);
      right: var(--space-4);
      background-color: transparent;
      backdrop-filter: var(--blur-sm);
      border-radius: var(--radius-full);
      border: var(--border-2) solid var(--color-text);
      padding: var(--space-5);
      color: var(--color-text);
    }
  }
</style>
