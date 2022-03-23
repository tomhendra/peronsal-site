<script lang="ts">
  export let axis: 'x' | 'y' = 'y';
  export let size:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 8
    | 10
    | 12
    | 16
    | 20
    | 24
    | 32
    | 40
    | 48
    | 56
    | 64 = 1;
</script>

<span
  style="
    --height: {axis === 'x' ? 1 : `var(--space-${size})`};
    --width: {axis === 'y' ? 1 : `var(--space-${size})`}; 
  "
/>

<style>
  span {
    display: block;
    width: var(--width);
    min-width: var(--width);
    height: var(--height);
    min-height: var(--height);
  }
</style>
