<script lang="ts">
  //https://github.com/cupcakearmy/svelte-cloudinary
  import {image} from 'svelte-cloudinary';
  import {CLOUDINARY_PROJECT_DIR} from '$lib/constants';

  export let source =
    'https://plchldr.co/i/400x200?&bg=959393&fc=ffffff&text=<img />';
  export let alt = null;
  export let ratio = null;
  export let width = '100%';
  export let height = 'auto';

  const src = `${CLOUDINARY_PROJECT_DIR}/${source}`;
</script>

<img
  use:image={{src, bind: true, lazy: true}}
  {alt}
  style="--ratio: {ratio}; --width: {width}; --height: {height}"
/>

<style lang="scss">
  img {
    display: block;
    width: var(--width);
    height: var(--height);
    object-fit: cover;

    @supports (aspect-ratio: 2 / 1) {
      height: revert;
      aspect-ratio: var(--ratio);
    }
  }
</style>
