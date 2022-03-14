<script lang="ts">
  //https://github.com/cupcakearmy/svelte-cloudinary
  import {image, initialize} from 'svelte-cloudinary';
  import {CLOUDINARY_PLUBLIC_ID, CLOUDINARY_PROJECT_DIR} from '$lib/constants';

  export let filename = '';
  export let alt = '';
  export let ratio = '';
  export let height = '';

  const src = `${CLOUDINARY_PROJECT_DIR}/${filename}`;

  initialize({cloud_name: CLOUDINARY_PLUBLIC_ID});
</script>

<img
  use:image={{src, bind: true, lazy: true}}
  class="img"
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
