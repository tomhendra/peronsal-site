<script lang="ts">
  //https://github.com/cupcakearmy/svelte-cloudinary
  import {image} from 'svelte-cloudinary';
  import {CLOUDINARY_PROJECT_DIR} from '$lib/constants';

  export let source = '';
  export let alt = '';
  export let ratio = '';
  export let height = '';

  const src = `${CLOUDINARY_PROJECT_DIR}/${source}`;
</script>

<img
  use:image={{src, bind: true, lazy: true}}
  {alt}
  style="--ratio: {ratio}; --height: {height}"
/>

<style lang="scss">
  img {
    display: block;
    width: 100%;
    height: var(--height);
    object-fit: cover;

    @supports (aspect-ratio: 1 / 1) {
      height: revert;
      aspect-ratio: var(--ratio);
    }
  }
</style>
