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
    &:hover {
      background-color: deeppink;
    }
  }
  .secondary {
    background-color: rebeccapurple;
    color: white;
    &:hover {
      background-color: purple;
    }
  }
  /* sizes */
  .sm {
    font-size: 8px;
    padding: 10px 14px;
  }
  .md {
    font-size: 12px;
    padding: 10px 16px;
  }
  .lg {
    font-size: 16px;
    padding: 12px 24px;
  }
</style>
