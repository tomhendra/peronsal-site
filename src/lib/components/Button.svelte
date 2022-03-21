<!-- STYLED GUIDE ONLY -->
<script lang="ts">
  export let variant: 'primary' | 'secondary' = 'primary';
  export let size: 'sm' | 'md' | 'lg' = 'md';
</script>

<button
  class="button"
  class:primary={variant === 'primary'}
  class:secondary={variant === 'secondary'}
  class:sm={size === 'sm'}
  class:md={size === 'md'}
  class:lg={size === 'lg'}
  on:click
>
  <slot>
    <em>No button text provided</em>
  </slot>
</button>

<style lang="scss">
  /* base */
  .button {
    cursor: pointer;
    border: none;
    border-radius: 6px;
    font-size: var(--font-size);
    padding: var(--padding);
  }
  /* variants */
  .primary {
    background-color: hotpink;
    color: white;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        background-color: deeppink;
      }
    }
  }
  .secondary {
    background-color: rebeccapurple;
    color: white;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        background-color: purple;
      }
    }
  }
  /* sizes */
  .sm {
    font-size: var(--font-size-text-sm);
    padding: var(--space-3) var(--space-4);
  }
  .md {
    font-size: var(--font-size-text-md);
    padding: var(--space-4) var(--space-6);
  }
  .lg {
    font-size: var(--font-size-text-lg);
    padding: var(--space-6) var(--space-8);
  }
</style>
