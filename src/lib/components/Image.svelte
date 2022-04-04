<script lang="ts">
  //https://github.com/cupcakearmy/svelte-cloudinary
  import {image} from 'svelte-cloudinary';
  import {CLOUDINARY_PROJECT_DIR} from '$lib/constants';

  const placeholder =
    'https://plchldr.co/i/400x200?&bg=959393&fc=ffffff&text=<img />';

  export let source = placeholder;
  export let alt = null;
  export let ratio = null;
  export let width = '100%';
  export let height = 'auto';
  export let maxWidth = null;
  export let maxHeight = null;
  export let objectFit = 'cover';

  const src = `${CLOUDINARY_PROJECT_DIR}/${source}`;
</script>

<img
  use:image={{src, bind: true, lazy: true}}
  {alt}
  style="
    --ratio: {ratio}; 
    --width: {width};
    --height: {height};
    --max-width: {maxWidth};
    --max-height: {maxHeight};
    --object-fit: {objectFit};
  "
/>

<style lang="scss">
  img {
    display: block;
    width: var(--width);
    height: var(--height);
    max-width: var(--max-width);
    max-height: var(--max-height);
    object-fit: var(--object-fit);

    @supports (aspect-ratio: 1 / 1) {
      aspect-ratio: var(--ratio);
      height: revert;
    }
  }
</style>
