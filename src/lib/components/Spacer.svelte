<script lang="ts">
  export let axis: 'horizontal' | 'vertical' | null = null;
  export let size: number = 0;
  export let when: {
    tabletAndDown: number;
    mobileAndDown: number;
  };
  /* 
    adapted for svelte from https://www.joshwcomeau.com/react/modern-spacer-gif/

    this component uses pixel values, because it's often necessary to pick 
    out-of-scale values for optical alignment.

    default is a square. use axis prop to make the spacer 1px tall or wide.
   */
  let height = axis === 'horizontal' ? 1 : size;
  let width = axis === 'vertical' ? 1 : size;

  let tabletAndDownHeight = axis === 'horizontal' ? 1 : when.tabletAndDown;
  let tabletAndDownWidth = axis === 'vertical' ? 1 : when.tabletAndDown;

  let mobileAndDownWidth = axis === 'vertical' ? 1 : when.mobileAndDown;
  let mobileAndDownHeight = axis === 'horizontal' ? 1 : when.mobileAndDown;
</script>

<span
  style="
    --height: {height}px; 
    --width: {width}px; 
    --tabletAndDownHeight: {tabletAndDownHeight}px; 
    --tabletAndDownWidth: {tabletAndDownWidth}px;
    --mobileAndDownHeight: {mobileAndDownHeight}px;
    --mobileAndDownWidth: {mobileAndDownWidth}px;
  "
/>

<style lang="scss">
  span {
    display: block;
    width: var(--width);
    min-width: var(--width);
    height: var(--height);
    min-height: var(--height);

    @include tabletAndDown {
      width: var(--tabletAndDownWidth);
      min-width: var(--tabletAndDownWidth);
      height: var(--tabletAndDownHeight);
      min-height: var(--tabletAndDownHeight);
    }

    @include mobileAndDown {
      width: var(--mobileAndDownWidth);
      min-width: var(--mobileAndDownWidth);
      height: var(--mobileAndDownHeight);
      min-height: var(--mobileAndDownHeight);
    }
  }
</style>
