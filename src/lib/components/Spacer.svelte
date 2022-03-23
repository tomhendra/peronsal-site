<script lang="ts">
  export let axis: 'horizontal' | 'vertical' | null = null;
  export let size: number | null = null;

  let height = axis === 'horizontal' ? 1 : size;
  let width = axis === 'vertical' ? 1 : size;
  /* 
    adapted for svelte from https://www.joshwcomeau.com/react/modern-spacer-gif/

    this component uses pixel values, because it's often necessary to pick 
    out-of-scale values for optical alignment
   */
</script>

<span style="--height: {height}; --width: {width};" />

<style>
  span {
    display: block;
    width: var(--width);
    min-width: var(--width);
    height: var(--height);
    min-height: var(--height);
  }
</style>
