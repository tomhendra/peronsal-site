<script>
  export let size = 'md';
  export let text = 'button';

  const SIZES = {
    sm: `--font-size: 8px; --padding: 10px 14px;`,
    md: `--font-size: 12px; --padding: 10px 16px;`,
    lg: `--font-size: 16px; --padding: 12px 24px;`,
  };

  const style = SIZES[size];
  // https://svelte.dev/tutorial/component-events
  import {createEventDispatcher} from 'svelte';
  const dispatch = createEventDispatcher();

  function logMessage() {
    dispatch('message', {
      message: 'Hello from the button component!',
    });
  }
</script>

<!-- https://svelte.dev/tutorial/dom-event-forwarding -->
<button class="btn" on:click on:click={logMessage} {style}>{text}</button>

<style>
  .btn {
    background-color: hsl(165deg 47% 47% / 1);
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 6px;
    font-size: var(--font-size);
    padding: var(--padding);
  }

  .btn:hover {
    background-color: hsl(165deg 55% 54% / 1);
  }
</style>
