<script>
  export let size = 'md';

  const SIZES = {
    sm: `--font-size: 8px; --padding: 10px 14px;`,
    md: `--font-size: 12px; --padding: 10px 16px;`,
    lg: `--font-size: 16px; --padding: 12px 24px;`,
  };

  const style = SIZES[size];
</script>

<!-- https://svelte.dev/tutorial/dom-event-forwarding -->
<button class="btn" on:click {style}>
  <slot>
    <em>No button text provided</em>
  </slot>
</button>

<style>
  .btn {
    background-color: hotpink;
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 6px;
    font-size: var(--font-size);
    padding: var(--padding);
  }

  .btn:hover {
    background-color: deeppink;
  }
</style>
